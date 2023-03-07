let updateID = "";

let updateNotification = () => {
  chrome.tabs.create({ url: "https://github.com/kaonasi-biwa/Twitter-UI-Customizer/releases" });
  chrome.notifications.onClicked.removeListener(updateNotification)
}


const updateCheck = async () => {

  const githubVersion = await fetch("https://raw.githubusercontent.com/kaonasi-biwa/Twitter-UI-Customizer/main/version.txt", { cache: "no-store" })
    .then(res => res.text());
  const extensionVersion = await fetch(chrome.runtime.getURL("./version.txt"),{ cache: "no-store" })
    .then(res => res.text())
  if (!chrome.notifications.onClicked.hasListener(updateNotification) && githubVersion != extensionVersion) {

    chrome.notifications.create(`aaa${Math.floor(Math.random() * 9007199254740992) + 1}`,
      {
        type: "basic",
        title: "Twitter UI Customizer",
        message: "新しいバージョンが公開されました。\rアップデートしてください。\r" + extensionVersion + "→" + githubVersion,
        iconUrl: "icon/icon128.png"
      });
    chrome.notifications.onClicked.addListener(updateNotification);
    chrome.notifications.onClosed.addListener(() => chrome.notifications.onClicked.removeListener(updateNotification))
  }



}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if ((message.endpoint ?? "") != "") {
    deviceMessage(message.endpoint, sendResponse)
  } else if ((message.updateType ?? "unknwon") != "unknown") {
    if (message.updateType == "iconClick") chrome.notifications.onClicked.removeListener(updateNotification)
    update1(message.updateType);
  }
  return true;
});

const update1 = async (updateType) => {
  updateID = updateType;
  chrome.storage.sync.get("TUIC", (settingT) => {
    setting = settingT.TUIC ?? { iconClick: true, runBrowser: true, openTwitter: true }
    if (setting[updateID]) {
      updateCheck()
    }
  });
}

const deviceMessage = async (url, res) => {
  fetch(url, {
    "method": "GET"
  }).then((response) => {
    if (response && response.ok) {
      response.json().then((json) => {
        res(json);
      });
    }else{
      res({});
    }
  }).catch(error => {
    res({});
  });
}

chrome.notifications.onClicked.removeListener(updateNotification)
update1("runBrowser");