
function TUICRunFirst() {

    if (document.querySelector("#twitter_ui_customizer_css") != null) document.querySelector("#twitter_ui_customizer_css").remove()
    if (document.querySelector("#twitter_ui_customizer") != null) document.querySelector("#twitter_ui_customizer").remove()

    // 追加する要素を用意します。
    let TUIC_css = document.createElement("style");
    TUIC_css.id = "twitter_ui_customizer"
    let TWITTER_head = document.querySelector("head")
    // 基準となる要素を指定します。
    TWITTER_head.appendChild(TUIC_css);
    TUICCss()
    if (window.location.pathname != "/tuic/safemode") {
        let TUIC_custom_css = document.createElement("style");
        TUIC_custom_css.id = "twitter_ui_customizer_css"
        TWITTER_head.appendChild(TUIC_custom_css);
        TUICCustomCSS()
    }
}

function TUICCss() {
    let backgroundColor = TUICLibrary.backgroundColorCheck()

    document.querySelector("#twitter_ui_customizer").textContent = `
:root{
    --twitter-unsent-tweet-background: ${(TUICPref.buttonColor["unsent-tweet"]?.background ?? TUICData.colors["unsent-tweet"].background).escapeToUseHTML()};
    --twitter-unsent-tweet-border: ${(TUICPref.buttonColor["unsent-tweet"]?.border ?? TUICData.colors["unsent-tweet"].border).escapeToUseHTML()};
    --twitter-unsent-tweet-color: ${(TUICPref.buttonColor["unsent-tweet"]?.color ?? TUICData.colors["unsent-tweet"].color).escapeToUseHTML()};

    --twitter-not-following-background: ${(TUICPref.buttonColor["not-following"]?.background ?? TUICData.colors["not-following"].background).escapeToUseHTML()};
    --twitter-not-following-border: ${(TUICPref.buttonColor["not-following"]?.border ?? TUICData.colors["not-following"].border).escapeToUseHTML()};
    --twitter-not-following-color: ${(TUICPref.buttonColor["not-following"]?.color ?? TUICData.colors["not-following"].color).escapeToUseHTML()};

    --twitter-following-background: ${(TUICPref.buttonColor["following"]?.background ?? TUICData.colors["following"].background).escapeToUseHTML()};
    --twitter-following-border: ${(TUICPref.buttonColor["following"]?.border ?? TUICData.colors["following"].border).escapeToUseHTML()};
    --twitter-following-color: ${(TUICPref.buttonColor["following"]?.color ?? TUICData.colors["following"].color).escapeToUseHTML()};

    --twitter-un-following-background: ${(TUICPref.buttonColor["un-following"]?.background ?? TUICData.colors["un-following"].background).escapeToUseHTML()};
    --twitter-un-following-border: ${(TUICPref.buttonColor["un-following"]?.border ?? TUICData.colors["un-following"].border).escapeToUseHTML()};
    --twitter-un-following-color: ${(TUICPref.buttonColor["un-following"]?.color ?? TUICData.colors["un-following"].color).escapeToUseHTML()};

    --twitter-profile-background: ${(TUICPref.buttonColor["profile"]?.background ?? TUICData.colors["profile"].background).escapeToUseHTML()};
    --twitter-profile-border: ${(TUICPref.buttonColor["profile"]?.border ?? TUICData.colors["profile"].border).escapeToUseHTML()};
    --twitter-profile-color: ${(TUICPref.buttonColor["profile"]?.color ?? TUICData.colors["profile"].color).escapeToUseHTML()};

    --twitter-profile-save-background: ${(TUICPref.buttonColor["profile-save"]?.background ?? TUICData.colors["profile-save"].background).escapeToUseHTML()};
    --twitter-profile-save-border: ${(TUICPref.buttonColor["profile-save"]?.border ?? TUICData.colors["profile-save"].border).escapeToUseHTML()};
    --twitter-profile-save-color: ${(TUICPref.buttonColor["profile-save"]?.color ?? TUICData.colors["profile-save"].color).escapeToUseHTML()};

    --twitter-birthday-background: ${(TUICPref.buttonColor["birthday"]?.background ?? TUICData.colors["birthday"].background).escapeToUseHTML()};
    --twitter-birthday-border: ${(TUICPref.buttonColor["birthday"]?.border ?? TUICData.colors["birthday"].border).escapeToUseHTML()};
    --twitter-birthday-color: ${(TUICPref.buttonColor["birthday"]?.color ?? TUICData.colors["birthday"].color).escapeToUseHTML()};

    --twitter-TUIC-color: ${TUICData.styleColor[backgroundColor].textColor};

    --TUIC-container-background: ${TUICData.styleColor[backgroundColor].containerBackground};
    --TUIC-color-hover-efect: ${TUICData.styleColor[backgroundColor].colorHover};

    --TUIC-sidebar-hover-color: ${TUICLibrary.backgroundColorCheck() == "light" ? "rgba(15,20,25,0.1)" : "rgba(247,249,249,0.1)"};
    --TUIC-sidebar-active-color: ${TUICLibrary.backgroundColorCheck() == "light" ? "rgba(15,20,25,0.2)" : "rgba(247,249,249,0.2)"};
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
.r-19u6a5r > .r-4wgw6l.r-42olwf:not(.r-jc7xae){
    background-color: var(--twitter-not-following-background) !important;
    border-color: var(--twitter-not-following-border) !important;
}
.r-19u6a5r > .r-4wgw6l.r-42olwf:not(.r-jc7xae) > .r-b88u0q{
    color: var(--twitter-not-following-color) !important;
}
.r-19u6a5r > .r-4wgw6l.r-42olwf.r-jc7xae{
    background-color: var(--twitter-following-background) !important;
    border-color: var(--twitter-following-border) !important;
}
.r-19u6a5r > .r-4wgw6l.r-42olwf.r-jc7xae > .r-b88u0q{
    color: var(--twitter-following-color) !important;
}
/*プロフィールでも*/
.r-6gpygo:not([role="dialog"] .r-6gpygo) > .r-sdzlij.r-42olwf:not(.r-jc7xae){
    background-color: var(--twitter-not-following-background) !important;
    border-color: var(--twitter-not-following-border) !important;
}
.r-6gpygo:not([role="dialog"] .r-6gpygo) > .r-sdzlij.r-42olwf:not(.r-jc7xae) > .r-b88u0q{
    color: var(--twitter-not-following-color) !important;
}
.r-6gpygo > .r-sdzlij.r-42olwf.r-jc7xae{
    background-color: var(--twitter-following-background) !important;
    border-color: var(--twitter-following-border) !important;
}
.r-6gpygo > .r-sdzlij.r-42olwf.r-jc7xae > .r-b88u0q{
    color: var(--twitter-following-color) !important;
}
/*画面上でも*/
.r-s8bhmr > div > .css-1dbjc4n > .css-1dbjc4n > .r-sdzlij.r-42olwf:not(.r-jc7xae){
    background-color: var(--twitter-not-following-background) !important;
    border-color: var(--twitter-not-following-border) !important;
}
.r-s8bhmr > div > .css-1dbjc4n > .css-1dbjc4n > .r-sdzlij.r-42olwf:not(.r-jc7xae) > .r-b88u0q{
    color: var(--twitter-not-following-color) !important;
}
.r-s8bhmr > div > .css-1dbjc4n > .css-1dbjc4n > .r-sdzlij.r-42olwf.r-jc7xae{
    background-color: var(--twitter-following-background) !important;
    border-color: var(--twitter-following-border) !important;
}
.r-s8bhmr > div > .css-1dbjc4n > .css-1dbjc4n > .r-sdzlij.r-42olwf.r-jc7xae > .r-b88u0q{
    color: var(--twitter-following-color) !important;
}
/*(アカウントのアイコンにマウス持ってったら出てくるやつでも)*/
.r-1wtj0ep > .css-1dbjc4n > [data-testid$="-follow"].r-1qi8awa:not(.r-jc7xae):not(.r-1niwhzg):not(.r-qqmkd0):not(.r-1peqgm7):not(.r-l5o3uw):not(.r-1vtznih):not(.r-c8f5pn):not(.r-7l9xyp):not([href="/settings/profile"]){
    background-color: var(--twitter-not-following-background) !important;
    border-color: var(--twitter-not-following-border) !important;
}
.r-1wtj0ep > .css-1dbjc4n > [data-testid$="-follow"].r-1qi8awa:not(.r-jc7xae):not(.r-1niwhzg):not(.r-qqmkd0):not(.r-1peqgm7):not(.r-l5o3uw):not(.r-1vtznih):not(.r-c8f5pn):not(.r-7l9xyp):not([href="/settings/profile"]) > .r-b88u0q{
    color: var(--twitter-not-following-color) !important;
}
.r-1wtj0ep > .css-1dbjc4n > .r-1qi8awa.r-jc7xae:not(.r-1niwhzg):not(.r-qqmkd0):not(.r-1peqgm7):not(.r-l5o3uw):not(.r-1vtznih):not(.r-c8f5pn):not(.r-7l9xyp){
    background-color: var(--twitter-following-background) !important;
    border-color: var(--twitter-following-border) !important;
}
.r-1wtj0ep > .css-1dbjc4n > .r-1qi8awa.r-jc7xae:not(.r-1niwhzg):not(.r-qqmkd0):not(.r-1peqgm7):not(.r-l5o3uw):not(.r-1vtznih):not(.r-c8f5pn):not(.r-7l9xyp) > .r-b88u0q{
    color: var(--twitter-following-color) !important;
}
/*フォロー中*/
.r-19u6a5r > .r-4wgw6l.r-15ysp7h:not(.r-42olwf){
    background-color: var(--twitter-following-background) !important;
    border-color: var(--twitter-following-border) !important;
}
.r-19u6a5r > .r-4wgw6l.r-15ysp7h:not(.r-42olwf) > .r-b88u0q{
    color: var(--twitter-following-color) !important;
}

.r-19u6a5r > .r-4wgw6l.r-15ysp7h.r-qqmkd0:not(.r-42olwf){
    background-color: var(--twitter-un-following-background) !important;
    border-color: var(--twitter-un-following-border) !important;
}
.r-19u6a5r > .r-4wgw6l.r-15ysp7h.r-qqmkd0:not(.r-42olwf) > .r-b88u0q{
    color: var(--twitter-un-following-color) !important;
}
/*プロフィール画面でも*/
.r-6gpygo > .r-ymttw5.r-1qi8awa:not(.r-42olwf){
    background-color: var(--twitter-following-background) !important;
    border-color: var(--twitter-following-border) !important;
}
.r-6gpygo > .r-ymttw5.r-1qi8awa:not(.r-42olwf) > .r-b88u0q{
    color: var(--twitter-following-color) !important;
}

.r-6gpygo > .r-ymttw5.r-1qi8awa.r-qqmkd0:not(.r-42olwf){
    background-color: var(--twitter-un-following-background) !important;
    border-color: var(--twitter-un-following-border) !important;
}
.r-6gpygo > .r-ymttw5.r-1qi8awa.r-qqmkd0:not(.r-42olwf) > .r-b88u0q{
    color: var(--twitter-un-following-color) !important;
}
/*画面上でも*/
.r-s8bhmr > div > .css-1dbjc4n > .css-1dbjc4n > .r-ymttw5.r-1qi8awa:not(.r-42olwf){
    background-color: var(--twitter-following-background) !important;
    border-color: var(--twitter-following-border) !important;
}
.r-s8bhmr > div > .css-1dbjc4n > .css-1dbjc4n > .r-ymttw5.r-1qi8awa:not(.r-42olwf) > .r-b88u0q{
    color: var(--twitter-following-color) !important;
}

.r-s8bhmr > div > .css-1dbjc4n > .css-1dbjc4n > .r-ymttw5.r-1qi8awa.r-qqmkd0:not(.r-42olwf){
    background-color: var(--twitter-un-following-background) !important;
    border-color: var(--twitter-un-following-border) !important;
}
.r-s8bhmr > div > .css-1dbjc4n > .css-1dbjc4n > .r-ymttw5.r-1qi8awa.r-qqmkd0:not(.r-42olwf) > .r-b88u0q{
    color: var(--twitter-un-following-color) !important;
}
/*上と同じように*/
.r-1wtj0ep > .css-1dbjc4n > .r-1qi8awa.r-1niwhzg:not(.r-qqmkd0):not(.r-1peqgm7):not(.r-l5o3uw):not(.r-1vtznih):not(.r-c8f5pn)[aria-label*="フォロー中 "]{
    background-color: var(--twitter-following-background) !important;
    border-color: var(--twitter-following-border) !important;
}
.r-1wtj0ep > .css-1dbjc4n > .r-1qi8awa.r-1niwhzg:not(.r-qqmkd0):not(.r-1peqgm7):not(.r-l5o3uw):not(.r-1vtznih):not(.r-c8f5pn)[aria-label*="フォロー中 "] > .r-b88u0q{
    color: var(--twitter-following-color) !important;
}
.r-1wtj0ep > .css-1dbjc4n > .r-1qi8awa.r-qqmkd0:not(.r-1peqgm7):not(.r-l5o3uw):not(.r-1vtznih):not(.r-c8f5pn)[aria-label*="フォロー中 "]{
    background-color: var(--twitter-un-following-background) !important;
    border-color: var(--twitter-un-following-border) !important;
}
.r-1wtj0ep > .css-1dbjc4n > .r-1qi8awa.r-qqmkd0:not(.r-1peqgm7):not(.r-l5o3uw):not(.r-1vtznih):not(.r-c8f5pn)[aria-label*="フォロー中 "] > .r-b88u0q{
    color: var(--twitter-un-following-color) !important;
}
/*プロフィールを編集*/
.r-1h0z5md > [href="/settings/profile"].r-1qi8awa{
    background-color: var(--twitter-profile-background) !important;
    border-color: var(--twitter-profile-border) !important;
}
.r-1h0z5md > [href="/settings/profile"].r-1qi8awa > .r-b88u0q{
    color: var(--twitter-profile-color) !important;
}
/*プロフィールを保存*/
.r-1ye8kvj > .r-s8bhmr > .r-15ysp7h{
    background-color: var(--twitter-profile-save-background) !important;
    border-color: var(--twitter-profile-save-border) !important;
}
.r-1ye8kvj > .r-s8bhmr > .r-15ysp7h > .r-b88u0q{
    color: var(--twitter-profile-save-color) !important;
}
/*誕生日を設定*/
.r-11c0sde > .r-42olwf.r-1ps3wis{
    background-color: var(--twitter-birthday-background) !important;
    border-color: var(--twitter-birthday-border) !important;
}
.r-11c0sde > .r-42olwf.r-1ps3wis > .r-b88u0q{
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

.${TUICLibrary.getClasses.getClass("TUIC_ISNOTDEFAULT")}{
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
    background: var(--TUIC-container-background);
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
    height:calc((1em + 5px) * var(--contentCount) + 10px);
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
    border-color: var(--twitter-TUIC-color);
    border-radius: 9999px;
    transition: .3s;
    cursor: pointer;
}
.TUIC_setting_button:hover {
    background: #ffffff40;
}
.TUIC_setting_button_width{
    width:100%;
    padding-top:5px !important;
    padding-bottom:5px !important;
}
.TUIC_none_scroll{
    scrollbar-width: none;
    -ms-overflow-style: none;
}
.TUIC_none_scroll::-webkit-scrollbar{display:none}
.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}{
    display: none !important;
}

.TUIC_ButtonHover2:hover > .TUIC_ButtonHover > div{
    background-color:rgba(29,155,240,0.1)
}
.TUIC_ButtonHover2:Active > .TUIC_ButtonHover > div{
    background-color:rgba(29,155,240,0.2)
}

.TUIC_ButtonHover2:hover > .TUIC_ButtonHover > svg{
    color:rgb(29,155,240)
}
#TUIC_invisible,#TUIC_visible{
    background:transparent;
}
#TUIC_invisible span,#TUIC_visible span,#css_textarea{
    background:transparent;
    color:var(--twitter-TUIC-color);
    white-space:nowrap;
}

#TUIC_invisible > div,#TUIC_visible > div{
    padding-top:2px;
    padding-bottom:2px;
    padding-left:1em;
    padding-right:1em;
}

[TUICSelectedUpDownContent="true"]{
    background-color:rgba(51, 167, 229,0.7);
}

textarea#css_textarea {
    width: calc(100% - 10px) !important;
    height: 300px;
    border: 1px solid #808080;
    border-radius: 6px;
    margin-bottom: 20px;
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
.TUICUploadedImg):not([role="alertdialog"] [data-testid="confirmationSheetDialog"] *){
    margin: 8px;
    background-size: cover;
}

#placeholder > :is(.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_Twitter")},
.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_Dog")},
.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_IconImg")}){
    position: absolute;
    margin: auto;
}
:is(.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_Twitter")},
.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_Dog")},
.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_IconImg")}):not([role="alertdialog"] [data-testid="confirmationSheetDialog"] *){
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
.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_IconImg")}){
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
    background-image:url('data:image/png;base64,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');
}

.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_Twitter")}:not([role="alertdialog"] [data-testid="confirmationSheetDialog"] *){
    mask-size: cover !important;
    -webkit-mask-size: cover !important;
}

.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_Twitter")}{
    background-color:var(--twitter-TUIC-color);
    --TUIC-twitter-icon:${TUICData.twitterIconSVG}  !important;
    -webkit-mask-image:var(--TUIC-twitter-icon) !important;
    mask-image:var(--TUIC-twitter-icon) !important;
}

.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_IconImg")},
#TUICIcon_IconImg{
    background-image:url('${localStorage.getItem("TUIC_IconImg") ?? ""}');
    ${(TUICPref.otherBoolSetting["roundIcon"] ?? TUICData.defaultPref.otherBoolSetting.roundIcon) ? `
    border-radius:9999px !important;
    ` : ""}
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
.TUICUploadedImg{
    width:64px;
    height:64px;
}

.TUICSidebarSelected > div > [dir=\"ltr\"]{
    font-weight:700;
}
.TUICSidebarSelected > div > div > svg{
    stroke:currentColor;
    stroke-width:0.5;
}
.TUICSidebarButton > div:hover{
    background-color:var(--TUIC-sidebar-hover-color);
 }

 .TUICSidebarButton > div:active{
    background-color:var(--TUIC-sidebar-active-color);
 }
 .TUICCheckBoxParent{
    margin-bottom: 8px;
 }
 ${(TUICPref.otherBoolSetting["smallerSidebarContent"] ?? TUICData.defaultPref.otherBoolSetting.smallerSidebarContent) ? `
 [role="navigation"] .${"NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}{
    padding-bottom:0px !important;
    padding-top:0px !important;
}
 ` : ""}
`;
}

function TUICCustomCSS() {
    document.querySelector("#twitter_ui_customizer_css").textContent = localStorage.getItem("TUIC_CSS")
}
