var urlchange = ""


// 対象とするノードを取得
const target = document.getElementsByTagName("body").item(0);

// オブザーバインスタンスを作成
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (document.querySelector('#unsent-tweet-background') == null && document.querySelector('section[aria-labelledby="detail-header"] > .r-1h0z5md > div[dir="auto"]') != null && window.location.pathname == "/settings/display") {

            display_run()
        }

        if (document.querySelector('style.twitter_ui_customizer') == null) {

            run_first()
        }


    });
});

// オブザーバの設定
const config = {
    childList: true,
    subtree: true
};

// 対象ノードとオブザーバの設定を渡す
observer.observe(target, config);

let input_id = ["unsent-tweet-", "not-following-", "following-", "un-following-", "profile-", "profile-save-", "birthday-","profile-link-"]
var color = ["rgba(29,161,242,1)", "rgba(29,161,242,1)", "rgba(255,255,255,1)", 
"rgba(255,255,255,0)", "rgba(29,161,242,1)", "rgba(29,161,242,1)", 
"rgba(29,161,242,1)", "rgba(29,161,242,1)", "rgba(255,255,255,1)",
"rgba(255,0,0,1)", "rgba(255,0,0,1)", "rgba(255,255,255,1)", 
"rgba(255,255,255,0)", "rgba(29,161,242,1)", "rgba(29,161,242,1)", 
"rgba(29,161,242,1)", "rgba(29,161,242,1)", "rgba(255,255,255,1)", 
"rgba(255,0,0,1)", "rgba(255,0,0,1)", "rgba(255,255,255,1)", 
"rgba(255,255,255,0)", "rgba(255,255,255,0)", "rgba(255,255,255,1)"]
let color2 = ["rgba(29,161,242,1)", "rgba(29,161,242,1)", "rgba(255,255,255,1)", 
"rgba(255,255,255,0)", "rgba(29,161,242,1)", "rgba(29,161,242,1)", 
"rgba(29,161,242,1)", "rgba(29,161,242,1)", "rgba(255,255,255,1)",
"rgba(255,0,0,1)", "rgba(255,0,0,1)", "rgba(255,255,255,1)", 
"rgba(255,255,255,0)", "rgba(29,161,242,1)", "rgba(29,161,242,1)", 
"rgba(29,161,242,1)", "rgba(29,161,242,1)", "rgba(255,255,255,1)", 
"rgba(255,0,0,1)", "rgba(255,0,0,1)", "rgba(255,255,255,1)", 
"rgba(255,255,255,0)", "rgba(255,255,255,0)", "rgba(0,0,0,1)"]

window.onload = function () {
    run_first()
}


