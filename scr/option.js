
const TUICOptionHTML = {
    displaySetting: function (rootElement = "") {
        let TWITTER_setting_back = rootElement;


        let TUICPrefHTML = TUICLibrary.HTMLParse(this.TUICOptionHTML())
        TWITTER_setting_back.appendChild(TUICPrefHTML);

        document.querySelector("#css_textarea").value = localStorage.getItem("TUIC_CSS");

        this.eventHandle()

    },
    eventHandle: function () {
        for (const elem in this.eventList) {
            listItem = this.eventList[elem]
            if (listItem.single) {
                document.querySelector(elem).addEventListener(listItem.type, listItem.function)
            } else {
                for (let elm of document.querySelectorAll(elem)) {
                    elm.addEventListener(listItem.type, listItem.function);
                }
            }
        }
    },
    eventList: {
        ".TUICButtonColor": {
            "type": "change",
            "function": function (event) {
                let colorValue = TUICLibrary.color.hex2rgb(event.target.value)
                if ((TUICPref.buttonColor[event.target.getAttribute("TUICColor")] ?? "unknown") == "unknown") TUICPref.buttonColor[event.target.getAttribute("TUICColor")] = {}
                TUICPref.buttonColor[event.target.getAttribute("TUICColor")][event.target.getAttribute("TUICColorType")] = `rgba(${colorValue[0]},${colorValue[1]},${colorValue[2]},${document.getElementById(`${event.target.getAttribute("TUICColor")}-${event.target.getAttribute("TUICColorType")}-check`).checked ? 0 : 1})`
                document.getElementById(`${event.target.getAttribute("TUICColor")}-${event.target.getAttribute("TUICColorType")}-default`).classList.remove(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"))
                event.currentTarget.parentElement.parentElement.parentElement.parentElement.classList.remove(TUICLibrary.getClasses.getClass("TUIC_ISNOTDEFAULT"))
                localStorage.setItem("TUIC", JSON.stringify(TUICPref))
                TUICCustomCSS()
            },
            "single": false
        },
        ".TUICButtonColorCheck": {
            "type": "change",
            "function": function (event) {
                let colorValue = TUICLibrary.color.hex2rgb(document.getElementById(`${event.target.getAttribute("TUICColor")}-${event.target.getAttribute("TUICColorType")}`).value)
                if ((TUICPref.buttonColor[event.target.getAttribute("TUICColor")] ?? "unknown") == "unknown") TUICPref.buttonColor[event.target.getAttribute("TUICColor")] = {}
                TUICPref.buttonColor[event.target.getAttribute("TUICColor")][event.target.getAttribute("TUICColorType")] = `rgba(${colorValue[0]},${colorValue[1]},${colorValue[2]},${event.target.checked ? 0 : 1})`
                document.getElementById(`${event.target.getAttribute("TUICColor")}-${event.target.getAttribute("TUICColorType")}-default`).classList.remove(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"))
                localStorage.setItem("TUIC", JSON.stringify(TUICPref))
                event.currentTarget.parentElement.parentElement.classList.remove(TUICLibrary.getClasses.getClass("TUIC_ISNOTDEFAULT"))
                TUICCustomCSS()
            },
            "single": false
        },
        ".TUICDfaultColor": {
            "type": "click",
            "function": function (event) {
                let TUIC_color = (TUICData.colors[event.target.getAttribute("TUICColor")][event.target.getAttribute("TUICColorType")]).replace("rgba(", "").replace(")", "").split(",")
                let TUICColor1 = TUICLibrary.color.rgb2hex([Number(TUIC_color[0]), Number(TUIC_color[1]), Number(TUIC_color[2])])
                document.getElementById(`${event.target.getAttribute("TUICColor")}-${event.target.getAttribute("TUICColorType")}`).value = TUICColor1

                if (document.getElementById(`${event.target.getAttribute("TUICColor")}-${event.target.getAttribute("TUICColorType")}-check`).checked != TUIC_color[3] == 0) document.getElementById(`${event.target.getAttribute("TUICColor")}-${event.target.getAttribute("TUICColorType")}-check`).checked = TUIC_color[3] == 0
                if ((TUICPref.buttonColor[event.target.getAttribute("TUICColor")] ?? "unknown") != "unknown" && (TUICPref.buttonColor[event.target.getAttribute("TUICColor")][event.target.getAttribute("TUICColorType")] ?? "unknown") != "unknown") delete TUICPref.buttonColor[event.target.getAttribute("TUICColor")][event.target.getAttribute("TUICColorType")]
                localStorage.setItem("TUIC", JSON.stringify(TUICPref))
                document.getElementById(`${event.target.getAttribute("TUICColor")}-${event.target.getAttribute("TUICColorType")}-check`).parentElement.parentElement.classList.add(TUICLibrary.getClasses.getClass("TUIC_ISNOTDEFAULT"))
                event.currentTarget.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"))
                TUICCustomCSS()
            },
            "single": false
        },
        ".TUICInvisibleItems": {
            "type": "click",
            "function": function (event) {
                TUICPref.invisibleItems[event.target.id] = event.target.checked
                localStorage.setItem("TUIC", JSON.stringify(TUICPref))
                TUICLibrary.getClasses.update()
            },
            "single": false
        },
        ".otherBoolSetting": {
            "type": "click",
            "function": function (event) {
                TUICPref.otherBoolSetting[event.target.id] = event.target.checked
                localStorage.setItem("TUIC", JSON.stringify(TUICPref))
                TUICLibrary.getClasses.update()
                TUICObserver.observerFunction()
            },
            "single": false
        },
        "#save": {
            "type": "click",
            "function": function () {
                localStorage.setItem("TUIC_CSS", document.querySelector("#css_textarea").value);
                TUICCustomCSS();
            },
            "single": true
        },
        "#default_set": {
            "type": "click",
            "function": function () {
                localStorage.setItem("TUIC", TUICLibrary.defaultPref.getString());
                TUICPref = TUICLibrary.defaultPref.get();

                if (window.location.pathname == "/tuic/safemode") {
                    window.location.href = `${window.location.protocol}//${window.location.hostname}`;
                } else {
                    document.querySelector("#TUIC_setting").remove();
                    TUICLibrary.getClasses.update()
                }
            },
            "single": true
        },
        ".TUIC_up_down_list_to_left": {
            "type": "click",
            "function": function (event) {
                parentBox = event.currentTarget.parentElement.parentElement
                leftBox = parentBox.children[0].children[2]
                rightBox = parentBox.children[2].children[2]

                selectedItem = parentBox.getAttribute("TUICSelectedItem")
                if ((selectedItem ?? "") != "") {
                    selectedItemElem = rightBox.querySelector("#" + selectedItem)
                    if(selectedItemElem != null){
                        leftBox.appendChild(selectedItemElem);
                        TUICOptionHTML.upDownListSetting(parentBox);
                    }
                }
            },
            "single": false
        },
        ".TUIC_up_down_list_to_right": {
            "type": "click",
            "function": function (event) {
                parentBox = event.currentTarget.parentElement.parentElement
                leftBox = parentBox.children[0].children[2]
                rightBox = parentBox.children[2].children[2]

                selectedItem = parentBox.getAttribute("TUICSelectedItem")
                if ((selectedItem ?? "") != "") {
                    selectedItemElem = leftBox.querySelector("#" + selectedItem)
                    if(selectedItemElem != null){
                        rightBox.appendChild(selectedItemElem);
                        TUICOptionHTML.upDownListSetting(parentBox);
                    }
                }
            },
            "single": false
        },
        ".TUIC_up_down_list_to_up": {
            "type": "click",
            "function": function (event) {
                parentBox = event.currentTarget.parentElement.parentElement
                leftBox = parentBox.children[0].children[2]
                selectedItem = parentBox.getAttribute("TUICSelectedItem")
                if ((selectedItem ?? "") != "") {
                    selectedItemIndex = Array.from(parentBox.querySelectorAll(".TUICUpDownContent")).findIndex(list => list === leftBox.querySelector("#" + selectedItem))
                    if(selectedItemIndex > 0){
                        leftBox.insertBefore(leftBox.children[selectedItemIndex], leftBox.children[selectedItemIndex - 1])
                        TUICOptionHTML.upDownListSetting(parentBox)
                    }
                }
            },
            "single": false
        },
        ".TUIC_up_down_list_to_down": {
            "type": "click",
            "function": function (event) {
                parentBox = event.currentTarget.parentElement.parentElement
                leftBox = parentBox.children[0].children[2]
                selectedItem = parentBox.getAttribute("TUICSelectedItem")
                if ((selectedItem ?? "") != "") {
                    selectedItemIndex = Array.from(parentBox.querySelectorAll(".TUICUpDownContent")).findIndex(list => list === leftBox.querySelector("#" + selectedItem))
                    if(selectedItemIndex != -1){
                        leftBox.insertBefore(leftBox.children[selectedItemIndex], leftBox.children[selectedItemIndex].nextSibling.nextSibling)
                        TUICOptionHTML.upDownListSetting(parentBox)
                    }
                }
            },
            "single": false
        },
        ".TUIC_up_down_list_to_default": {
            "type": "click",
            "function": function (event) {
                parentBox = event.currentTarget.parentElement.parentElement
                leftBox = parentBox.children[0].children[2]
                rightBox = parentBox.children[2].children[2]


                settingId = parentBox.getAttribute("TUICUDBox")
                TUICPref[settingId] = TUICLibrary.defaultPref.get()[settingId]
                localStorage.setItem("TUIC", JSON.stringify(TUICPref))
                parentBox.setAttribute("TUICSelectedItem","")
                let ListItem = TUICOptionHTML.upDownListItem(settingId)

                while(leftBox.childNodes.length != 0){
                    leftBox.childNodes[0].remove()
                }
                for( let elem of TUICLibrary.HTMLParseAll(ListItem[0])){
                    leftBox.appendChild(elem)
                }
                while(rightBox.childNodes.length != 0){
                    rightBox.childNodes[0].remove()
                }
                for( let elem of TUICLibrary.HTMLParseAll(ListItem[1])){
                    rightBox.appendChild(elem)

                }

                TUICOptionHTML.upDownListSetting(parentBox)
            },
            "single": false
        },
        ".TUICRadio":{
            "type": "click",
            "function": function (event) {
                TUICPref[event.currentTarget.getAttribute("name")] = event.currentTarget.getAttribute("value")
                localStorage.setItem("TUIC", JSON.stringify(TUICPref))
                TUICLibrary.getClasses.update()
                TUICObserver.observerFunction()
            },
            "single": false
        },
        ".TUICSelectImg":{
            "type": "change",
            "function": async function (event) {
                let fileID = event.currentTarget.getAttribute("TUICImgID")
                if(event.currentTarget.files.length >= 1){
                    await (new Promise((resolve, reject) => {
                        let reader = new FileReader();
                        reader.addEventListener("load",  () => {
                            localStorage.setItem(`TUIC_${fileID}`, reader.result);
                            resolve()
                        })
                        reader.readAsDataURL(event.currentTarget.files[0]);
                    }))

                }else{
                    localStorage.setItem(`TUIC_${fileID}`, "");
                }

                TUICCss()
            },
            "single": false
        },
        ".TUICUpDownContent":{
            "type":"click",
            "function":function(event){
                parentBox = event.currentTarget.parentElement.parentElement.parentElement
                selectedItem = parentBox.getAttribute("TUICSelectedItem")
                if((selectedItem ?? "") != "") parentBox.querySelector("#" + selectedItem).removeAttribute("TUICSelectedUpDownContent")
                selectItem = event.currentTarget.id
                parentBox.querySelector("#" + selectItem).setAttribute("TUICSelectedUpDownContent","true")
                parentBox.setAttribute("TUICSelectedItem",selectItem)
            },
            "single":false
        }
    },
    upDownListSetting(parentBox) {
        id = parentBox.getAttribute("TUICUDBox")
        let visible_button_list = []
        let visibleButtonsT = parentBox.children[0].children[2].querySelectorAll(".TUICUpDownContent")
        for (let i = 0; i < visibleButtonsT.length; i++) {
            visible_button_list.push(visibleButtonsT[i].id)
        }
        TUICPref[id] = visible_button_list
        localStorage.setItem("TUIC", JSON.stringify(TUICPref))
        TUICLibrary.getClasses.update()
        TUICCss()
    },

    TUICOptionHTML: function () {

        return `
<div id="TUIC_setting" class="css-1dbjc4n r-1wtj0ep r-ymttw5 r-1f1sjgu r-1e081e0">
    <div class="css-901oao css-cens5h r-jwli3a r-1tl8opc r-adyw6z r-1vr29t4 r-135wba7 r-bcqeeo r-qvutc0">
        <h2 aria-level="2" role="heading" class="css-4rbku5 css-1dbjc4n r-18u37iz">
            <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0 TUIC_setting_text">${TUICLibrary.getI18n("brandingName")}</span>
            </h2>
${this.safemodeReturnButton()}
    </div>

    <div>
        <br><br>
${this.colorsList()}
${this.upDownList("visibleButtons", "bottomTweetButtons-settingTitle",
    this.checkbox("bottomScroll",TUICPref.otherBoolSetting["bottomScroll"], "bottomTweetButtons-setting-visibleScrollBar", "otherBoolSetting"))
}
        <br><br>
${this.upDownList("sidebarButtons", "sidebarButton-settingTitle",
    this.checkbox("smallerSidebarContent",TUICPref.otherBoolSetting["smallerSidebarContent"] ?? true, "sidebarButton-setting-smallerBetweenButtons", "otherBoolSetting")
)}

${this.radioButtonList("twitterIcon", "twitterIcon-settingTitle", "TUICRadio",
  "<br>" +
  this.checkbox("roundIcon",TUICPref.otherBoolSetting["roundIcon"] ?? true, "twitterIcon-roundIcon", "otherBoolSetting") +
  this.uploadImageFile("twitterIcon-usedIcon","IconImg")
)}

        <br><br>
${this.checkboxList("invisibleItems", "invisibleItems-settingTitle", "TUICInvisibleItems")}
${this.checkboxList("clientInfo", "clientInfo-settingTitle", "otherBoolSetting")}
        <br><br>
        <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" id="default_set">${TUICLibrary.getI18n("settingUI-restoreDefaultAll")}</button>
        <br><br>
        <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_title">${TUICLibrary.getI18n("customCSS-settingTitle")}</h2><br>
        <div class="TUIC_col_setting_container">
            <form>
                <textarea id="css_textarea"></textarea>
            </form>
            <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" id="save">${TUICLibrary.getI18n("customCSS-save")}</button>
        </div>
    </div>
</div>

`
    },
    //セーフモードの戻るボタン(ただの条件分岐)
    safemodeReturnButton: function () {
        return window.location.pathname == "/tuic/safemode"
            ? `<a href="https://twitter.com" style="color:rgb(172,172,0);">&lt; ${TUICLibrary.getI18n("settingUI-goBackButton")}</a>`
            : ""
    },
    //色の設定の一行(id,type:色のIDと種類。これで判別 color:rgba形式の色,text:色の名前)
    colorSetting: function (id, type, color_, text,isDefault) {
        let [color] = [color_.escapeToUseHTML()]
        let TUIC_color = color.replace("rgba(", "").replace(")", "").split(",")
        let TUICColor1 = TUICLibrary.color.rgb2hex([Number(TUIC_color[0]), Number(TUIC_color[1]), Number(TUIC_color[2])])
        return `
        <div class="TUIC_setting_color_colmn${!isDefault ? " " + TUICLibrary.getClasses.getClass("TUIC_ISNOTDEFAULT") : ""}">
        <h4 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size:18px;">${TUICLibrary.getI18n(text)}</h4>
        <div class="TUIC_setting_input_container">
            <div class="TUIC_input_color_rounded__container">
                <div class="TUIC_input_color_rounded">
                    <input type="color" id="${id + "-" + type
            }" TUICColor="${id}" TUICColorType="${type}" value="${TUICColor1}" class="TUICButtonColor">
                    </input>
                </div>
            </div>
            <input type="checkbox" id="${`${id}-${type}-check`
            }" ${TUIC_color[3] == "0" ? "checked" : ""} TUICColor="${id}"
             TUICColorType="${type}" class="TUICButtonColorCheck">
            <label for="${`${id}-${type}-check`
            }" class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size:15px;">${TUICLibrary.getI18n("settingUI-colorPicker-transport")}</label><br>
        </div>
    </div>
    <button class="TUIC_icon_button_con TUIC_setting_button TUIC_setting_button_default TUICDfaultColor${!isDefault ? " " + TUICLibrary.getClasses.getClass("TUIC_DISPNONE") : ""}" title="${TUICLibrary.getI18n("settingUI-colorPicker-restoreDefault")}" TUICColor="${id}" TUICColorType="${type}" id="${`${id}-${type}-default`}">${TUICData.resetIconSVG}</button>`
    },
    //色の設定のひとまとまり(id:色のID。種類・色はTUICPrefから自動補完される)
    threeColorSetting: function (id) {
        return `
<h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_title TUIC_setting_text">${TUICLibrary.getI18n(TUICData.settings.colors.i18n[id])}</h2>
<div class="TUIC_col_setting_container">
${this.colorSetting(id, "background", TUICPref.buttonColor[id]?.background ?? TUICData.colors[id].background, "settingUI-colorPicker-background",!!TUICPref.buttonColor[id]?.background)}
${this.colorSetting(id, "border", TUICPref.buttonColor[id]?.border ?? TUICData.colors[id].border, "settingUI-colorPicker-border",!!TUICPref.buttonColor[id]?.border)}
${this.colorSetting(id, "color", TUICPref.buttonColor[id]?.color ?? TUICData.colors[id].color, "settingUI-colorPicker-textColor",!!TUICPref.buttonColor[id]?.color)}
</div>
`;
    },
    //色の設定の全体。forぶん回してる
    colorsList: function () {
        let TUICColors = ""
        for (const i of TUICData.settings.colors.id) {
            TUICColors += this.threeColorSetting(i)
        }
        return TUICColors
    },
    //チェックボックスの一行。(id:設定のid value:Boolで値 name:設定の名前 type:設定の分類)
    checkbox: function (id, value, name, type) {
        return `
        <div class="TUICCheckBoxParent">
            <input id=${id} ${value ? "checked" : ""
            } type="checkbox" class="${type}"></input>
            <label class="TUIC_setting_text" for="${id}">${TUICLibrary.getI18n(name)}</label>
        </div>
        `
    },
    //チェックボックスリスト(id:ID title:Stringでタイトル)
    checkboxList: function (id, title, type) {
        let TUICInvisibleCheckBox = "";
        for (let i of TUICData[id].all) {
            TUICInvisibleCheckBox += this.checkbox(i, TUICPref[id][i], TUICData[id].i18n[i], type)
        }
        return `
          <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_title">${TUICLibrary.getI18n(title)}</h2><br>
          <div class="TUIC_col_setting_container">
              ${TUICInvisibleCheckBox}
          </div>
          <br>
          `
    },
    radioButton:function(id,valueName,value,name,type){
        return `
        <div class="TUICCheckBoxParent">
                <input type="radio" name="${id}" value="${valueName}" id="${valueName}" class="${type}" ${value ? "checked" : ""}>
                <label class="TUIC_setting_text" for="${valueName}">${TUICLibrary.getI18n(name)}</label>
            </div>
        `
    },
    radioButtonList:function(id,title,type,option){
        let TUICInvisibleRadioBox = "";
        console.log(TUICData[id].all)
        for (let i of TUICData[id].all) {
            TUICInvisibleRadioBox += this.radioButton(id,i, TUICPref[id] == i, TUICData[id].i18n[i], type)
        }
        return `
        <br><br>
        <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_title">${TUICLibrary.getI18n(title)}</h2><br>
        <div class="TUIC_col_setting_container">
            ${TUICInvisibleRadioBox}
            ${option}
        </div>
        <br>`
    },
    iconButton: function(src, btnAction, tooltiptag){
      return `<button class="TUIC_icon_button_con ${btnAction}" title="${TUICLibrary.getI18n(tooltiptag)}">${src}</button>`
    },
    //アップダウンリスト(id:設定のID。TUICPref直下 title:設定の名前, option:下に表示する設定)
    upDownList: function (id, title, option) {
        const UDAllValue = TUICData.settings[id].all
        let ListItem = this.upDownListItem(id)
        let TUICVisibleButtons = ListItem[0]
        let TUICInvisibleButtons = ListItem[1]
        const UpdownButtonFuncs = [
          {iconSrc: TUICData.arrowLeftIconSVG, btnAction: "TUIC_up_down_list_to_left", tooltiptag: "settingUI-upDownList-toLeft"},
          {iconSrc: TUICData.arrowUpIconSVG, btnAction: "TUIC_up_down_list_to_up", tooltiptag: "settingUI-upDownList-toUp"},
          {iconSrc: TUICData.arrowDownIconSVG, btnAction: "TUIC_up_down_list_to_down", tooltiptag: "settingUI-upDownList-toDown"},
          {iconSrc: TUICData.arrowRightIconSVG, btnAction: "TUIC_up_down_list_to_right", tooltiptag: "settingUI-upDownList-toRight"},
          {iconSrc: TUICData.resetIconSVG, btnAction: "TUIC_up_down_list_to_default", tooltiptag: "settingUI-upDownList-restoreDefault"},
        ]
        return `
<h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_title">${TUICLibrary.getI18n(title)}</h2>

        <div class="TUIC_col_setting_container">
            <div style="display:flex;" TUICUDBox="${id}" TUICSelectedItem="">
                <div style="flex: 1 2;width:50px;">
                    <h2 style="font-size:15px;" class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text">${TUICLibrary.getI18n("settingUI-upDownList-visible")}</h2><br>
                    <div id="TUIC_visible" class="TUIC_selectbox" style="--contentCount:${UDAllValue.length};">
${TUICVisibleButtons}
                    </div>
                </div>
                <div style="text-align: center;width:30px;">
                    <br>
                    <br>
                    ${UpdownButtonFuncs.map(btn => {
                      return this.iconButton(btn.iconSrc, btn.btnAction, btn.tooltiptag)
                    }).join("")}
               </div>
                <div style="flex: 1 2;width:50px;">
                    <h2 style="font-size:15px;" class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text">${TUICLibrary.getI18n("settingUI-upDownList-invisible")}</h2><br>
                    <div id="TUIC_invisible" class="TUIC_selectbox" style="--contentCount:${UDAllValue.length};">
    ${TUICInvisibleButtons}
                    </div>
                </div>
            </div>
            <br>
            ${option}
        </div>
`
    },
    //アップダウンリストの内容(id:設定のID)
    upDownListItem: function (id) {
        let TUICVisibleButtons = ""
        let TUICInvisibleButtons = ""
        for(let i of TUICPref[id]){
            TUICVisibleButtons += `<div value="${i}" id="${i}" class="TUICUpDownContent"><span>${TUICLibrary.getI18n(TUICData.settings[id].i18n[i])}</span></div>`
        }
        for (let i of TUICData.settings[id].all) {
            if (!TUICPref[id].includes(i)) {
                TUICInvisibleButtons += `<div value="${i}" id="${i}" class="TUICUpDownContent"><span>${TUICLibrary.getI18n(TUICData.settings[id].i18n[i])}</span></div>`
            }
        }
        return [TUICVisibleButtons, TUICInvisibleButtons]

    },
    uploadImageFile:function(title,id){
        return `<h3 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_title">${TUICLibrary.getI18n(title)}</h3><br>
        <input type="file" accept="image/*" class="TUIC_setting_text TUICSelectImg" TUICImgID="${id}" />
        <p class="TUIC_setting_text">${TUICLibrary.getI18n("twitterIcon-nowIcon")}</p>
        <img id="TUICIcon_${id}" class="TUICUploadedImg">`
    }
}
