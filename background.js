let updateID = ""
update1("runBrowser")

async function updateCheck(){
  let res = await fetch("https://raw.githubusercontent.com/kaonasi-biwa/Twitter-UI-Customizer/main/version.txt")
  let githubVersion = await res.text()
  let res2 = await fetch(chrome.runtime.getURL("./version.txt"))
  let extensionVersion = await res2.text()
  if(githubVersion != extensionVersion){
    let options={
      type: "basic",
      title: "Twitter UI Customizer",
      message: "新しいバージョンが公開されました。\rアップデートしてください。",
      iconUrl: "icon/icon128.png"
  };
  chrome.notifications.create(`aaa${Math.floor(Math.random() * 9007199254740992) + 1}`,options, function(notificationId){ });
  chrome.notifications.onClicked.addListener(function(notificationId) {
      chrome.tabs.create({url: "https://github.com/kaonasi-biwa/Twitter-UI-Customizer/releases"});
    });
  }

}
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
  update1(message.updateType)
});

function update1(updateType){
  updateID = updateType
  chrome.storage.sync.get("TUIC",update2)
}
function update2(settingT){
  setting = settingT.TUIC ?? {iconClick:true,runBrowser:true,openTwitter:true}
  if(setting[updateID]) updateCheck()
}