function run_first() {
    var TUIC_color = "rgba(255,255,255,1)"
    // 追加する要素を用意します。
    let add = document.createElement("style");
    add.classList.add("twitter_ui_customizer")

if(document.querySelector('body[style*=\"255\"]') != null){
color = color2
}

    var unsent_tweet_background = localStorage.getItem('unsent-tweet-background') ?? color[0]
    var unsent_tweet_border = localStorage.getItem('unsent-tweet-border') ?? color[1]
    var unsent_tweet_color = localStorage.getItem('unsent-tweet-color') ?? color[2]
    var not_following_background = localStorage.getItem('not-following-background') ?? color[3]
    var not_following_border = localStorage.getItem('not-following-border') ?? color[4]
    var not_following_color = localStorage.getItem('not-following-color') ?? color[5]
    var following_background = localStorage.getItem('following-background') ?? color[6]
    var following_border = localStorage.getItem('following-border') ?? color[7]
    var following_color = localStorage.getItem('following-color') ?? color[8]
    var un_following_background = localStorage.getItem('un-following-background') ?? color[9]
    var un_following_border = localStorage.getItem('un-following-border') ?? color[10]
    var un_following_color = localStorage.getItem('un-following-color') ?? color[11]
    var profile_background = localStorage.getItem('profile-background') ?? color[12]
    var profile_border = localStorage.getItem('profile-border') ?? color[13]
    var profile_color = localStorage.getItem('profile-color') ?? color[14]
    var profile_save_background = localStorage.getItem('profile-save-background') ?? color[15]
    var profile_save_border = localStorage.getItem('profile-save-border') ?? color[16]
    var profile_save_color = localStorage.getItem('profile-save-color') ?? color[17]
    var birthday_background = localStorage.getItem('birthday-background') ?? color[18]
    var birthday_border = localStorage.getItem('birthday-border') ?? color[19]
    var birthday_color = localStorage.getItem('birthday-color') ?? color[20]
    var profile_link_background = localStorage.getItem('profile-link-background') ?? color[21]
    var profile_link_border = localStorage.getItem('profile-link-border') ?? color[22]
    var profile_link_color = localStorage.getItem('profile-link-color') ?? color[23]



    add.textContent = `
:root{
    --twitter-unsent-tweet-background: ${unsent_tweet_background};
    --twitter-unsent-tweet-border: ${unsent_tweet_border};
    --twitter-unsent-tweet-color: ${unsent_tweet_color};
    --twitter-not-following-background: ${not_following_background};
    --twitter-not-following-border: ${not_following_border};
    --twitter-not-following-color: ${not_following_color};
    --twitter-following-background: ${following_background};
    --twitter-following-border: ${following_border};
    --twitter-following-color: ${following_color};
    --twitter-un-following-background: ${un_following_background};
    --twitter-un-following-border: ${un_following_border};
    --twitter-un-following-color: ${un_following_color};
    --twitter-profile-background: ${profile_background};
    --twitter-profile-border: ${profile_border};
    --twitter-profile-color: ${profile_color};
    --twitter-profile-save-background: ${profile_save_background};
    --twitter-profile-save-border: ${profile_save_border};
    --twitter-profile-save-color: ${profile_save_color};
    --twitter-birthday-background: ${birthday_background};
    --twitter-birthday-border: ${birthday_border};
    --twitter-birthday-color: ${birthday_color};
    --twitter-profile-link-background: ${profile_link_background};
    --twitter-profile-link-border: ${profile_link_border};
    --twitter-profile-link-color: ${profile_link_color};
    --twitter-TUIC-color: ${TUIC_color};
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
.r-6gpygo > .r-sdzlij.r-42olwf:not(.r-jc7xae){
    background-color: var(--twitter-not-following-background) !important;
    border-color: var(--twitter-not-following-border) !important;
}
.r-6gpygo > .r-sdzlij.r-42olwf:not(.r-jc7xae) > .r-b88u0q{
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
.r-1wtj0ep > .css-1dbjc4n > .r-1qi8awa:not(.r-jc7xae):not(.r-1niwhzg):not(.r-qqmkd0):not(.r-1peqgm7):not(.r-l5o3uw):not(.r-1vtznih):not(.r-c8f5pn):not(.r-7l9xyp){
    background-color: var(--twitter-not-following-background) !important;
    border-color: var(--twitter-not-following-border) !important;
}
.r-1wtj0ep > .css-1dbjc4n > .r-1qi8awa:not(.r-jc7xae):not(.r-1niwhzg):not(.r-qqmkd0):not(.r-1peqgm7):not(.r-l5o3uw):not(.r-1vtznih):not(.r-c8f5pn):not(.r-7l9xyp) > .r-b88u0q{
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
.r-1h0z5md > .r-1qi8awa{
    background-color: var(--twitter-profile-background) !important;
    border-color: var(--twitter-profile-border) !important;
}
.r-1h0z5md > .r-1qi8awa > .r-b88u0q{
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
/*プロフィールリンク*/
div.r-xoduu5 > a.r-b88u0q{
    background-color: var(--twitter-profile-link-background) !important;
    border-color: var(--twitter-profile-link-border) !important;
}
div.r-xoduu5 > a.r-b88u0q > span{
    color: var(--twitter-profile-link-color) !important;
}

/*設定画面の文字色*/
#TUIC_setting > *{
    color: var(--TUIC-color) !important;
}
#TUIC_setting > * > *{
    color: var(--TUIC-color) !important;
}
#TUIC_setting > * > * > *{
    color: var(--TUIC-color) !important;
}

`;
    let aa = document.getElementsByTagName("head")
    // 基準となる要素を指定します。


    let add2 = document.createElement("style");
    add2.classList.add("twitter_ui_customizer_css")
    add2.textContent = localStorage.getItem('css')


    let sample = aa.item(0)
    let result = sample.appendChild(add);
    let result2 = sample.appendChild(add2);


    var pathname = location.pathname;




}



