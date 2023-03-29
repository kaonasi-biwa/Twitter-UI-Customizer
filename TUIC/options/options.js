let setting = {};

const checkbox = (event)=>{
  let elem = event.target;
  setting[elem.id] = elem.checked;
  chrome.storage.sync.set({"TUIC":setting});
}

window.onload= ()=>{
  chrome.storage.sync.get("TUIC",(settingT)=>{
    setting = settingT.TUIC ?? {iconClick:true,runBrowser:true,openTwitter:true};
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
