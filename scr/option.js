let editingColorType = "buttonColor";

const TUICOptionHTML = {
    displaySetting: function (rootElement = "") {
        const TWITTER_setting_back = rootElement;
        const TUICPrefHTML = TUICLibrary.HTMLParse(this.TUICOptionHTML());
        TWITTER_setting_back.appendChild(TUICPrefHTML);

        document.querySelector("#css_textarea").value = localStorage.getItem("TUIC_CSS");
        this.eventHandle();
    },
    eventHandle: function (root) {
        if ((root ?? "unknwon") == "unknwon") root = document;
        for (const elem in this.eventList) {
            const listItem = this.eventList[elem];
            if (listItem.single) {
                root.querySelector(elem)?.addEventListener(listItem.type, listItem.function);
            } else {
                for (const elm of root.querySelectorAll(elem)) {
                    elm.addEventListener(listItem.type, listItem.function);
                }
            }
        }
    },
    eventList: {
        ".TUICButtonColor": {
            type: "change",
            function: function (event) {
                const colorValue = TUICLibrary.color.hex2rgb(event.target.value);
                const colorKind = event.target.getAttribute("TUICColorKind");
                if ((TUICPref[colorKind][event.target.getAttribute("TUICColor")] ?? "unknown") == "unknown") TUICPref[colorKind][event.target.getAttribute("TUICColor")] = {};
                TUICPref[colorKind][event.target.getAttribute("TUICColor")][event.target.getAttribute("TUICColorType")] = `rgba(${colorValue[0]},${colorValue[1]},${colorValue[2]},${
                    document.getElementById(`${event.target.getAttribute("TUICColor")}-${event.target.getAttribute("TUICColorType")}-check`).checked ? 0 : 1
                })`;
                document.getElementById(`${event.target.getAttribute("TUICColor")}-${event.target.getAttribute("TUICColorType")}-default`).classList.remove(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
                event.currentTarget.parentElement.parentElement.parentElement.parentElement.classList.remove(TUICLibrary.getClasses.getClass("TUIC_ISNOTDEFAULT"));
                localStorage.setItem("TUIC", JSON.stringify(TUICPref));
                TUICCss();
            },
            single: false,
        },
        ".TUICButtonColorCheck": {
            type: "click",
            function: function (event) {
                if (!event.target.dataset.checked || event.target.dataset.checked !== "true") {
                    // 未チェック
                    event.target.dataset.checked = true;
                } else event.target.dataset.checked = false;
                const isChecked = event.target.dataset.checked === "true";
                const colorValue = TUICLibrary.color.hex2rgb(document.getElementById(`${event.target.getAttribute("TUICColor")}-${event.target.getAttribute("TUICColorType")}`).value);
                const colorKind = event.target.getAttribute("TUICColorKind");
                if ((TUICPref[colorKind][event.target.getAttribute("TUICColor")] ?? "unknown") == "unknown") TUICPref[colorKind][event.target.getAttribute("TUICColor")] = {};
                TUICPref[colorKind][event.target.getAttribute("TUICColor")][event.target.getAttribute("TUICColorType")] = `rgba(${colorValue[0]},${colorValue[1]},${colorValue[2]},${isChecked ? 0 : 1})`;
                document.getElementById(`${event.target.getAttribute("TUICColor")}-${event.target.getAttribute("TUICColorType")}-default`).classList.remove(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
                localStorage.setItem("TUIC", JSON.stringify(TUICPref));
                event.currentTarget.parentElement.parentElement.classList.remove(TUICLibrary.getClasses.getClass("TUIC_ISNOTDEFAULT"));
                TUICCss();
            },
            single: false,
        },
        ".TUICDfaultColor": {
            type: "click",
            function: function (event) {
                const TUIC_color = TUICData.colors[event.target.getAttribute("TUICColor")][event.target.getAttribute("TUICColorType")].replace("rgba(", "").replace(")", "").split(",");
                const TUICColor1 = TUICLibrary.color.rgb2hex([Number(TUIC_color[0]), Number(TUIC_color[1]), Number(TUIC_color[2])]);
                const colorKind = event.target.getAttribute("TUICColorKind");
                document.getElementById(`${event.target.getAttribute("TUICColor")}-${event.target.getAttribute("TUICColorType")}`).value = TUICColor1;

                if ((document.getElementById(`${event.target.getAttribute("TUICColor")}-${event.target.getAttribute("TUICColorType")}-check`).checked != TUIC_color[3]) == 0)
                    document.getElementById(`${event.target.getAttribute("TUICColor")}-${event.target.getAttribute("TUICColorType")}-check`).checked = TUIC_color[3] == 0;
                if ((TUICPref[colorKind][event.target.getAttribute("TUICColor")] ?? "unknown") != "unknown" && (TUICPref[colorKind][event.target.getAttribute("TUICColor")][event.target.getAttribute("TUICColorType")] ?? "unknown") != "unknown")
                    delete TUICPref[colorKind][event.target.getAttribute("TUICColor")][event.target.getAttribute("TUICColorType")];
                localStorage.setItem("TUIC", JSON.stringify(TUICPref));
                document.getElementById(`${event.target.getAttribute("TUICColor")}-${event.target.getAttribute("TUICColorType")}-check`).parentElement.parentElement.classList.add(TUICLibrary.getClasses.getClass("TUIC_ISNOTDEFAULT"));
                event.currentTarget.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
                TUICCss();
            },
            single: false,
        },
        ".TUICInvisibleItems": {
            type: "click",
            function: function (event) {
                TUICPref.invisibleItems[event.target.id] = event.target.checked;
                localStorage.setItem("TUIC", JSON.stringify(TUICPref));
                TUICLibrary.getClasses.update();
            },
            single: false,
        },
        ".otherBoolSetting": {
            type: "click",
            function: function (event) {
                TUICPref.otherBoolSetting[event.target.id] = event.target.checked;
                localStorage.setItem("TUIC", JSON.stringify(TUICPref));
                TUICLibrary.getClasses.update();
                TUICObserver.observerFunction();
            },
            single: false,
        },
        ".timelineSetting": {
            type: "click",
            function: function (event) {
                TUICPref.timeline[event.target.id] = event.target.checked;
                localStorage.setItem("TUIC", JSON.stringify(TUICPref));
                TUICLibrary.getClasses.update();
                TUICObserver.observerFunction();
            },
            single: false,
        },
        ".clientInfo": {
            type: "click",
            function: function (event) {
                TUICPref.clientInfo[event.target.id] = event.target.checked;
                localStorage.setItem("TUIC", JSON.stringify(TUICPref));
                TUICLibrary.getClasses.update();
                TUICObserver.observerFunction();
            },
            single: false,
        },
        ".rightSidebar": {
            type: "click",
            function: function (event) {
                TUICPref.rightSidebar[event.target.id] = event.target.checked;
                localStorage.setItem("TUIC", JSON.stringify(TUICPref));
                TUICLibrary.getClasses.update();
                TUICObserver.observerFunction();
            },
            single: false,
        },
        "#save": {
            type: "click",
            function: function () {
                localStorage.setItem("TUIC_CSS", document.querySelector("#css_textarea").value);
                TUICCustomCSS();
            },
            single: true,
        },
        "#default_set": {
            type: "click",
            function: function () {
                localStorage.setItem("TUIC", TUICLibrary.defaultPref.getString());
                TUICPref = TUICLibrary.defaultPref.get();

                if (window.location.pathname == "/tuic/safemode") {
                    window.location.href = `${window.location.protocol}//${window.location.hostname}`;
                } else {
                    document.querySelector("#TUIC_setting").remove();
                    TUICLibrary.getClasses.update();
                }
            },
            single: true,
        },
        ".TUIC_up_down_list_to_left": {
            type: "click",
            function: function (event) {
                const parentBox = event.currentTarget.parentElement.parentElement;
                const leftBox = parentBox.children[0].children[2];
                const rightBox = parentBox.children[2].children[2];

                const selectedItem = parentBox.getAttribute("TUICSelectedItem");
                if ((selectedItem ?? "") != "") {
                    const selectedItemElem = rightBox.querySelector("#" + selectedItem);
                    if (selectedItemElem != null) {
                        leftBox.appendChild(selectedItemElem);
                        TUICOptionHTML.upDownListSetting(parentBox);
                    }
                }
            },
            single: false,
        },
        ".TUIC_up_down_list_to_right": {
            type: "click",
            function: function (event) {
                const parentBox = event.currentTarget.parentElement.parentElement;
                const leftBox = parentBox.children[0].children[2];
                const rightBox = parentBox.children[2].children[2];

                const selectedItem = parentBox.getAttribute("TUICSelectedItem");
                if ((selectedItem ?? "") != "") {
                    const selectedItemElem = leftBox.querySelector("#" + selectedItem);
                    if (selectedItemElem != null) {
                        rightBox.appendChild(selectedItemElem);
                        TUICOptionHTML.upDownListSetting(parentBox);
                    }
                }
            },
            single: false,
        },
        ".TUIC_up_down_list_to_up": {
            type: "click",
            function: function (event) {
                const parentBox = event.currentTarget.parentElement.parentElement;
                const leftBox = parentBox.children[0].children[2];
                const selectedItem = parentBox.getAttribute("TUICSelectedItem");
                if ((selectedItem ?? "") != "") {
                    const selectedItemIndex = Array.from(parentBox.querySelectorAll(".TUICUpDownContent")).findIndex((list) => list === leftBox.querySelector("#" + selectedItem));
                    if (selectedItemIndex > 0) {
                        leftBox.insertBefore(leftBox.children[selectedItemIndex], leftBox.children[selectedItemIndex - 1]);
                        TUICOptionHTML.upDownListSetting(parentBox);
                    }
                }
            },
            single: false,
        },
        ".TUIC_up_down_list_to_down": {
            type: "click",
            function: function (event) {
                const parentBox = event.currentTarget.parentElement.parentElement;
                const leftBox = parentBox.children[0].children[2];
                const selectedItem = parentBox.getAttribute("TUICSelectedItem");
                if ((selectedItem ?? "") != "") {
                    const selectedItemIndex = Array.from(parentBox.querySelectorAll(".TUICUpDownContent")).findIndex((list) => list === leftBox.querySelector("#" + selectedItem));
                    if (selectedItemIndex != -1) {
                        leftBox.insertBefore(leftBox.children[selectedItemIndex], leftBox.children[selectedItemIndex].nextSibling.nextSibling);
                        TUICOptionHTML.upDownListSetting(parentBox);
                    }
                }
            },
            single: false,
        },
        ".TUIC_up_down_list_to_default": {
            type: "click",
            function: function (event) {
                const parentBox = event.currentTarget.parentElement.parentElement;
                const leftBox = parentBox.children[0].children[2];
                const rightBox = parentBox.children[2].children[2];

                const settingId = parentBox.getAttribute("TUICUDBox");
                TUICPref[settingId] = TUICLibrary.defaultPref.get()[settingId];
                localStorage.setItem("TUIC", JSON.stringify(TUICPref));
                parentBox.setAttribute("TUICSelectedItem", "");
                const ListItem = TUICOptionHTML.upDownListItem(settingId);

                for (const elem of TUICLibrary.HTMLParseAll(ListItem[0])) {
                    leftBox.appendChild(elem);
                }
                for (let i = 0; i < leftBox.childNodes.length; i++) {
                    leftBox.childNodes[0].remove();
                }

                for (const elem of TUICLibrary.HTMLParseAll(ListItem[1])) {
                    rightBox.appendChild(elem);
                }
                for (let i = 0; i < rightBox.childNodes.length; i++) {
                    rightBox.childNodes[0].remove();
                }

                TUICOptionHTML.upDownListSetting(parentBox);
                TUICOptionHTML.eventHandle(parentBox);
            },
            single: false,
        },
        ".TUICRadio": {
            type: "change",
            function: function (event) {
                TUICPref[event.currentTarget.getAttribute("name")] = event.currentTarget.getAttribute("value");
                localStorage.setItem("TUIC", JSON.stringify(TUICPref));
                TUICLibrary.getClasses.update();
                TUICObserver.observerFunction();
            },
            single: false,
        },
        ".TUICSelectImg": {
            type: "change",
            function: async function (event) {
                const fileID = event.currentTarget.getAttribute("TUICImgID");
                if (event.currentTarget.files.length >= 1) {
                    await new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.addEventListener("load", () => {
                            localStorage.setItem(`TUIC_${fileID}`, reader.result);
                            resolve();
                        });
                        reader.readAsDataURL(event.currentTarget.files[0]);
                    });
                } else {
                    localStorage.setItem(`TUIC_${fileID}`, "");
                }

                TUICCss();
            },
            single: false,
        },
        ".TUICUpDownContent": {
            type: "click",
            function: function (event) {
                const parentBox = event.currentTarget.parentElement.parentElement.parentElement;
                const selectedItem = parentBox.getAttribute("TUICSelectedItem");
                if ((selectedItem ?? "") != "") parentBox.querySelector("#" + selectedItem).removeAttribute("TUICSelectedUpDownContent");
                const selectItem = event.currentTarget.id;
                parentBox.querySelector("#" + selectItem).setAttribute("TUICSelectedUpDownContent", "true");
                parentBox.setAttribute("TUICSelectedItem", selectItem);
            },
            single: false,
        },
        ".TUICColorSettingRadio": {
            type: "change",
            function: function (event) {
                editingColorType = event.currentTarget.getAttribute("value");
                document.querySelector("#TUICColorSettingsDivBox").remove();
                const appendELement = TUICLibrary.HTMLParse(TUICOptionHTML.colorsList());
                document.querySelector("#colorSettingList").appendChild(appendELement);
                TUICOptionHTML.eventHandle(appendELement);
            },
            single: false,
        },
        "#TUICExport": {
            type: "click",
            function: function () {
                document.querySelector("#TUICExportBox").value = JSON.stringify(TUICPref);
            },
            single: true,
        },
        "#TUICExportCopy": {
            type: "click",
            function: function () {
                document.querySelector("#TUICExportBox").select();
                document.execCommand("copy");
            },
            single: true,
        },
        "#TUICImportWrite": {
            type: "click",
            function: function () {
                try {
                    const importPref = JSON.parse(document.querySelector("#TUICImportBox").value);
                    TUICLibrary.updatePref.updateToDefault(importPref, TUICPref);
                    TUICPref = importPref;
                    localStorage.setItem("TUIC", JSON.stringify(TUICPref));
                    if (window.location.pathname == "/tuic/safemode") {
                        window.location.href = `${window.location.protocol}//${window.location.hostname}`;
                    } else {
                        document.querySelector("#TUIC_setting").remove();
                        TUICLibrary.getClasses.update();
                        TUICCss();
                        TUICObserver.observerFunction();
                    }
                } catch (x) {
                    alert("構文解析に失敗しました");
                }
            },
            single: true,
        },
        "#TUICImportReplace": {
            type: "click",
            function: function () {
                try {
                    const importPref = JSON.parse(document.querySelector("#TUICImportBox").value);
                    TUICLibrary.updatePref.updateToDefault(importPref, TUICData.defaultPref);
                    TUICPref = importPref;
                    localStorage.setItem("TUIC", JSON.stringify(TUICPref));
                    if (window.location.pathname == "/tuic/safemode") {
                        window.location.href = `${window.location.protocol}//${window.location.hostname}`;
                    } else {
                        document.querySelector("#TUIC_setting").remove();
                        TUICLibrary.getClasses.update();
                        TUICCss();
                        TUICObserver.observerFunction();
                    }
                } catch (x) {
                    alert("構文解析に失敗しました");
                }
            },
            single: true,
        },
    },
    upDownListSetting(parentBox) {
        const id = parentBox.getAttribute("TUICUDBox");
        const visible_button_list = [];
        const visibleButtonsT = parentBox.children[0].children[2].querySelectorAll(".TUICUpDownContent");
        for (let i = 0; i < visibleButtonsT.length; i++) {
            visible_button_list.push(visibleButtonsT[i].id);
        }
        TUICPref[id] = visible_button_list;
        localStorage.setItem("TUIC", JSON.stringify(TUICPref));
        TUICLibrary.getClasses.update();
        TUICCss();
    },
    TUICOptionHTML: function () {
        /* eslint-disable */
        return `
<div id="TUIC_setting" class="css-1dbjc4n r-1wtj0ep r-ymttw5 r-1f1sjgu r-1e081e0 TUICOriginalContent">
    <div class="css-901oao css-cens5h r-jwli3a r-1tl8opc r-adyw6z r-1vr29t4 r-135wba7 r-bcqeeo r-qvutc0">
        <h2 aria-level="2" role="heading" class="css-4rbku5 css-1dbjc4n r-18u37iz">
            <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0 TUIC_setting_text">${TUICLibrary.getI18n("brandingName")}</span>
            </h2>
${this.safemodeReturnButton()}
    </div>

    <div>
        <br><br>
        <details class="TUICDetails">
            <summary class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title">${TUICLibrary.getI18n("settingColors-settingTitle")}</summary>
            <div id="colorSettingList" class="TUIC_col_setting_container">
            <div style="display:flex;">
                <input type="radio" name="TUICColorType" value="buttonColor" id="TUICColorType-Base" class="TUICColorSettingRadio" checked>
                <label class="TUIC_setting_button TUIC_setting_button_width TUICSettingRadioTypeBigButton" for="TUICColorType-Base" style="background: linear-gradient(125deg,#ffffff 0%,#ffffff 42.5%,#000000 42.5%,#000000 100%);"><span><span>${TUICLibrary.getI18n(
                    "settingColors-select-base",
                )}</span></span></label>
                <input type="radio" name="TUICColorType" value="buttonColorLight" id="TUICColorType-Light" class="TUICColorSettingRadio">
                <label class="TUIC_setting_button TUIC_setting_button_width TUICSettingRadioTypeBigButton" for="TUICColorType-Light" style="background-color:rgb(255,255,255);"><span><span>${TUICLibrary.getI18n("settingColors-select-light")}</span></span></label>
                <input type="radio" name="TUICColorType" value="buttonColorDark" id="TUICColorType-Dark" class="TUICColorSettingRadio">
                <label class="TUIC_setting_button TUIC_setting_button_width TUICSettingRadioTypeBigButton" for="TUICColorType-Dark" style="background-color:rgb(0,0,0);"><span><span>${TUICLibrary.getI18n("settingColors-select-dark")}</span></span></label>
            </div>
            <div style="margin-left:10px;margin-right:10px;">
            <span class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size:12px;">${TUICLibrary.getI18n("settingColors-select-explain")}</span>
            </div>
            <br>
            ${this.colorsList()}
            </div>
        </details>


${this.upDownList(
    "visibleButtons",
    "bottomTweetButtons-settingTitle",
    this.checkbox("bottomScroll", TUICPref.otherBoolSetting["bottomScroll"], "bottomTweetButtons-setting-visibleScrollBar", "otherBoolSetting") +
        this.checkbox("bottomSpace", TUICPref.otherBoolSetting["bottomSpace"], "bottomTweetButtons-setting-removeSpaceBottomTweet", "otherBoolSetting") +
        this.checkbox("RTNotQuote", TUICPref.otherBoolSetting["RTNotQuote"], "bottomTweetButtons-setting-RTNotQuote", "otherBoolSetting"),
)}
${this.upDownList(
    "sidebarButtons",
    "sidebarButton-settingTitle",
    this.checkbox("smallerSidebarContent", TUICPref.otherBoolSetting["smallerSidebarContent"] ?? true, "sidebarButton-setting-narrowBetweenButtons", "otherBoolSetting") +
        this.checkbox("sidebarNoneScrollbar", TUICPref.otherBoolSetting["sidebarNoneScrollbar"] ?? false, "sidebarButton-setting-sidebarNoneScrollbar", "otherBoolSetting"),
)}

${this.radioButtonList("twitterIcon", "twitterIcon-settingTitle", "TUICRadio", "<br>" + this.checkbox("roundIcon", TUICPref.otherBoolSetting["roundIcon"] ?? true, "twitterIcon-roundIcon", "otherBoolSetting") + this.uploadImageFile("twitterIcon-usedIcon", "IconImg"))}

${this.checkboxList("invisibleItems", "invisibleItems-settingTitle", "TUICInvisibleItems")}
${this.checkboxList("timeline", "timeline-settingTitle", "timelineSetting", this.radioButtonListSub("timeline-discoverMore", "timeline-discoverMore", "TUICRadio"))}
${this.checkboxList("rightSidebar", "rightSidebar-settingTitle", "rightSidebar")}
${this.checkboxList("clientInfo", "clientInfo-settingTitle", "clientInfo")}
        <br>
        <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" id="default_set">${TUICLibrary.getI18n("settingUI-restoreDefaultAll")}</button>
        <br><br>

        <details class="TUICDetails">
        <summary class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title">${TUICLibrary.getI18n("customCSS-settingTitle")}</summary>
        <div class="TUIC_col_setting_container">
            <form>
                <textarea id="css_textarea"></textarea>
            </form>
            <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" id="save">${TUICLibrary.getI18n("customCSS-save")}</button>
        </div>
        </details>

        <details class="TUICDetails">
            <summary class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title">${TUICLibrary.getI18n("export-settingTitle")}</summary>
        <div class="TUIC_col_setting_container">
        <input class="TUICTextInput" type="text" id="TUICExportBox" readonly >
            <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" id="TUICExport">${TUICLibrary.getI18n("export-exportButton")}</button>
            <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" id="TUICExportCopy">${TUICLibrary.getI18n("export-exportButtonCopy")}</button>
        </div>
        </details>

        <details class="TUICDetails">
            <summary class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title">${TUICLibrary.getI18n("import-settingTitle")}</summary>
        <div class="TUIC_col_setting_container">
        <input class="TUICTextInput" type="text" id="TUICImportBox" >
            <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" id="TUICImportWrite">${TUICLibrary.getI18n("import-importAppend")}</button>
            <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" id="TUICImportReplace">${TUICLibrary.getI18n("import-importReplace")}</button>
            <div style="margin-left:10px;margin-right:10px;">
            <span class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size:12px;">${TUICLibrary.getI18n("import-select-explain")}</span>
            </div>
        </div>
        </details>
    </div>
</div>

`; /* eslint-enable */
    },
    //セーフモードの戻るボタン(ただの条件分岐)
    safemodeReturnButton: function () {
        return window.location.pathname == "/tuic/safemode" ? `<a href="https://twitter.com" style="color:rgb(172,172,0);">&lt; ${TUICLibrary.getI18n("settingUI-goBackButton")}</a>` : "";
    },
    //色の設定の一行(id,type:色のIDと種類。これで判別 color:rgba形式の色,text:色の名前)
    colorSetting: function (id, type, color_, text, isDefault, colorKind) {
        const [color] = [color_.escapeToUseHTML()];
        const TUIC_color = color.replace("rgba(", "").replace(")", "").split(",");
        const TUICColor1 = TUICLibrary.color.rgb2hex([Number(TUIC_color[0]), Number(TUIC_color[1]), Number(TUIC_color[2])]); /* eslint-disable */
        return `
        <div class="TUIC_setting_color_colmn${!isDefault ? " " + TUICLibrary.getClasses.getClass("TUIC_ISNOTDEFAULT") : ""}">
        <h4 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size:18px;">${TUICLibrary.getI18n(text)}</h4>
        <div class="TUIC_setting_input_container">
            <div class="TUIC_input_color_rounded__container">
                <div class="TUIC_input_color_rounded">
                    <input type="color" id="${id + "-" + type}" TUICColor="${id}" TUICColorType="${type}" value="${TUICColor1}" class="TUICButtonColor" TUICColorKind=${colorKind}>
                    </input>
                </div>
            </div>
            <button type="checkbox" id="${`${id}-${type}-check`}" data-checked="${TUIC_color[3] == "0" ? "true" : "false"}" TUICColor="${id}"
             TUICColorType="${type}" class="TUICButtonColorCheck" TUICColorKind=${colorKind}>
            </button>
            <label for="${`${id}-${type}-check`}" class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size:15px;">${TUICLibrary.getI18n("settingUI-colorPicker-transparent")}</label><br>
        </div>
    </div>
    <button class="TUIC_icon_button_con TUIC_setting_button TUIC_setting_button_default TUICDfaultColor${!isDefault ? " " + TUICLibrary.getClasses.getClass("TUIC_DISPNONE") : ""}" title="${TUICLibrary.getI18n(
        "settingUI-colorPicker-restoreDefault",
    )}" TUICColor="${id}" TUICColorType="${type}" id="${`${id}-${type}-default`}" TUICColorKind="${colorKind}">${TUICData.resetIconSVG}</button>`; /* eslint-enable */
    },
    //色の設定のひとまとまり(id:色のID。種類・色はTUICPrefから自動補完される)
    threeColorSetting: function (id) {
        return `
${this.colorSetting(id, "background", TUICLibrary.color.getColorFromPref(id, "background", editingColorType), "settingUI-colorPicker-background", !!TUICPref?.[editingColorType]?.[id]?.background, editingColorType)}
${this.colorSetting(id, "border", TUICLibrary.color.getColorFromPref(id, "border", editingColorType), "settingUI-colorPicker-border", !!TUICPref?.[editingColorType]?.[id]?.border, editingColorType)}
${this.colorSetting(id, "color", TUICLibrary.color.getColorFromPref(id, "color", editingColorType), "settingUI-colorPicker-textColor", !!TUICPref?.[editingColorType]?.[id]?.color, editingColorType)}
`;
    },
    //色の設定の全体。forぶん回してる
    colorsList: function () {
        let TUICColors = `<div id="TUICColorSettingsDivBox">`;
        for (const i of TUICData.settings.colors.id) {
            TUICColors += `<h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_title TUIC_setting_text">${TUICLibrary.getI18n(TUICData.settings.colors.i18n[i])}</h2>
            <div class="TUIC_col_setting_container_2">${this.threeColorSetting(i, editingColorType)}
            </div>`;
        }
        TUICColors += "</div>";
        return TUICColors;
    },
    //チェックボックスの一行。(id:設定のid value:Boolで値 name:設定の名前 type:設定の分類)
    checkbox: function (id, value, name, type) {
        return `
        <div class="TUICCheckBoxParent">
            <input id=${id} ${value ? "checked" : ""} type="checkbox" class="${type}"></input>
            <label class="TUIC_setting_text" for="${id}">${TUICLibrary.getI18n(name)}</label>
        </div>
        `;
    },
    //チェックボックスリスト(id:ID title:Stringでタイトル)
    checkboxList: function (id, title, type, otherSetting) {
        let TUICInvisibleCheckBox = "";
        for (const i of TUICData[id].all) {
            TUICInvisibleCheckBox += this.checkbox(i, TUICPref[id][i], TUICData[id].i18n[i], type);
        }
        return `
        <details class="TUICDetails">
            <summary class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title">${TUICLibrary.getI18n(title)}</summary>
          <div class="TUIC_col_setting_container">
              ${TUICInvisibleCheckBox}
          </div>
          <br>
          ${otherSetting ?? ""}
        </details>
          `;
    },
    radioButton: function (id, valueName, value, name, type) {
        return `
        <div class="TUICCheckBoxParent">
                <input type="radio" name="${id}" value="${valueName}" id="${valueName}" class="${type}" ${value ? "checked" : ""}>
                <label class="TUIC_setting_text" for="${valueName}">${TUICLibrary.getI18n(name)}</label>
            </div>
        `;
    },
    radioButtonList: function (id, title, type, option) {
        let TUICInvisibleRadioBox = "";
        for (const i of TUICData[id].all) {
            TUICInvisibleRadioBox += this.radioButton(id, i, TUICPref[id] == i, TUICData[id].i18n[i], type);
        }
        return `
        <details class="TUICDetails">
        <summary class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title">${TUICLibrary.getI18n(title)}</summary>
        <div class="TUIC_col_setting_container">
            ${TUICInvisibleRadioBox}
            ${option}
        </div>
        <br>
        </details>`;
    },
    radioButtonListSub: function (id, title, type) {
        let TUICInvisibleRadioBox = "";
        for (const i of TUICData[id].all) {
            TUICInvisibleRadioBox += this.radioButton(id, i, TUICPref[id] == i, TUICData[id].i18n[i], type);
        }
        return `
        <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title" style="margin-top:0px !important;margin-bottom:0px !important;margin-left:10px !important;">${TUICLibrary.getI18n(title)}</h2>
        <div class="TUIC_col_setting_container">
            ${TUICInvisibleRadioBox}
        </div>
        <br>`;
    },
    iconButton: function (src, btnAction, tooltiptag) {
        return `<button class="TUIC_icon_button_con ${btnAction}" title="${TUICLibrary.getI18n(tooltiptag)}">${src}</button>`;
    },
    //アップダウンリスト(id:設定のID。TUICPref直下 title:設定の名前, option:下に表示する設定)
    upDownList: function (id, title, option) {
        const UDAllValue = TUICData.settings[id].all;
        const ListItem = this.upDownListItem(id);
        const TUICVisibleButtons = ListItem[0];
        const TUICInvisibleButtons = ListItem[1];
        const UpdownButtonFuncs = [
            {
                iconSrc: TUICData.arrowLeftIconSVG,
                btnAction: "TUIC_up_down_list_to_left",
                tooltiptag: "settingUI-upDownList-toLeft",
            },
            {
                iconSrc: TUICData.arrowUpIconSVG,
                btnAction: "TUIC_up_down_list_to_up",
                tooltiptag: "settingUI-upDownList-toUp",
            },
            {
                iconSrc: TUICData.arrowDownIconSVG,
                btnAction: "TUIC_up_down_list_to_down",
                tooltiptag: "settingUI-upDownList-toDown",
            },
            {
                iconSrc: TUICData.arrowRightIconSVG,
                btnAction: "TUIC_up_down_list_to_right",
                tooltiptag: "settingUI-upDownList-toRight",
            },
            {
                iconSrc: TUICData.resetIconSVG,
                btnAction: "TUIC_up_down_list_to_default",
                tooltiptag: "settingUI-upDownList-restoreDefault",
            },
        ]; /* eslint-disable */
        return `
<details class="TUICDetails">
        <summary class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title">${TUICLibrary.getI18n(title)}</summary>

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
                    ${UpdownButtonFuncs.map((btn) => {
                        return this.iconButton(btn.iconSrc, btn.btnAction, btn.tooltiptag);
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
        <br>
</details>
`; /* eslint-enable */
    },
    //アップダウンリストの内容(id:設定のID)
    upDownListItem: function (id) {
        let TUICVisibleButtons = "";
        let TUICInvisibleButtons = "";
        for (const i of TUICPref[id]) {
            TUICVisibleButtons += `<div value="${i}" id="${i}" class="TUICUpDownContent"><span>${TUICLibrary.getI18n(TUICData.settings[id].i18n[i])}</span></div>`;
        }
        for (const i of TUICData.settings[id].all) {
            if (!TUICPref[id].includes(i)) {
                TUICInvisibleButtons += `<div value="${i}" id="${i}" class="TUICUpDownContent"><span>${TUICLibrary.getI18n(TUICData.settings[id].i18n[i])}</span></div>`;
            }
        }
        return [TUICVisibleButtons, TUICInvisibleButtons];
    },
    uploadImageFile: function (title, id) {
        return `<h3 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_title">${TUICLibrary.getI18n(title)}</h3><br>
        <input type="file" accept="image/*" class="TUIC_setting_text TUICSelectImg" TUICImgID="${id}" />
        <p class="TUIC_setting_text">${TUICLibrary.getI18n("twitterIcon-nowIcon")}</p>
        <span id="TUICIcon_${id}" class="TUICUploadedImg">`;
    },
};
