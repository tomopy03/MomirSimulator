function ActivateJhoira(arg) {
  var urlFetchOption = {
    "method" : "get",    
    "contentType" : "application/json; charset=utf-8",
    "muteHttpExceptions" : true
  };
  
  try{
    var ability = "";
    if (arg.toLowerCase() === "i" || arg.toLowerCase() === "instant") ability = "Instant";
    else if (arg.toLowerCase() === "s" || arg.toLowerCase() === "sorcery") ability = "Sorcery";
    else throw arg;
    
    var url = encodeURI(apiurl + "?pageSize=3&random=true&layout=normal|split|flip|double-faced|aftermath&contains=imageUrl&type=" + ability);
    var res = UrlFetchApp.fetch(url, urlFetchOption);
    
    if(res.getResponseCode() != "200" ) throw res;
    
    var json = JSON.parse(res.getContentText())["cards"];
    Logger.log(json);
    
    var message = "";
    var attach = "";
    if(json[0] == undefined || json[0] == null){
      message = "存在しませんでした。";
    }
    else{
      message = "Choose one - ";
      attach = [{
        "text" : json[0]["name"],
        "image_url": json[0]["imageUrl"]
      },{
        "text" : json[1]["name"],
        "image_url": json[1]["imageUrl"]
      },{
        "text" : json[2]["name"],
        "image_url": json[2]["imageUrl"]
      }];
    }
    
    Logger.log(message);
    
    var options = {
      channelId: channelid, //チャンネル名
      userName: botname, //投稿するbotの名前
      message: message, //投稿するメッセージ
      attachment: attach
    };
      
    postSlackMessageJhoira(options);
      
  }
  catch(e){
    Logger.log(e);
  }
  
}