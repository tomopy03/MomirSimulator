function ActivateMomir(number) {
  var urlFetchOption = {
    "method" : "get",    
    "contentType" : "application/json; charset=utf-8",
    "muteHttpExceptions" : true
  };
  
  try{
    if(isNaN(number)) throw number;
    
    var url = encodeURI(apiurl + "?pageSize=100&type=Creature&random=true&layout=normal|flip|double-faced|leveler&contains=imageUrl&cmc=" + number);
    var res = UrlFetchApp.fetch(url, urlFetchOption);
    
    if(res.getResponseCode() != "200" ) throw res;
    
    var _ = Underscore.load();
    
    var json_all = JSON.parse(res.getContentText())["cards"];
    var json_all_distinct = json_all.filter(function (x, i, self) {
      return _.findIndex(self, {name: x.name}) === i;
    });
    Logger.log(json_all_distinct);
    
    var json = json_all_distinct[Math.floor(Math.random() * json_all_distinct.length)]
    Logger.log(json);
    
    var message = "";
    var attach = "";
    if(json == undefined || json == null){
      message = "存在しませんでした。";
    }
    else{
      message = number + " mana cost creature - ";
      if(json["imageUrl"] == undefined || json["imageUrl"] == null || json["imageUrl"] == "") {
        var txt = "no image\n" +
          "\nname: " + json["name"] + 
          "\nmana cost: " + json["manaCost"] + 
          "\ntype: " + json["type"] + 
          "\ntext: " + json["text"] + 
          "\npower: " + json["power"] +
          "\ntoughness: " + json["toughness"];
        attach = [{
          "text" : txt,
          "image_url": json["imageUrl"]
      }];
      }
      else{
        attach = [{
          "text" : json["name"],
          "image_url": json["imageUrl"]
        }];
      }
    }
    
    Logger.log(message);
    
    var options = {
      channelId: channelid, //チャンネル名
      userName: botname, //投稿するbotの名前
      message: message, //投稿するメッセージ
      attachment: attach
    };
      
    postSlackMessageMomir(options);
      
  }
  catch(e){
    Logger.log(e);
  }
  
}

function MomirFirstComesRock(){
  try{    
    var message = "First Comes Rock...";
    
    var RockPaperScissors = [
      {"name": "グー", "url": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=199848&type=card"},
      {"name": "チョキ", "url": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=148061&type=card"},
      {"name": "パー", "url": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=203855&type=card"}
    ]
    
    var spell = RockPaperScissors[Math.floor(Math.random() * RockPaperScissors.length)]
    var attach = [{
      "text" : spell["name"],
      "image_url": spell["url"]
    }];
    
    Logger.log(message);
    
    var options = {
      channelId: channelid, //チャンネル名
      userName: botname, //投稿するbotの名前
      message: message, //投稿するメッセージ
      attachment: attach
    };
      
    postSlackMessageMomir(options);
      
  }
  catch(e){
    Logger.log(e);
  }
}