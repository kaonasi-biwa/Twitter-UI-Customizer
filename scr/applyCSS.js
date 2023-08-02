function TUICRunFirst() {
    if (document.querySelector("#twitter_ui_customizer_css") != null) document.querySelector("#twitter_ui_customizer_css").remove();
    if (document.querySelector("#twitter_ui_customizer") != null) document.querySelector("#twitter_ui_customizer").remove();

    // 追加する要素を用意します。
    const TUIC_css = document.createElement("style");
    TUIC_css.id = "twitter_ui_customizer";
    const TWITTER_head = document.querySelector("head");
    // 基準となる要素を指定します。
    TWITTER_head.appendChild(TUIC_css);
    TUICCss();
    if (window.location.pathname != "/tuic/safemode") {
        const TUIC_custom_css = document.createElement("style");
        TUIC_custom_css.id = "twitter_ui_customizer_css";
        TWITTER_head.appendChild(TUIC_custom_css);
        TUICCustomCSS();
    }
}

function TUICCss() {
    const backgroundColor = TUICLibrary.backgroundColorCheck();

    let prefColors = "";
    for (const elem in TUICData.colors) {
        for (const el of ["background", "border", "color"]) {
            if ((TUICData.colors[elem][el] ?? "unknwon") != "unknwon") {
                prefColors += `--twitter-${elem}-${el}:${TUICLibrary.color.getColorFromPref(elem, el)};`;
            }
        }
    }
    /* eslint-disable */
    document.querySelector("#twitter_ui_customizer").textContent = `
:root{
    ${prefColors}

    --twitter-TUIC-color: ${TUICData.styleColor[backgroundColor].textColor};

    --TUIC-container-background: ${TUICData.styleColor[backgroundColor].containerBackground};
    --TUIC-container-background2: ${TUICData.styleColor[backgroundColor].containerBackground2};
    --TUIC-color-hover-efect: ${TUICData.styleColor[backgroundColor].colorHover};

    --TUIC-sidebar-hover-color: ${TUICLibrary.backgroundColorCheck() == "light" ? "rgba(15,20,25,0.1)" : "rgba(247,249,249,0.1)"};
    --TUIC-sidebar-active-color: ${TUICLibrary.backgroundColorCheck() == "light" ? "rgba(15,20,25,0.2)" : "rgba(247,249,249,0.2)"};
    --TUIC-sidebar-focus-color: ${TUICLibrary.backgroundColorCheck() == "light" ? "rgb(135,138,140)" : "rgb(251,252,252)"};

    --TUIC-detail-border:${TUICData.styleColor[backgroundColor].detailBorder};
}

/* セーフモード時の設定画面スタイル */
#safemode > #TUIC_setting {
    margin: 2em auto;
    max-width: 600px;
}
#safemode > .r-135wba7 {
    line-height: 1em;
}

/*未送信ツイートの編集*/
.r-s8bhmr > .css-1dbjc4n > .r-15ysp7h.r-6416eg.r-4wgw6l.css-18t94o4{
    background-color: var(--twitter-unsent-tweet-background) !important;
    border-color: var(--twitter-unsent-tweet-border) !important;
}
.r-s8bhmr > .css-1dbjc4n > .r-15ysp7h.r-6416eg.r-4wgw6l.css-18t94o4 > .r-b88u0q{
    color: var(--twitter-unsent-tweet-color) !important;
}

/*フォローしていない人をフォロー*/
[data-testid$="-follow"]:not(:hover){
    background-color: var(--twitter-not-following-background) !important;
    border-color: var(--twitter-not-following-border) !important;
}
[data-testid$="-follow"]:not(:hover) > :is(div,span){
    color: var(--twitter-not-following-color) !important;
}
[data-testid$="-follow"]:hover{
    background-color: var(--twitter-willFollow-background) !important;
    border-color: var(--twitter-willFollow-border) !important;
}
[data-testid$="-follow"]:hover > :is(div,span){
    color: var(--twitter-willFollow-color) !important;
}
/*フォロー中*/
[data-testid$="-unfollow"]:not(:hover){
    background-color: var(--twitter-following-background) !important;
    border-color: var(--twitter-following-border) !important;
}
[data-testid$="-unfollow"]:not(:hover) > :is(div,span){
    color: var(--twitter-following-color) !important;
}

[data-testid$="-unfollow"]:hover{
    background-color: var(--twitter-un-following-background) !important;
    border-color: var(--twitter-un-following-border) !important;
}
[data-testid$="-unfollow"]:hover > :is(div,span){
    color: var(--twitter-un-following-color) !important;
}
/*ブロック中*/
[data-testid$="-unblock"]:not(:hover){
    background-color: var(--twitter-blocking-background) !important;
    border-color: var(--twitter-blocking-border) !important;
}
[data-testid$="-unblock"]:not(:hover) > :is(div,span){
    color: var(--twitter-blocking-color) !important;
}

/* ブロック解除時 */
[data-testid$="-unblock"]:hover{
    background-color: var(--twitter-blocking-unlock-background) !important;
    border-color: var(--twitter-blocking-unlock-border) !important;
}
[data-testid$="-unblock"]:hover > :is(div,span){
    color: var(--twitter-blocking-unlock-color) !important;
}

/*プロフィールを編集*/
[data-testid="editProfileButton"]{
    background-color: var(--twitter-profile-background) !important;
    border-color: var(--twitter-profile-border) !important;
}
[data-testid="editProfileButton"] > :is(div,span){
    color: var(--twitter-profile-color) !important;
}
/*プロフィールを保存*/
[data-testid="Profile_Save_Button"]{
    background-color: var(--twitter-profile-save-background) !important;
    border-color: var(--twitter-profile-save-border) !important;
}
[data-testid="Profile_Save_Button"] > :is(div,span){
    color: var(--twitter-profile-save-color) !important;
}
/*誕生日を設定*/
[data-testid="confirmationSheetConfirm"]{
    background-color: var(--twitter-birthday-background) !important;
    border-color: var(--twitter-birthday-border) !important;
}
[data-testid="confirmationSheetConfirm"] > :is(div,span){
    color: var(--twitter-birthday-color) !important;
}

.TUICDfaultColor{
    margin-right:0px !important;
    margin-left:auto !important;
    margin-top:2px !important;
    margin-bottom:2px !important;
    width:fit-content;
    border-color:#71767b !important;
}

.${TUICLibrary.getClasses.getClass("TUIC_ISNOTDEFAULT")}:not(:last-of-type){
    margin-bottom:calc(12px + 1em);
}
/*色選択*/
.TUIC_setting_color_colmn {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.TUIC_setting_color_colmn > h4{
    margin-left:10px !important;
}
/*無理やり丸くするための準備（スタイルを消しまくったりポインタをカーソルにしてわかりやすく）*/
.TUIC_col_setting_container input[type="color"] {
    -webkit-appearance: none;
    border: none;
    background: transparent;
    cursor: pointer;
    transform: translate(-25%, -25%);
    width: 200%;
    height: 200%;
}
/*type=colorなinputタグを無理やり丸くするためのマスク*/
.TUIC_input_color_rounded {
    border-radius: 50%;
    width: 23px;
    height: 23px;
    overflow: hidden;
}
/*ホバー時の背景色変化とクリック時のサイズ変更を加えるためだけのコンテナ*/
.TUIC_input_color_rounded__container {
    background-color:rgba(127,127,127,0.5);
    padding: 4px;
    width: 23px;
    height: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: .3s;
    margin-right:5px !important;
}
.TUIC_input_color_rounded__container:hover {
    background: var(--TUIC-color-hover-efect);
}
.TUIC_input_color_rounded__container:active {
    transform: scale(0.8);
}
/*色設定項目の操作可能なオブジェクトのコンテナ*/
.TUIC_setting_input_container {
    display: flex;
    align-items: center;
}
/*設定項目のタイトル*/
.TUIC_setting_title {
    font-weight: bold;
    font-size: 1rem;
    color: #71767b !important;
}
/*設定用項目のコンテナ*/
.TUIC_col_setting_container {
    margin-top: 8px;
    padding: 10px 14px;
    border-radius: 14px;
}

.TUIC_col_setting_container_2 {
    background: var(--TUIC-container-background2);
    margin-top: 8px;
    padding: 10px 14px;
    border-radius: 14px;
    margin-bottom: 1em;
}
/*表示非表示のセレクトボックス*/
.TUIC_selectbox {
    border: solid 1px #71767b;
    border-radius: 6px;
    margin-top: 10px;
    padding-top:5px;
    padding-bottom:5px;
    height:calc((1em + 9px) * var(--contentCount) + 10px);
    overflow-x:auto;
scrollbar-width:thin;
}

.TUIC_selectbox::-webkit-scrollbar {
    height:8px
    }
/*設定画面の文字色*/
.TUIC_setting_text{
    color: var(--twitter-TUIC-color);
}

.TUICDetails,.TUICEasySetting{
    margin-bottom:20px;
    border:2px solid;
    border-color:rgba(0,0,0,0) !important;
    border-radius:5px;
    padding-left:10px;
    padding-right:10px;
    padding-top:10px;
    background-color:var(--TUIC-container-background);
    font-family: sans-serif;
}
.TUICDetails:not([open]),.TUICEasySetting{
    padding-bottom:10px;
    border-color:var(--TUIC-detail-border) !important;
}
.TUIC_icon_button_con {
    border-radius: 9999px;
    background: transparent;
    border: none;
    padding: 2px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.TUIC_icon_button_con>svg * {
    stroke: var(--twitter-TUIC-color);
    transition: .2s;
}
.TUIC_icon_button_con>svg {
    pointer-events: none;
}
.TUIC_icon_button_con:hover {
    background: #ffffff20;
}
.TUIC_icon_button_con:active {
    transform: scale(0.9);
}
.TUIC_setting_button{
    background: transparent;
    /*border-color: var(--twitter-TUIC-color);*/
    border-color: #71767b !important;
    border-radius: 9999px;
    transition: .3s;
    cursor: pointer;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, .3);
    /*color: #71767b !important;*/
}
.TUIC_setting_button:hover {
    background: var(--TUIC-container-background);
}
.TUIC_setting_button_width{
    width:100%;
    padding-top:5px !important;
    padding-bottom:5px !important;
    margin-bottom:5px;
}
.TUIC_none_scroll{
    scrollbar-width: none;
    -ms-overflow-style: none;
}
.TUIC_none_scroll::-webkit-scrollbar{display:none}
.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}{
    display: none !important;
}

[tabindex="0"] > .TUIC_ButtonHover2:hover > .TUIC_ButtonHover > div{
    background-color:rgba(29,155,240,0.1)
}
[tabindex="0"] > .TUIC_ButtonHover2:Active > .TUIC_ButtonHover > div{
    background-color:rgba(29,155,240,0.2)
}

[tabindex="0"] > .TUIC_ButtonHover2:hover > .TUIC_ButtonHover > svg{
    color:rgb(29,155,240)
}


.TUICButtonUnderTweet [tabindex="0"][data-focusvisible-polyfill] .TUIC_ButtonHover > svg{
    color:rgb(29,155,240)
}
.TUICButtonUnderTweet [tabindex="0"][data-focusvisible-polyfill] .TUIC_ButtonHover > div{
    box-shadow:rgba(142,204,258) 0px 0px 0px 2px inset;
    background-color:rgba(29,155,240,0.1)
}
#TUIC_invisible,#TUIC_visible{
    background:transparent;
    padding-bottom:10px;
    overflow-y:clip;
}
#TUIC_invisible span,#TUIC_visible span,#css_textarea,.TUICTextInput{
    background:transparent;
    color:var(--twitter-TUIC-color);
}

#TUIC_invisible > div,#TUIC_visible > div{
    height:calc(1em + 5px);
    padding-top:2px;
    padding-bottom:2px;
    padding-left:1em;
    padding-right:1em;
}
#TUIC_invisible > div span,#TUIC_visible > div > span{
    white-space:nowrap;
    line-height: calc(1em + 5px);
}

[TUICSelectedUpDownContent="true"]{
    background-color:rgba(51, 167, 229,0.7);
}
.TUICTextInput{
    padding-top:5px;
    padding-bottom:5px;
    padding-left:10px;
    padding-right:10px;
}

textarea#css_textarea{
    height: 300px;
}
textarea#css_textarea,.TUICTextInput {
    width: calc(100% - 10px) !important;
    border: 1px solid #808080;
    border-radius: 6px;
    margin-bottom: 20px;
}

/* チェックボタン(Transparent) */
.TUICButtonColorCheck{
    width: 1.7em;
    height: 1.7em;
    border-radius: 50%;
    border: 2px solid rgb(127, 127, 127);
    background-color: #fff;
    margin-right: 0.2em;
    margin-left: 0.5em;
}
.TUICButtonColorCheck[data-checked="true"] {
    /* チェックされている */
	background-position: center;
	background-size: 90%;
    background-color: rgba(29,161,242,1);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
}


.TUICSettingRadioTypeBigButton{
    flex: 1 1;
    padding-right:5px;
    padding-left:5px;
    margin-right:5px;
    margin-left:5px;
    height:50px;
    border-radius:5px !important;
    font-size:20px;
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.TUICSettingRadioTypeBigButton > span > span{
    mix-blend-mode: difference;
    white-space:nowrap;
    font-size:15px;
    font-weight:700;
    color:#FFFFFF;
    font-family:"Segoe UI", Meiryo, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
}
.TUICSettingRadioTypeBigButton > span{
    white-space:nowrap;
}
.TUICColorSettingRadio{
    display:none
}
.TUICColorSettingRadio:checked+.TUICSettingRadioTypeBigButton{
    border:2px solid rgb(29, 155, 240);
}
.TUICColorSettingRadio:not(:checked)+.TUICSettingRadioTypeBigButton{
    border:2px solid rgb(127, 127, 127);
}
.TUICColorSettingRadio:checked+.TUICSettingRadioTypeBigButton > span::before{
    background-image:url('data:image/svg+xml;charset=UTF-8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24\\"><g><path fill="%23FFFFFF" d=\\"M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z\\"></path></g></svg>');
    background-color:rgb(29, 155, 240);
    height:1em;
    width:1em;
}

.TUICColorSettingRadio:not(:checked)+.TUICSettingRadioTypeBigButton > span::before{
    border:2px solid rgba(127,127,127,0.5);
    width:16px;
    height:16px;
}

.TUICSettingRadioTypeBigButton > span::before{
    margin-right:10px;
    margin-bottom:-5px;
    border-radius:9999px;
    background-size: 16px 16px;
    background-position:center;
    display: inline-block;
    content: "";
}

.${TUICLibrary.getClasses.getClass("TUICScrollBottom")} {
    overflow-x:auto;
scrollbar-width:thin;
padding-right:8px;
margin-right:-8px;
padding-left:8px;
margin-left:-8px;
padding-bottom:16px;
margin-bottom:-16px;
}

.${TUICLibrary.getClasses.getClass("TUICScrollBottom")}::-webkit-scrollbar {
height:8px
}

:is(.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_Twitter")},
.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_Dog")},
.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_IconImg")},
.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_X")},
.TUICUploadedImg):not([role="alertdialog"] [data-testid="confirmationSheetDialog"] *){
    margin: 8px;
    background-size: cover;
}

#placeholder > :is(.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_Twitter")},
.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_Dog")},
.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_IconImg")},
.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_X")}){
    position: absolute;
    margin: auto;
}
:is(.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_Twitter")},
.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_Dog")},
.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_IconImg")},
.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_X")}):not([role="alertdialog"] [data-testid="confirmationSheetDialog"] *){
    height:inherit !important;
}

[role="alertdialog"] [data-testid="confirmationSheetDialog"] .${TUICLibrary.getClasses.getClass("TUICTwitterIcon_IconImg")}{
    height:40px;
    width:40px;
    margin-left:auto;
    margin-right:auto;
}

[role="alertdialog"] [data-testid="confirmationSheetDialog"] :is(.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_Twitter")},
.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_Dog")},
.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_IconImg")},
.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_X")}){
    mask-size:contain !important;
    mask-repeat:no-repeat;
    mask-position:center;
    -webkit-mask-size:contain !important;
    -webkit-mask-repeat:no-repeat;
    -webkit-mask-position:center;
    background-size:contain !important;
    background-repeat:no-repeat;
    background-position:center;
}
.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_Dog")}{
    background-image:url('${TUICData.dogIconBase64}');
}

:is(.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_Twitter")},.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_X")}):not([role="alertdialog"] [data-testid="confirmationSheetDialog"] *){
    mask-size: cover !important;
    -webkit-mask-size: cover !important;
}

.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_Twitter")}{
    background-color:var(--twitter-twitterIcon-color);
    --TUIC-twitter-icon:url('${TUICData.twitterIconSVG}') !important;
    -webkit-mask-image:var(--TUIC-twitter-icon) !important;
    mask-image:var(--TUIC-twitter-icon) !important;
}
.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_X")}{
    background-color:var(--twitter-twitterIcon-color);
    --TUIC-twitter-icon:url('${TUICData.twitterIconXSVG}') !important;
    -webkit-mask-image:var(--TUIC-twitter-icon) !important;
    mask-image:var(--TUIC-twitter-icon) !important;
}

.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_IconImg")},
#TUICIcon_IconImg{
    background-image:url('${localStorage.getItem("TUIC_IconImg") ?? ""}');
    ${
        TUICPref.otherBoolSetting["roundIcon"] ?? TUICData.defaultPref.otherBoolSetting.roundIcon
            ? `
    border-radius:9999px !important;
    `
            : ""
    }
}

#layers [data-testid="TopNavBar"] div+.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_IconImg")}{
    background-size:contain !important;
    background-repeat:no-repeat !important;
    background-position:center;
    width:auto !important;
}

.${TUICLibrary.getClasses.getClass("TUIC_SVGDISPNONE")} > *{
display:none !important;
}

[TUICDiscoberMore]{
    padding-left:20px;
}
[TUICDiscoberMore="false"]::before{
    content: "";
    position: absolute;
    top: 50%;   /* 縦軸をセンタリングする */
    left: 20px;
    transform: translateY(-50%);   /* 縦軸をセンタリングする */
    border: 5px solid transparent;
    border-left: 8px solid #555;   /* 好みで色を変えてください */
}

[TUICDiscoberMore="true"]::before{
    content: "";
    position: absolute;
    top: 50%;
    left: 20px;
    border: 6px solid transparent;
    border-top: 7px solid #555;   /* 好みで色を変えてください */  
}

.${TUICLibrary.getClasses.getClass("TUIC_DISCOVERMORE")}{
    display:var(--TUIC-DISCOVERMORE,block) !important;
    }
.TUICUploadedImg:not([data-testid="interstitialGraphic"] > svg){
    display:inline-block;
    width:64px;
    height:64px;
    border:1px solid;
    border-color:var(--TUIC-detail-border) !important;
}

.TUICSidebarSelected > div > [dir="ltr"]{
    font-weight:700;
}
.TUICSidebarSelected > div > div > svg{
    stroke:currentColor;
    stroke-width:0.5;
}
.TUICSidebarButton:hover > div{
    background-color:var(--TUIC-sidebar-hover-color);
 }

 .TUICSidebarButton[data-focusvisible-polyfill] > div{
    box-shadow: var(--TUIC-sidebar-focus-color) 0px 0px 0px 2px
 }
 .TUICSidebarButton:active > div{
    background-color:var(--TUIC-sidebar-active-color);
 }
 .TUICCheckBoxParent:not(:last-of-type){
    margin-bottom: 8px;
 }

 .TUIC_DeleteButton{
    color:rgb(244, 33, 46);
 }

 .r-icoktb{
    opacity:0.5;
 }
 ${
     TUICPref.otherBoolSetting["smallerSidebarContent"] ?? TUICData.defaultPref.otherBoolSetting.smallerSidebarContent
         ? `
 [role="navigation"] .${"NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}{
    padding-bottom:0px !important;
    padding-top:0px !important;
}
 `
         : ""
 }

 ${
     TUICPref.invisibleItems["subscribe-profile"] ?? TUICData.defaultPref.otherBoolSetting["subscribe-profile"]
         ? `[data-testid="userActions"]+[style*="border-color"][style*="rgb(201, 54, 204)"]{
    display:none !important;
    }`
         : ""
 }
 ${TUICPref.invisibleItems["hideBelowDM"] ? `[data-testid="DMDrawer"]{display:none !important;}` : ""}

 ${
     TUICPref.otherBoolSetting["bottomSpace"] ?? TUICData.defaultPref.otherBoolSetting.bottomSpace
         ? `
 .${TUICLibrary.getClasses.getClass("TUIC_NONE_SPACE_BOTTOM_TWEET")}{margin-top:0px !important;}
 `
         : ""
 }
 ${
     TUICPref.otherBoolSetting["sidebarNoneScrollbar"] ?? TUICData.defaultPref.otherBoolSetting.sidebarNoneScrollbar
         ? `
 header > div > div > div > div.r-1rnoaur{overflow:clip;}
 `
         : ""
 }

`;
    /* eslint-enable */
}

function TUICCustomCSS() {
    document.querySelector("#twitter_ui_customizer_css").textContent = localStorage.getItem("TUIC_CSS");
}
