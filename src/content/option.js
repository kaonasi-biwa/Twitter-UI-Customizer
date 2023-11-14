import { applyCustomCss, applySystemCss } from "./applyCSS.js";
import { TUICData } from "./data.js";
import { TUICI18N } from "./i18n.ts";
import { TUICLibrary, TUICPref } from "./library.js";
import { TUICObserver } from "./observer.js";
import { isSafemode } from "./safemode.js";
import EMPTY from "./icons/logo/empty.svg";

export const TUICOptionHTML = {
    displaySetting: function (rootElement) {
        if (document.querySelector("#TUICOptionMain") == null) {
            const div = document.createElement("div");
            div.id = "TUICOptionMain";
            rootElement.appendChild(div);
            (async () => {
                await import(chrome.runtime.getURL("option_main.js"));
                this.eventHandle();
            })();
        }
    },
    eventHandle: function (root) {
        if (!root) root = document;
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
                const colorAttr = event.target.getAttribute("TUICColor");
                const colorType = event.target.getAttribute("TUICColorType");
                const colorValue = TUICLibrary.color.hex2rgb(event.target.value);
                const colorKind = event.target.getAttribute("TUICColorKind");
                const isChecked = document.getElementById(`${colorAttr}-${colorType}-check`).checked;

                TUICPref.set(`${colorKind}.${colorAttr}.${colorType}`, `rgba(${colorValue[0]}, ${colorValue[1]}, ${colorValue[2]}, ${isChecked ? 0 : 1})`);

                document.getElementById(`${colorAttr}-${colorType}-default`).classList.remove("TUIC_DISPNONE");
                event.currentTarget.parentElement.parentElement.parentElement.parentElement.classList.remove("TUIC_ISNOTDEFAULT");

                TUICPref.save();

                applySystemCss();
            },
            single: false,
        },
        ".TUICButtonColorCheck": {
            type: "click",
            function: function (event) {
                event.target.dataset.checked = event.target.dataset.checked !== "true";

                const colorAttr = event.target.getAttribute("TUICColor");
                const colorType = event.target.getAttribute("TUICColorType");
                const colorValue = TUICLibrary.color.hex2rgb(document.getElementById(`${colorAttr}-${colorType}`).value);
                const colorKind = event.target.getAttribute("TUICColorKind");
                const isChecked = event.target.dataset.checked === "true";

                TUICPref.set(`${colorKind}.${colorAttr}.${colorType}`, `rgba(${colorValue[0]}, ${colorValue[1]}, ${colorValue[2]}, ${isChecked ? 0 : 1})`);

                document.getElementById(`${colorAttr}-${colorType}-default`).classList.remove("TUIC_DISPNONE");
                event.currentTarget.parentElement.parentElement.classList.remove("TUIC_ISNOTDEFAULT");

                TUICPref.save();

                applySystemCss();
            },
            single: false,
        },
        ".TUICDefaultColor": {
            type: "click",
            function: function (event) {
                const colorAttr = event.target.getAttribute("TUICColor");
                const colorType = event.target.getAttribute("TUICColorType");
                const colorKind = event.target.getAttribute("TUICColorKind");
                const TUIC_color = TUICData.colors[colorAttr][colorType].replace("rgba(", "").replace(")", "").split(",");
                const TUICColor1 = TUICLibrary.color.rgb2hex([Number(TUIC_color[0]), Number(TUIC_color[1]), Number(TUIC_color[2])]);

                document.getElementById(`${colorAttr}-${colorType}`).value = TUICColor1;

                if ((document.getElementById(`${colorAttr}-${colorType}-check`).checked != TUIC_color[3]) == 0)
                    // TODO: 謎
                    document.getElementById(`${colorAttr}-${colorType}-check`).checked = TUIC_color[3] == 0;

                if (TUICPref.get(`${colorKind}.${colorAttr}`) && TUICPref.get(`${colorKind}.${colorAttr}.${colorType}`)) TUICPref.delete(`${colorKind}.${colorAttr}.${colorType}`);

                document.getElementById(`${colorAttr}-${colorType}-check`).parentElement.parentElement.classList.add("TUIC_ISNOTDEFAULT");
                event.currentTarget.classList.add("TUIC_DISPNONE");

                TUICPref.save();

                applySystemCss();
            },
            single: false,
        },
        ".TUICInvisibleItems": {
            type: "click",
            function: function (event) {
                TUICPref.set("invisibleItems." + event.target.id, event.target.checked);
                TUICPref.save();
                TUICLibrary.getClasses.update();
            },
            single: false,
        },
        ".TUICXToTwitter": {
            type: "click",
            function: function (event) {
                TUICPref.set("XToTwitter." + event.target.id, event.target.checked);
                TUICPref.save();
                TUICLibrary.getClasses.update();
                TUICObserver.observerFunction();
                TUICObserver.titleObserverFunction();
                if (!TUICPref.get("XToTwitter.XtoTwitter") && document.title.endsWith(" / Twitter")) {
                    document.title = document.title.replace(" / Twitter", " / X");
                }
            },
            single: false,
        },
        ".twitterTitle": {
            type: "click",
            function: function (event) {
                TUICPref.set("otherBoolSetting." + event.target.id, event.target.checked);
                TUICPref.save();
                TUICLibrary.getClasses.update();
                TUICObserver.observerFunction();
                TUICObserver.titleObserverFunction();
                if (!TUICPref.get("otherBoolSetting.XtoTwitter") && document.title.endsWith(" / Twitter")) {
                    document.title = document.title.replace(" / Twitter", " / X");
                }
            },
            single: false,
        },
        ".otherBoolSetting": {
            type: "click",
            function: function (event) {
                TUICPref.set("otherBoolSetting." + event.target.id, event.target.checked);
                TUICPref.save();
                TUICLibrary.getClasses.update();
                TUICObserver.observerFunction();
            },
            single: false,
        },
        ".accountSwitcher": {
            type: "click",
            function: function (event) {
                TUICPref.set("accountSwitcher." + event.target.id, event.target.checked);
                TUICPref.save();
                TUICLibrary.getClasses.update();
                TUICObserver.observerFunction();
            },
            single: false,
        },
        ".profileSettingInvisible": {
            type: "click",
            function: function (event) {
                TUICPref.set("profileSetting.invisible." + event.target.id, event.target.checked);
                TUICPref.save();
                TUICLibrary.getClasses.update();
                TUICObserver.observerFunction();
            },
            single: false,
        },
        ".profileSettingTabs": {
            type: "click",
            function: function (event) {
                TUICPref.set("profileSetting.tabs." + event.target.id, event.target.checked);
                TUICPref.save();
                TUICLibrary.getClasses.update();
                TUICObserver.observerFunction();
            },
            single: false,
        },
        ".tweetDisplaySetting": {
            type: "click",
            function: function (event) {
                TUICPref.set("tweetDisplaySetting." + event.target.id, event.target.checked);
                TUICPref.save();
                TUICLibrary.getClasses.update();
                TUICObserver.observerFunction();
            },
            single: false,
        },
        ".sidebarSettingButtonConfig": {
            type: "click",
            function: function (event) {
                TUICPref.set("sidebarSetting.buttonConfig." + event.target.id, event.target.checked);
                TUICPref.save();
                TUICLibrary.getClasses.update();
                TUICObserver.observerFunction();
            },
            single: false,
        },
        ".timelineSetting": {
            type: "click",
            function: function (event) {
                TUICPref.set("timeline." + event.target.id, event.target.checked);
                TUICPref.save();
                TUICLibrary.getClasses.update();
                TUICObserver.observerFunction();
            },
            single: false,
        },
        ".rightSidebar": {
            type: "click",
            function: function (event) {
                TUICPref.set("rightSidebar." + event.target.id, event.target.checked);
                TUICPref.save();
                TUICLibrary.getClasses.update();
                TUICObserver.observerFunction();
            },
            single: false,
        },
        "#save": {
            type: "click",
            function: function () {
                localStorage.setItem("TUIC_CSS", document.querySelector("#css_textarea").value);
                applyCustomCss();
            },
            single: true,
        },
        ".default_set": {
            type: "click",
            function: function () {
                localStorage.setItem("TUIC", JSON.stringify(TUICData.defaultPref));
                TUICPref.set("", TUICData.defaultPref);

                if (isSafemode) {
                    location.href = `${location.protocol}//${location.hostname}`;
                } else {
                    document.querySelector("#TUIC_setting").remove();
                    TUICLibrary.getClasses.update();
                    TUICObserver.titleObserverFunction();
                    if (!TUICPref.get("otherBoolSetting.XtoTwitter") && document.title.endsWith(" / Twitter")) {
                        document.title = document.title.replace(" / Twitter", " / X");
                    }
                }
            },
            single: false,
        },
        ".TUIC_up_down_list_to_left": {
            type: "click",
            function: function (event) {
                const parentBox = event.currentTarget.parentElement.parentElement;
                const leftBox = parentBox.children[0].children[2];
                const rightBox = parentBox.children[2].children[2];

                const selectedItem = parentBox.getAttribute("TUICSelectedItem");
                if ((selectedItem ?? "") != "") {
                    const selectedItemElem = rightBox.querySelector(`#${selectedItem}`);
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
                if (selectedItem) {
                    const selectedItemElem = leftBox.querySelector(`#${selectedItem}`);
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
                if (selectedItem) {
                    const selectedItemIndex = Array.from(parentBox.querySelectorAll(".TUICUpDownContent")).findIndex((list) => list === leftBox.querySelector(`#${selectedItem}`));

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
                if (selectedItem) {
                    const selectedItemIndex = Array.from(parentBox.querySelectorAll(".TUICUpDownContent")).findIndex((list) => list === leftBox.querySelector(`#${selectedItem}`));

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
                TUICPref.set(settingId, structuredClone(TUICData.defaultPref[settingId]));
                TUICPref.save();
                parentBox.setAttribute("TUICSelectedItem", "");
                const ListItem = TUICOptionHTML.upDownListItem(settingId);
                let listElem;

                listElem = leftBox.children;
                while (listElem.length != 0) {
                    listElem[0].remove();
                }

                listElem = TUICLibrary.HTMLParse(ListItem[0]);
                while (listElem.length != 0) {
                    leftBox.appendChild(listElem[0]);
                }

                listElem = rightBox.children;
                while (listElem.length != 0) {
                    listElem[0].remove();
                }

                listElem = TUICLibrary.HTMLParse(ListItem[1]);
                while (listElem.length != 0) {
                    rightBox.appendChild(listElem[0]);
                }

                TUICOptionHTML.upDownListSetting(parentBox);
                TUICOptionHTML.eventHandle(parentBox);
            },
            single: false,
        },
        ".TUICRadio": {
            type: "change",
            function: function (event) {
                TUICPref.set(event.currentTarget.getAttribute("name"), event.currentTarget.getAttribute("value"));
                TUICPref.save();
                TUICLibrary.getClasses.update();
                TUICObserver.observerFunction();
            },
            single: false,
        },
        ".TUICRadio-fixEngagements": {
            type: "change",
            function: function (event) {
                TUICPref.set(event.currentTarget.getAttribute("name"), event.currentTarget.getAttribute("value"));
                TUICPref.save();
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
                            const element = document.createElement("canvas");
                            element.height = 200;
                            element.width = 200;
                            const context = element.getContext("2d");
                            context.beginPath();
                            context.arc(100, 100, 100, (0 * Math.PI) / 180, (360 * Math.PI) / 180);
                            context.clip();
                            const image = new Image();
                            image.onload = function () {
                                context.beginPath();
                                context.drawImage(this, 0, 0, this.naturalHeight, this.naturalWidth, 0, 0, 200, 200);
                                localStorage.setItem(`TUIC_IconImg_Favicon`, element.toDataURL());
                                resolve();
                            };
                            image.src = reader.result;
                        });
                        reader.readAsDataURL(event.currentTarget.files[0]);
                    });
                } else {
                    localStorage.setItem(`TUIC_${fileID}`, "");
                    localStorage.setItem(`TUIC_IconImg_Favicon`, "");
                }

                applySystemCss();
                if (TUICPref.get("twitterIcon") == "custom" && TUICPref.get("otherBoolSetting.faviconSet")) {
                    const imageURL = localStorage.getItem(TUICPref.get("otherBoolSetting.roundIcon") ? "TUIC_IconImg_Favicon" : "TUIC_IconImg");
                    document.querySelector(`[rel="shortcut icon"]`).href = imageURL ?? EMPTY;
                }
            },
            single: false,
        },
        ".TUICUpDownContent": {
            type: "click",
            function: function (event) {
                const parentBox = event.currentTarget.parentElement.parentElement.parentElement;
                const selectedItem = parentBox.getAttribute("TUICSelectedItem");
                if (selectedItem) parentBox.querySelector(`#${selectedItem}`).removeAttribute("TUICSelectedUpDownContent");
                const selectItem = event.currentTarget.id;
                parentBox.querySelector(`#${selectItem}`).setAttribute("TUICSelectedUpDownContent", "true");
                parentBox.setAttribute("TUICSelectedItem", selectItem);
            },
            single: false,
        },
        ".TUICColorSettingRadio": {
            type: "change",
            function: function (event) {
                TUICLibrary.setEditingColorType(event.currentTarget.getAttribute("value"));
                document.querySelector("#TUICColorSettingsDivBox").remove();
                const appendELement = TUICLibrary.HTMLParse(TUICOptionHTML.colorsList()).item(0);
                document.querySelector("#colorSettingList").appendChild(appendELement);
                TUICOptionHTML.eventHandle(appendELement);
            },
            single: false,
        },
        "#TUICExport": {
            type: "click",
            function: function () {
                document.querySelector("#TUICExportBox").value = TUICPref.export();
            },
            single: true,
        },
        "#TUICExportCopy": {
            type: "click",
            function: function () {
                navigator.clipboard.writeText(document.querySelector("#TUICExportBox").value);
            },
            single: true,
        },
        "#TUICImportWrite": {
            type: "click",
            function: function () {
                try {
                    const importPref = JSON.parse(document.querySelector("#TUICImportBox").value);
                    TUICPref.set("", TUICLibrary.updatePref.merge(TUICPref.get(""), importPref));
                    TUICPref.save();
                    if (isSafemode) {
                        location.href = `${location.protocol}//${location.hostname}`;
                    } else {
                        document.querySelector("#TUIC_setting").remove();
                        TUICLibrary.getClasses.update();
                        applySystemCss();
                        TUICObserver.observerFunction();
                        TUICObserver.titleObserverFunction();
                        if (!TUICPref.get("otherBoolSetting.XtoTwitter") && document.title.endsWith(" / Twitter")) {
                            document.title = document.title.replace(" / Twitter", " / X");
                        }
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
                    TUICPref.set("", TUICLibrary.updatePref.merge(TUICData.defaultPref, importPref));
                    TUICPref.save();
                    if (isSafemode) {
                        location.href = `${location.protocol}//${location.hostname}`;
                    } else {
                        document.querySelector("#TUIC_setting").remove();
                        TUICLibrary.getClasses.update();
                        applySystemCss();
                        TUICObserver.observerFunction();
                        TUICObserver.titleObserverFunction();
                        if (!TUICPref.get("otherBoolSetting.XtoTwitter") && document.title.endsWith(" / Twitter")) {
                            document.title = document.title.replace(" / Twitter", " / X");
                        }
                    }
                } catch (x) {
                    alert("構文解析に失敗しました");
                }
            },
            single: true,
        },
        "#restoreIcon": {
            type: "click",
            function: () => {
                const importPref = {
                    otherBoolSetting: {
                        faviconSet: true,
                    },
                    XToTwitter: {
                        XToTwitter: true,
                        PostToTweet: true,
                    },
                    sidebarSetting: { buttonConfig: { birdGoBackHome: true } },
                    twitterIcon: "twitter",
                };
                TUICPref.set("", TUICLibrary.updatePref.merge(TUICPref.get(""), importPref));
                TUICPref.save();
                document.querySelector("#TUIC_setting").remove();
                TUICLibrary.getClasses.update();
                applySystemCss();
                TUICObserver.observerFunction();
                TUICObserver.titleObserverFunction();
                if (!TUICPref.get("XToTwitter.XToTwitter") && document.title.endsWith(" / Twitter")) {
                    document.title = document.title.replace(" / Twitter", " / X");
                }
            },
            single: true,
        },
        "#XToTwitterRestoreIcon": {
            type: "click",
            function: () => {
                const importPref = {
                    otherBoolSetting: {
                        faviconSet: true,
                    },
                    sidebarSetting: { buttonConfig: { birdGoBackHome: true } },
                    twitterIcon: "twitter",
                };
                TUICPref.set("", TUICLibrary.updatePref.merge(TUICPref.get(""), importPref));
                TUICPref.save();
                TUICLibrary.getClasses.update();
                applySystemCss();
                TUICObserver.observerFunction();
                TUICObserver.titleObserverFunction();
                document.querySelector(`#faviconSet`).checked = true;
                document.querySelector(`#twitter`).checked = true;
                if (!TUICPref.get("XToTwitter.XToTwitter") && document.title.endsWith(" / Twitter")) {
                    document.title = document.title.replace(" / Twitter", " / X");
                }
            },
            single: true,
        },
        "#deleteVerified": {
            type: "click",
            function: () => {
                const importPref = {
                    invisibleItems: {
                        verifiedNotifications: true,
                    },
                    profileSetting: {
                        invisible: {
                            "subscribe-profile": true,
                            verifiedFollowerTab: true,
                        },
                    },
                    rightSidebar: {
                        verified: true,
                    },
                    tweetDisplaySetting: {
                        "twitter-pro-promotion-btn": true,
                        "subscribe-tweets": true,
                    },
                };
                TUICPref.set("", TUICLibrary.updatePref.merge(TUICPref.get(""), importPref));
                TUICPref.set(
                    "sidebarButtons",
                    TUICPref.get("sidebarButtons").filter((elem) => {
                        return elem != "twiter-blue" && elem != "verified-choose";
                    }),
                );
                TUICPref.save();
                document.querySelector("#TUIC_setting").remove();
                TUICLibrary.getClasses.update();
                applySystemCss();
                TUICObserver.observerFunction();
            },
            single: true,
        },
        "#discoverMoreDelete": {
            type: "click",
            function: () => {
                const importPref = {
                    "timeline-discoverMore": "discoverMore_invisible",
                };
                TUICPref.set("", TUICLibrary.updatePref.merge(TUICPref.get(""), importPref));
                TUICPref.save();
                document.querySelector("#TUIC_setting").remove();
                TUICLibrary.getClasses.update();
                applySystemCss();
                TUICObserver.observerFunction();
            },
            single: true,
        },
        "#defaultTwitterColor": {
            type: "click",
            function: () => {
                const importPref = {
                    buttonColorLight: {
                        "not-following": { background: "rgba(15,20,25,1)", border: "rgba(15,20,25,1)", color: "rgba(255,255,255,1)" },
                        willFollow: { background: "rgba(39,44,48,1)", border: "rgba(39,44,48,1)", color: "rgba(255,255,255,1)" },
                        following: { background: "rgba(255,255,255,0)", border: "rgba(207,217,222,1)", color: "rgba(15,20,25,1)" },
                        "un-following": { border: "rgba(253,201,206,1)", color: "rgba(244,33,46,1)", background: "rgba(244,33,46,0.1)" },
                        profile: { border: "rgba(207,217,222,1)", background: "rgba(255,255,255,0)", color: "rgba(15,20,25,1)" },
                        birthday: { background: "rgba(15,20,25,1)", border: "rgba(15,20,25,1)", color: "rgba(255,255,255,1)" },
                        "profile-save": { background: "rgba(15,20,25,1)", border: "rgba(15,20,25,1)", color: "rgba(255,255,255,1)" },
                        "unsent-tweet": { background: "rgba(15,20,25,1)", border: "rgba(15,20,25,1)", color: "rgba(255,255,255,1)" },
                    },
                    buttonColorDark: {
                        "not-following": { background: "rgba(239,243,244,1)", border: "rgba(239,243,244,1)", color: "rgba(10,20,25,1)" },
                        willFollow: { background: "rgba(215,219,220,1)", border: "rgba(215,219,220,1)", color: "rgba(10,20,25,1)" },
                        following: { background: "rgba(255,255,255,0)", border: "rgba(83,100,113,1)", color: "rgba(239,244,245,1)" },
                        "un-following": { border: "rgba(103,7,15,1)", color: "rgba(244,33,46,1)", background: "rgba(244,33,46,0.1)" },
                        profile: { border: "rgba(83,100,113,1)", background: "rgba(255,255,255,0)", color: "rgba(239,243,244,1)" },
                        birthday: { background: "rgba(239,243,244,1)", border: "rgba(239,243,244,1)", color: "rgba(15,20,25,1)" },
                        "profile-save": { background: "rgba(239,243,244,1)", border: "rgba(239,243,244,1)", color: "rgba(15,20,25,1)" },
                        "unsent-tweet": { background: "rgba(239,243,244,1)", border: "rgba(239,243,244,1)", color: "rgba(15,20,25,1)" },
                    },
                };
                TUICPref.set("", TUICLibrary.updatePref.merge(TUICPref.get(""), importPref));
                TUICPref.save();
                document.querySelector("#TUIC_setting").remove();
                TUICLibrary.getClasses.update();
                applySystemCss();
                TUICObserver.observerFunction();
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
        TUICPref.set(id, visible_button_list);
        TUICPref.save();
        TUICLibrary.getClasses.update();
        applySystemCss();
    },
};
