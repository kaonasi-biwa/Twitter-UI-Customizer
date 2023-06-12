let setting = {};

const checkbox = (event)=>{
  let elem = event.target;
  setting[elem.id] = elem.checked;
  chrome.storage.sync.set({"TUIC":setting});
}

window.onload= ()=>{
  chrome.storage.sync.get("TUIC",async (settingT)=>{
    let isWebstore = !(await chrome.runtime.getManifest()).update_url?.includes("google.com")
    setting = settingT.TUIC ?? {iconClick:isWebstore,runBrowser:isWebstore,openTwitter:isWebstore};
    let settingList = ["iconClick","openTwitter","runBrowser"];
    for(const i of settingList){
      if(setting[i]){
        document.getElementById(i).checked = true;
      }
      document.getElementById(i).addEventListener("change",checkbox);
    }
  })
  i18nApply()
}
