// momir & jhoira
function doPost(e) {
  var verify_token = PropertiesService.getScriptProperties().getProperty('VERIFY_TOKEN');
  if (verify_token != e.parameter.token) {
    throw new Error("invalid token.");
  }

  channelid = e.parameter.channel_id;

  var text = e.parameter.text;
  if(text.toLowerCase().indexOf('momir') != -1 || text.indexOf('モミール') != -1 ) {
    botname = "Momir";
    var args = text.toLowerCase().replace("momir", "").replace("モミール", "");
    if(args.indexOf("g") !== -1) {
      MomirFirstComesRock();
    }
    else {
      ActivateMomir(args.replace(/(^\s+)|(\s+$)/g, ""));
    }
  }
  else if (text.toLowerCase().indexOf('jhoira') != -1 || text.indexOf('ジョイラ') != -1 ) {
    botname = "Jhoira";
    ActivateJhoira(text.toLowerCase().replace("jhoira", "").replace("ジョイラ", "").replace(/(^\s+)|(\s+$)/g, ""));
  }
}

function postSlackMessageMomir(options) {
  var token = PropertiesService.getScriptProperties().getProperty('SLACK_ACCESS_TOKEN');

  var slackApp = SlackApp.create(token); //SlackApp インスタンスの取得

  return slackApp.postMessage(options.channelId, options.message, {username: options.userName, icon_url: MomirIcon, attachments: JSON.stringify(options.attachment)});
}

function postSlackMessageJhoira(options) {
  var token = PropertiesService.getScriptProperties().getProperty('SLACK_ACCESS_TOKEN');

  var slackApp = SlackApp.create(token); //SlackApp インスタンスの取得

  return slackApp.postMessage(options.channelId, options.message, {username: options.userName, icon_url: JhoiraIcon, attachments: JSON.stringify(options.attachment)});
}

var apiurl = PropertiesService.getScriptProperties().getProperty('MTG_API_URL');
var JhoiraIcon = encodeURI(PropertiesService.getScriptProperties().getProperty('JHOIRA_ICON_URL'));
var MomirIcon = encodeURI(PropertiesService.getScriptProperties().getProperty('MOMIR_ICON_URL'));