function display_setting() {
    let aa2 = document.querySelector('section[aria-labelledby="detail-header"] > .r-1h0z5md');
    let add_div2 = document.createElement("div");
    add_div2.classList.add("css-1dbjc4n", "r-kuekak", "r-109y4c4", "r-1p6iasa")
    add_div2.id = "TUIC_setting"
    aa2.appendChild(add_div2)

    let div_h1 = document.createElement("div");
    div_h1.id = "TUIC_setting"
    div_h1.classList.add("css-1dbjc4n", "r-1wtj0ep", "r-ymttw5", "r-1f1sjgu")
    let div_h2 = document.createElement("h2")
    div_h2.ariaLevel = "2"
    div_h2.setAttribute("role", "heading")
    div_h2.classList.add("css-4rbku5", "css-1dbjc4n", "r-18u37iz")
    let div_div1 = document.createElement("div");
    div_div1.classList.add("css-1dbjc4n", "r-k200y", "r-z80fyv", "r-1777fci", "r-1bymd8e")
    let div_div2 = document.createElement("div");
    div_div2.classList.add("css-901oao", "css-cens5h", "r-jwli3a", "r-1tl8opc", "r-adyw6z", "r-1vr29t4", "r-135wba7", "r-bcqeeo", "r-qvutc0")
    div_div2.style = "-webkit-line-clamp: 3;"
    let span = document.createElement("span");
    span.classList.add("css-901oao", "css-16my406", "r-1tl8opc", "r-bcqeeo", "r-qvutc0")
    span.textContent = "Twitter UI Customizer"
    div_div2.appendChild(span)
    div_h2.appendChild(div_div2)
    div_h2.appendChild(div_div1)
    div_h1.appendChild(div_h2)
    aa2.appendChild(div_h1)

    let add_div = document.createElement("div");

    let input_name = ["未送信ツイートの編集ボタン", "フォローしていない人のフォローボタン", "フォローしている人のフォローボタン", "フォロー解除ボタン", "プロフィール編集ボタン", "プロフィールの保存ボタン", "最終決定ボタン","プロフィールへのリンク"]


    for (var i = 0; i < input_id.length; i++) {
        var main_h3 = document.createElement("h2")
        main_h3.textContent = input_name[i]
        main_h3.classList.add("r-jwli3a", "r-1tl8opc", "r-qvutc0", "r-bcqeeo", "css-901oao")
        main_h3.style = "font-size:20px;"
        add_div.appendChild(main_h3)
        add_div.appendChild(document.createElement("br"))

        var main_h4_1 = document.createElement("h4")
        main_h4_1.classList.add("r-jwli3a", "r-1tl8opc", "r-qvutc0", "r-bcqeeo", "css-901oao")
        main_h4_1.textContent = "背景色:"
        main_h4_1.style = "font-size:15px;"
        add_div.appendChild(main_h4_1)
        var input = document.createElement("input")
        input.type = "color"
        input.id = input_id[i] + "background"
        var temp2 = (localStorage.getItem(input_id[i] + "background") ?? color[i * 3]).replace("rgba(", "").replace(")", "").split(",")
        input.value = rgb2hex([Number(temp2[0]), Number(temp2[1]), Number(temp2[2])])
        add_div.appendChild(input)
        var check = document.createElement("input")
        check.type = "checkbox"
        check.id = input_id[i] + "background-check"
        if (temp2[3] == "0") {
            check.checked = true
        } else {
            check.checked = false
        }
        var label = document.createElement("label")
        label.setAttribute("for", input_id[i] + "background-check")
        label.textContent = "透明色にする"
        label.classList.add("r-jwli3a", "r-1tl8opc", "r-qvutc0", "r-bcqeeo", "css-901oao")
        label.style = "font-size:15px;"
        add_div.appendChild(check)
        add_div.appendChild(label)
        add_div.appendChild(document.createElement("br"))

        var main_h4_2 = document.createElement("h4")
        main_h4_2.classList.add("r-jwli3a", "r-1tl8opc", "r-qvutc0", "r-bcqeeo", "css-901oao")
        main_h4_2.textContent = "枠色:"
        main_h4_2.style = "font-size:15px;"
        add_div.appendChild(main_h4_2)
        var input2 = document.createElement("input")
        input2.type = "color"
        input2.id = input_id[i] + "border"
        temp2 = (localStorage.getItem(input_id[i] + "border") ?? color[i * 3 + 1]).replace("rgba(", "").replace(")", "").split(",")
        input2.value = rgb2hex([Number(temp2[0]), Number(temp2[1]), Number(temp2[2])])
        add_div.appendChild(input2)
        var check2 = document.createElement("input")
        check2.type = "checkbox"
        check2.id = input_id[i] + "border-check"
        if (temp2[3] == "0") {
            check2.checked = true
        } else {
            check2.checked = false
        }
        var label2 = document.createElement("label")
        label2.setAttribute("for", input_id[i] + "border-check")
        label2.textContent = "透明色にする"
        label2.classList.add("r-jwli3a", "r-1tl8opc", "r-qvutc0", "r-bcqeeo", "css-901oao")
        label2.style = "font-size:15px;"
        add_div.appendChild(check2)
        add_div.appendChild(label2)
        add_div.appendChild(document.createElement("br"))

        var main_h4_3 = document.createElement("h4")
        main_h4_3.classList.add("r-jwli3a", "r-1tl8opc", "r-qvutc0", "r-bcqeeo", "css-901oao")
        main_h4_3.textContent = "文字色:"
        main_h4_3.style = "font-size:15px;"
        add_div.appendChild(main_h4_3)
        var input3 = document.createElement("input")
        input3.type = "color"
        input3.id = input_id[i] + "color"
        temp2 = (localStorage.getItem(input_id[i] + "color") ?? color[i * 3 + 2]).replace("rgba(", "").replace(")", "").split(",")
        input3.value = rgb2hex([Number(temp2[0]), Number(temp2[1]), Number(temp2[2])])
        add_div.appendChild(input3)
        var check3 = document.createElement("input")
        check3.type = "checkbox"
        check3.id = input_id[i] + "color-check"
        if (temp2[3] == "0") {
            check3.checked = true
        } else {
            check3.checked = false
        }
        var label3 = document.createElement("label")
        label3.setAttribute("for", input_id[i] + "color-check")
        label3.textContent = "透明色にする"
        label3.classList.add("r-jwli3a", "r-1tl8opc", "r-qvutc0", "r-bcqeeo", "css-901oao")
        label3.style = "font-size:15px;"
        add_div.appendChild(check3)
        add_div.appendChild(label3)
        add_div.appendChild(document.createElement("br"))
        add_div.appendChild(document.createElement("br"))
    }


    var form_h2 = document.createElement("h2")
    form_h2.textContent = "カスタムCSS"
    form_h2.classList.add("r-jwli3a", "r-1tl8opc", "r-qvutc0", "r-bcqeeo", "css-901oao")
    form_h2.style = "font-size:20px;"
    add_div.appendChild(form_h2)
    add_div.appendChild(document.createElement("br"))

    let textarea_form = document.createElement("form");
    let textarea = document.createElement("textarea");
    textarea.style = "width:calc(100% - 10px);"
    textarea.id = "css_textarea"
    textarea.value = localStorage.getItem('css')
    textarea_form.appendChild(textarea)

    let add_button = document.createElement("button");
    add_button.id = "default_set"
    add_button.textContent = "デフォルトに戻す"

    let add_button2 = document.createElement("button");
    add_button2.id = "save"
    add_button2.textContent = "保存"

    add_div.classList.add("r-1f1sjgu", "r-1e081e0")
    add_div.id = "TUIC_setting"
    add_div.appendChild(textarea_form)
    add_div.appendChild(add_button2)
    let result_button = add_div.appendChild(add_button)

    var add_h4 = document.createElement("h4")
    add_h4.classList.add("r-jwli3a", "r-1tl8opc", "r-qvutc0", "r-bcqeeo", "css-901oao")
    add_h4.textContent = "※再読込します"
    add_h4.style = "font-size:12px;"
    add_div.appendChild(add_h4)



    aa2.appendChild(add_div);

    document.getElementById('save').addEventListener('click',
        save_data);
    document.getElementById('default_set').addEventListener('click',
        default_set);
}

function display_run() {
    if (document.querySelector('section[aria-labelledby="detail-header"] > .r-1h0z5md > div[dir="auto"]') == null) {
        window.setTimeout(display_run, 10000)
    } else {
        display_setting()
    }



}



function rgb2hex(rgb) {
    return "#" + rgb.map(function (value) {
        return ("0" + value.toString(16)).slice(-2);
    }).join("");
}
function hex2rgb(hex) {
    if (hex.slice(0, 1) == "#") hex = hex.slice(1);
    if (hex.length == 3) hex = hex.slice(0, 1) + hex.slice(0, 1) + hex.slice(1, 2) + hex.slice(1, 2) + hex.slice(2, 3) + hex.slice(2, 3);

    return [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)].map(function (str) {
        return parseInt(str, 16);
    });

}

function save_data() {
    for (var i = 0; i < input_id.length; i++) {
        var color = hex2rgb(document.getElementById(input_id[i] + "background").value)
        if (document.getElementById(input_id[i] + "background-check").checked) {
            localStorage.setItem(input_id[i] + "background", `rgba(${String(color[0])},${String(color[1])},${String(color[2])},0)`)
        } else {
            localStorage.setItem(input_id[i] + "background", `rgba(${String(color[0])},${String(color[1])},${String(color[2])},1)`)
        }
        var color2 = hex2rgb(document.getElementById(input_id[i] + "border").value)
        if (document.getElementById(input_id[i] + "border-check").checked) {
            localStorage.setItem(input_id[i] + "border", `rgba(${String(color2[0])},${String(color2[1])},${String(color2[2])},0)`)
        } else {
            localStorage.setItem(input_id[i] + "border", `rgba(${String(color2[0])},${String(color2[1])},${String(color2[2])},1)`)
        }
        var color3 = hex2rgb(document.getElementById(input_id[i] + "color").value)
        if (document.getElementById(input_id[i] + "color-check").checked) {
            localStorage.setItem(input_id[i] + "color", `rgba(${String(color3[0])},${String(color3[1])},${String(color3[2])},0)`)
        } else {
            localStorage.setItem(input_id[i] + "color", `rgba(${String(color3[0])},${String(color3[1])},${String(color3[2])},1)`)
        }
    }
    localStorage.setItem("css", document.getElementById("css_textarea").value)

    location.reload();
}



function default_set() {
    localStorage.removeItem('unsent-tweet-background')
    localStorage.removeItem('unsent-tweet-border')
    localStorage.removeItem('unsent-tweet-color')
    localStorage.removeItem('not-following-background')
    localStorage.removeItem('not-following-border')
    localStorage.removeItem('not-following-color')
    localStorage.removeItem('following-background')
    localStorage.removeItem('following-border')
    localStorage.removeItem('following-color')
    localStorage.removeItem('un-following-background')
    localStorage.removeItem('un-following-border')
    localStorage.removeItem('un-following-color')
    localStorage.removeItem('profile-background')
    localStorage.removeItem('profile-border')
    localStorage.removeItem('profile-color')
    localStorage.removeItem('profile-save-background')
    localStorage.removeItem('profile-save-border')
    localStorage.removeItem('profile-save-color')
    localStorage.removeItem('birthday-background')
    localStorage.removeItem('birthday-border')
    localStorage.removeItem('birthday-color')
    localStorage.removeItem('profile-link-background')
    localStorage.removeItem('profile-link-border')
    localStorage.removeItem('profile-link-color')

    location.reload();
}