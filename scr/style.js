var urlchange = ""

let TUIC_input_color_title = ["unsent-tweet-", "not-following-", "following-", "un-following-", "profile-", "profile-save-", "birthday-", "profile-link-"]
let input_name = ["未送信ツイートの編集ボタン", "フォローしていない人のフォローボタン", "フォローしている人のフォローボタン", "フォロー解除ボタン", "プロフィール編集ボタン", "プロフィールの保存ボタン", "最終決定ボタン", "プロフィールへのリンク"]
let TUIC_input_checkbox_title = ["reply-button", "retweet-button", "like-button", "downvote-button", "share-button", "tweet_analytics", "boolkmark"]
let TUIC_input_checkbox_name = { "reply-button": "返信", "retweet-button": "リツイート", "like-button": "いいね", "downvote-button": "自分向きではない", "share-button": "共有", "tweet_analytics": "ツイートアナリティクスを表示", "boolkmark": "ブックマークに保存" }
let TUIC_input_checkbox_selector = { "reply-button": "[data-testid$=\"reply\"]", "retweet-button": "[data-testid$=\"retweet\"]", "like-button": "[data-testid$=\"like\"]", "downvote-button": "[data-testid$=\"downvote\"]", "share-button": "[aria-label=\"ツイートを共有\"]", "tweet_analytics": "[aria-label=\"ツイートアナリティクスを表示\"]" }
let TUIC_input_checkbox_selector_three = ["share-button"]
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
var visible_button = JSON.parse(localStorage.getItem('visible-button')) ?? TUIC_input_checkbox_title
// 対象とするノードを取得
const target = document.getElementsByTagName("body").item(0);

// オブザーバインスタンスを作成
const observer = new MutationObserver((mutations) => {
    observer.disconnect();
    let articles = document.querySelectorAll(`article:not([TUIC_ARTICLE="TUIC_CHECKED_ARTICLE"])`)
    if (articles.length != 0) {
        articles.forEach(function (elem) {
            for (var i = 0; i < visible_button.length; i++) {
                if (visible_button[i] == "boolkmark" && elem.querySelector("[data-testid$=\"reply\"]") != null) {
                    let div = document.createElement('div');
                    div.style = "display: inline-grid;justify-content: inherit;transform: rotate(0deg) scale(1) translate3d(0px, 0px, 0px);-moz-box-pack: inherit;"
                    div.classList.add("css-1dbjc4n")
                    if (window.location.pathname == "/i/bookmarks") {
                        div.innerHTML = `
                    <div class="css-1dbjc4n r-18u37iz r-1h0z5md">
                      <div
                        aria-label="ブックマークから削除"
                        role="button"
                        tabindex="0"
                        class="css-18t94o4 css-1dbjc4n r-1777fci r-bt1l66 r-1ny4l3l r-bztko3 r-lrvibr"
                      >
                        <div
                          dir="ltr"
                          class="css-901oao r-1awozwy r-115tad6 r-6koalj r-37j5jr r-a023e6 r-16dba41 r-1h0z5md r-rjixqe r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0"
                        >
                          <div class="css-1dbjc4n r-xoduu5">
                            <div
                              class="css-1dbjc4n r-1niwhzg r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-1ny4l3l r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg"
                            ></div>
                            <svg
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              class="r-115tad6 r-4qtqp9 r-yyyyoo r-1q142lx r-1xvli5t r-1b7u577 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                            >
                              <g>
                              <g><path d="M19.9 10.744c-.415 0-.75.336-.75.75v9.782l-6.71-4.883c-.13-.095-.285-.143-.44-.143s-.31.048-.44.144l-6.71 4.883V5.6c0-.412.337-.75.75-.75h6.902c.414 0 .75-.335.75-.75s-.336-.75-.75-.75h-6.9c-1.242 0-2.25 1.01-2.25 2.25v17.15c0 .282.157.54.41.668.25.13.553.104.78-.062L12 17.928l7.458 5.43c.13.094.286.143.44.143.117 0 .234-.026.34-.08.252-.13.41-.387.41-.67V11.495c0-.414-.335-.75-.75-.75z" class="TUIC_BOOKMARK"></path><path d="M20.955 4.226l2.07-2.07c.293-.293.293-.768 0-1.06s-.768-.294-1.06 0l-2.07 2.07-2.07-2.07c-.294-.294-.77-.294-1.062 0s-.293.767 0 1.06l2.07 2.07-2.07 2.07c-.293.293-.293.768 0 1.06.146.147.338.22.53.22s.384-.072.53-.22l2.07-2.07 2.07 2.07c.146.147.338.22.53.22s.384-.072.53-.22c.293-.292.293-.767 0-1.06l-2.068-2.07z" class="TUIC_BOOKMARK"></path></g>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  `
                  div.childNodes[1].addEventListener("click", bookmark_delete)
                    } else {
                        div.innerHTML = `
                    <div class="css-1dbjc4n r-18u37iz r-1h0z5md">
                      <div
                        aria-label="ブックマークに保存"
                        role="button"
                        tabindex="0"
                        class="css-18t94o4 css-1dbjc4n r-1777fci r-bt1l66 r-1ny4l3l r-bztko3 r-lrvibr"
                      >
                        <div
                          dir="ltr"
                          class="css-901oao r-1awozwy r-115tad6 r-6koalj r-37j5jr r-a023e6 r-16dba41 r-1h0z5md r-rjixqe r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0"
                        >
                          <div class="css-1dbjc4n r-xoduu5">
                            <div
                              class="css-1dbjc4n r-1niwhzg r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-1ny4l3l r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg"
                            ></div>
                            <svg
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              class="r-115tad6 r-4qtqp9 r-yyyyoo r-1q142lx r-1xvli5t r-1b7u577 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                            >
                              <g>
                                <path
                                  d="M23.074 3.35H20.65V.927c0-.414-.337-.75-.75-.75s-.75.336-.75.75V3.35h-2.426c-.414 0-.75.337-.75.75s.336.75.75.75h2.425v2.426c0 .414.335.75.75.75s.75-.336.75-.75V4.85h2.424c.414 0 .75-.335.75-.75s-.336-.75-.75-.75zM19.9 10.744c-.415 0-.75.336-.75.75v9.782l-6.71-4.883c-.13-.095-.285-.143-.44-.143s-.31.048-.44.144l-6.71 4.883V5.6c0-.412.337-.75.75-.75h6.902c.414 0 .75-.335.75-.75s-.336-.75-.75-.75h-6.9c-1.242 0-2.25 1.01-2.25 2.25v17.15c0 .282.157.54.41.668.25.13.553.104.78-.062L12 17.928l7.458 5.43c.13.094.286.143.44.143.117 0 .234-.026.34-.08.252-.13.41-.387.41-.67V11.495c0-.414-.335-.75-.75-.75z" class="TUIC_BOOKMARK"
                                ></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  `
                  div.childNodes[1].addEventListener("click", bookmark)
                    }

                    elem.querySelector("[data-testid$=\"reply\"]").parentElement.parentElement.appendChild(div)

                } else if (elem.querySelector(TUIC_input_checkbox_selector[visible_button[i]]) != null) {
                    if (TUIC_input_checkbox_selector_three.includes(visible_button[i])) {
                        elem.querySelector(TUIC_input_checkbox_selector[visible_button[i]]).parentElement.parentElement.parentElement.appendChild(elem.querySelector(TUIC_input_checkbox_selector[visible_button[i]]).parentElement.parentElement)
                    } else {
                        elem.querySelector(TUIC_input_checkbox_selector[visible_button[i]]).parentElement.parentElement.appendChild(elem.querySelector(TUIC_input_checkbox_selector[visible_button[i]]).parentElement)
                    }

                }
            }

            for (var i = 0; i < TUIC_input_checkbox_title.length; i++) {
                if (!visible_button.includes(TUIC_input_checkbox_title[i])) {
                    if (elem.querySelector(TUIC_input_checkbox_selector[TUIC_input_checkbox_title[i]]) != null) {
                        if (TUIC_input_checkbox_selector_three.includes(TUIC_input_checkbox_title[i])) {
                            elem.querySelector(TUIC_input_checkbox_selector[TUIC_input_checkbox_title[i]]).parentElement.parentElement.classList.add("TUIC_DISPNONE");
                        } else {
                            elem.querySelector(TUIC_input_checkbox_selector[TUIC_input_checkbox_title[i]]).parentElement.classList.add("TUIC_DISPNONE");
                        }

                    }
                }
            }
            elem.setAttribute("TUIC_ARTICLE", "TUIC_CHECKED_ARTICLE")
        })
    }
    if (document.querySelector('style.twitter_ui_customizer') == null) {

        run_first()
    }
    if (document.querySelector('#unsent-tweet-background') == null && document.querySelector('section[aria-labelledby="detail-header"] > .r-1h0z5md > div[dir="auto"]') != null && window.location.pathname == "/settings/display") {
        display_run()
    }
    observer.observe(target, config);
});

// オブザーバの設定
const config = {
    childList: true,
    subtree: true
};

// 対象ノードとオブザーバの設定を渡す
observer.observe(target, config);
window.onload = function () {
    run_first()
}

function run_first() {
    var TUIC_color = "rgba(255,255,255,1)"
    // 追加する要素を用意します。
    let TUIC_css = document.createElement("style");
    TUIC_css.classList.add("twitter_ui_customizer")

    if (document.querySelector('body[style*=\"255\"]') != null) {
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



    TUIC_css.textContent = `
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
.TUIC_setting_text{
    color: var(--twitter-TUIC-color) !important;
}
.TUIC_setting_button{
    background: transparent !important;
    
}
.TUIC_none_scroll{
    scrollbar-width: none;
    -ms-overflow-style: none;
}
.TUIC_none_scroll::-webkit-scrollbar{display:none}
.TUIC_DISPNONE{
    display: none !important;
}

`;

    let textContent_old = `
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
#TUIC_setting > *:not(form){
    color: var(--twitter-TUIC-color) !important;
}
#TUIC_setting > *:not(form) > *{
    color: var(--twitter-TUIC-color) !important;
}
#TUIC_setting > *:not(form) > * > *{
    color: var(--twitter-TUIC-color) !important;
}
#TUIC_setting > button{
    color: var(--twitter-TUIC-color) !important;
    background: transparent !important;
    
}

.TUIC_DISPNONE{
    display: none !important;
}

`;
    let TWITTER_head = document.getElementsByTagName("head").item(0)
    // 基準となる要素を指定します。


    let TUIC_custom_css = document.createElement("style");
    TUIC_custom_css.classList.add("twitter_ui_customizer_css")
    TUIC_custom_css.textContent = localStorage.getItem('css')

    TWITTER_head.appendChild(TUIC_css);
    TWITTER_head.appendChild(TUIC_custom_css);

}



function display_setting() {
    let TWITTER_setting_back = document.querySelector('section[aria-labelledby="detail-header"] > .r-1h0z5md');

    let TUIC_setting_title_back = document.createElement("div");
    TUIC_setting_title_back.id = "TUIC_setting"
    TUIC_setting_title_back.classList.add("css-1dbjc4n", "r-1wtj0ep", "r-ymttw5", "r-1f1sjgu")

    let TUIC_setting_title_frame_h2 = document.createElement("h2")
    TUIC_setting_title_frame_h2.ariaLevel = "2"
    TUIC_setting_title_frame_h2.setAttribute("role", "heading")
    TUIC_setting_title_frame_h2.classList.add("css-4rbku5", "css-1dbjc4n", "r-18u37iz")

    let TUIC_setting_title_text_back = document.createElement("div");
    TUIC_setting_title_text_back.classList.add("css-901oao", "css-cens5h", "r-jwli3a", "r-1tl8opc", "r-adyw6z", "r-1vr29t4", "r-135wba7", "r-bcqeeo", "r-qvutc0")
    TUIC_setting_title_text_back.style = "-webkit-line-clamp: 3;"

    let TUIC_setting_title_text = document.createElement("span");
    TUIC_setting_title_text.classList.add("css-901oao", "css-16my406", "r-1tl8opc", "r-bcqeeo", "r-qvutc0", "TUIC_setting_text")
    TUIC_setting_title_text.textContent = "Twitter UI Customizer"

    TUIC_setting_title_text_back.appendChild(TUIC_setting_title_text)
    TUIC_setting_title_frame_h2.appendChild(TUIC_setting_title_text_back)
    TUIC_setting_title_back.appendChild(TUIC_setting_title_frame_h2)
    TWITTER_setting_back.appendChild(TUIC_setting_title_back)

    let TUIC_setting_main_back = document.createElement("div");

    for (var i = 0; i < TUIC_input_color_title.length; i++) {
        var TUIC_setting_main_title = document.createElement("h2")
        TUIC_setting_main_title.textContent = input_name[i]
        TUIC_setting_main_title.classList.add("r-jwli3a", "r-1tl8opc", "r-qvutc0", "r-bcqeeo", "css-901oao", "TUIC_setting_text")
        TUIC_setting_main_title.style = "font-size:20px;"
        TUIC_setting_main_back.appendChild(TUIC_setting_main_title)
        TUIC_setting_main_back.appendChild(document.createElement("br"))


        var TUIC_setting_main_color = document.createElement("h4")
        TUIC_setting_main_color.classList.add("r-jwli3a", "r-1tl8opc", "r-qvutc0", "r-bcqeeo", "css-901oao", "TUIC_setting_text")
        TUIC_setting_main_color.textContent = "背景色:"
        TUIC_setting_main_color.style = "font-size:15px;"
        TUIC_setting_main_back.appendChild(TUIC_setting_main_color)

        var TUIC_color_pick = document.createElement("input")
        TUIC_color_pick.type = "color"
        TUIC_color_pick.id = TUIC_input_color_title[i] + "background"

        var TUIC_color = (localStorage.getItem(TUIC_input_color_title[i] + "background") ?? color[i * 3]).replace("rgba(", "").replace(")", "").split(",")
        TUIC_color_pick.value = rgb2hex([Number(TUIC_color[0]), Number(TUIC_color[1]), Number(TUIC_color[2])])
        TUIC_setting_main_back.appendChild(TUIC_color_pick)

        var TUIC_checkbox = document.createElement("input")
        TUIC_checkbox.type = "checkbox"
        TUIC_checkbox.id = TUIC_input_color_title[i] + "background-check"
        if (TUIC_color[3] == "0") {
            TUIC_checkbox.checked = true
        } else {
            TUIC_checkbox.checked = false
        }

        var TUIC_checkbox_label = document.createElement("label")
        TUIC_checkbox_label.setAttribute("for", TUIC_input_color_title[i] + "background-check")
        TUIC_checkbox_label.textContent = "透明色にする"
        TUIC_checkbox_label.classList.add("r-jwli3a", "r-1tl8opc", "r-qvutc0", "r-bcqeeo", "css-901oao", "TUIC_setting_text")
        TUIC_checkbox_label.style = "font-size:15px;"

        TUIC_setting_main_back.appendChild(TUIC_checkbox)
        TUIC_setting_main_back.appendChild(TUIC_checkbox_label)
        TUIC_setting_main_back.appendChild(document.createElement("br"))


        TUIC_setting_main_color = document.createElement("h4")
        TUIC_setting_main_color.classList.add("r-jwli3a", "r-1tl8opc", "r-qvutc0", "r-bcqeeo", "css-901oao", "TUIC_setting_text")
        TUIC_setting_main_color.textContent = "枠色:"
        TUIC_setting_main_color.style = "font-size:15px;"
        TUIC_setting_main_back.appendChild(TUIC_setting_main_color)

        TUIC_color_pick = document.createElement("input")
        TUIC_color_pick.type = "color"
        TUIC_color_pick.id = TUIC_input_color_title[i] + "border"

        TUIC_color = (localStorage.getItem(TUIC_input_color_title[i] + "border") ?? color[i * 3 + 1]).replace("rgba(", "").replace(")", "").split(",")
        TUIC_color_pick.value = rgb2hex([Number(TUIC_color[0]), Number(TUIC_color[1]), Number(TUIC_color[2])])
        TUIC_setting_main_back.appendChild(TUIC_color_pick)
        TUIC_checkbox = document.createElement("input")
        TUIC_checkbox.type = "checkbox"
        TUIC_checkbox.id = TUIC_input_color_title[i] + "border-check"
        if (TUIC_color[3] == "0") {
            TUIC_checkbox.checked = true
        } else {
            TUIC_checkbox.checked = false
        }

        TUIC_checkbox_label = document.createElement("label")
        TUIC_checkbox_label.setAttribute("for", TUIC_input_color_title[i] + "border-check")
        TUIC_checkbox_label.textContent = "透明色にする"
        TUIC_checkbox_label.classList.add("r-jwli3a", "r-1tl8opc", "r-qvutc0", "r-bcqeeo", "css-901oao", "TUIC_setting_text")
        TUIC_checkbox_label.style = "font-size:15px;"

        TUIC_setting_main_back.appendChild(TUIC_checkbox)
        TUIC_setting_main_back.appendChild(TUIC_checkbox_label)
        TUIC_setting_main_back.appendChild(document.createElement("br"))


        TUIC_setting_main_color = document.createElement("h4")
        TUIC_setting_main_color.classList.add("r-jwli3a", "r-1tl8opc", "r-qvutc0", "r-bcqeeo", "css-901oao", "TUIC_setting_text")
        TUIC_setting_main_color.textContent = "文字色:"
        TUIC_setting_main_color.style = "font-size:15px;"
        TUIC_setting_main_back.appendChild(TUIC_setting_main_color)

        TUIC_color_pick = document.createElement("input")
        TUIC_color_pick.type = "color"
        TUIC_color_pick.id = TUIC_input_color_title[i] + "color"

        TUIC_color = (localStorage.getItem(TUIC_input_color_title[i] + "color") ?? color[i * 3 + 2]).replace("rgba(", "").replace(")", "").split(",")
        TUIC_color_pick.value = rgb2hex([Number(TUIC_color[0]), Number(TUIC_color[1]), Number(TUIC_color[2])])
        TUIC_setting_main_back.appendChild(TUIC_color_pick)

        TUIC_checkbox = document.createElement("input")
        TUIC_checkbox.type = "checkbox"
        TUIC_checkbox.id = TUIC_input_color_title[i] + "color-check"
        if (TUIC_color[3] == "0") {
            TUIC_checkbox.checked = true
        } else {
            TUIC_checkbox.checked = false
        }

        TUIC_checkbox_label = document.createElement("label")
        TUIC_checkbox_label.setAttribute("for", TUIC_input_color_title[i] + "color-check")
        TUIC_checkbox_label.textContent = "透明色にする"
        TUIC_checkbox_label.classList.add("r-jwli3a", "r-1tl8opc", "r-qvutc0", "r-bcqeeo", "css-901oao", "TUIC_setting_text")
        TUIC_checkbox_label.style = "font-size:15px;"

        TUIC_setting_main_back.appendChild(TUIC_checkbox)
        TUIC_setting_main_back.appendChild(TUIC_checkbox_label)
        TUIC_setting_main_back.appendChild(document.createElement("br"))
        TUIC_setting_main_back.appendChild(document.createElement("br"))
    }

    var TUIC_setting_main_title = document.createElement("h2")
    TUIC_setting_main_title.textContent = "ツイート下ボタンの並び替え"
    TUIC_setting_main_title.classList.add("r-jwli3a", "r-1tl8opc", "r-qvutc0", "r-bcqeeo", "css-901oao", "TUIC_setting_text")
    TUIC_setting_main_title.style = "font-size:20px;"
    TUIC_setting_main_back.appendChild(TUIC_setting_main_title)
    TUIC_setting_main_back.appendChild(document.createElement("br"))


    let TUIC_setting_button_div_parent = document.createElement("div")
    TUIC_setting_button_div_parent.style = "display:flex"
    let TUIC_setting_button_div_left = document.createElement("div")
    let TUIC_setting_button_div_center = document.createElement("div")
    let TUIC_setting_button_div_right = document.createElement("div")

    let TUIC_setting_left_title = document.createElement("h2")
    TUIC_setting_left_title.textContent = "表示"
    TUIC_setting_left_title.classList.add("r-jwli3a", "r-1tl8opc", "r-qvutc0", "r-bcqeeo", "css-901oao", "TUIC_setting_text")
    TUIC_setting_left_title.style = "font-size:15px;"
    TUIC_setting_button_div_left.appendChild(TUIC_setting_left_title)
    TUIC_setting_button_div_left.appendChild(document.createElement("br"))
    let TUIC_setting_button_visible_box = document.createElement("select")
    TUIC_setting_button_visible_box.id = "TUIC_visible"
    TUIC_setting_button_visible_box.classList.add("TUIC_none_scroll")
    for (var i = 0; i < visible_button.length; i++) {
        TUIC_checkbox = document.createElement("option")
        TUIC_checkbox.value = visible_button[i]
        TUIC_checkbox.id = visible_button[i]
        TUIC_checkbox.textContent = TUIC_input_checkbox_name[visible_button[i]]
        TUIC_setting_button_visible_box.appendChild(TUIC_checkbox)
    }
    TUIC_setting_button_visible_box.size = 6
    TUIC_setting_button_div_left.appendChild(TUIC_setting_button_visible_box)

    TUIC_setting_button_div_center.style = "text-align: center;"
    TUIC_setting_button_div_center.appendChild(document.createElement("br"))
    TUIC_setting_button_div_center.appendChild(document.createElement("br"))

    let TUIC_setting_center_toleft = document.createElement("button");
    TUIC_setting_center_toleft.id = "toleft"
    TUIC_setting_center_toleft.style = "width:7em;"
    TUIC_setting_center_toleft.textContent = "表示する"
    TUIC_setting_center_toleft.classList.add("TUIC_setting_text", "TUIC_setting_button")
    TUIC_setting_button_div_center.appendChild(TUIC_setting_center_toleft)
    TUIC_setting_button_div_center.appendChild(document.createElement("br"))

    let TUIC_setting_center_toup = document.createElement("button");
    TUIC_setting_center_toup.id = "toup"
    TUIC_setting_center_toup.style = "width:7em;"
    TUIC_setting_center_toup.textContent = "上へ"
    TUIC_setting_center_toup.classList.add("TUIC_setting_text", "TUIC_setting_button")
    TUIC_setting_button_div_center.appendChild(TUIC_setting_center_toup)
    TUIC_setting_button_div_center.appendChild(document.createElement("br"))

    let TUIC_setting_center_todown = document.createElement("button");
    TUIC_setting_center_todown.id = "todown"
    TUIC_setting_center_todown.style = "width:7em;"
    TUIC_setting_center_todown.textContent = "下へ"
    TUIC_setting_center_todown.classList.add("TUIC_setting_text", "TUIC_setting_button")
    TUIC_setting_button_div_center.appendChild(TUIC_setting_center_todown)
    TUIC_setting_button_div_center.appendChild(document.createElement("br"))

    let TUIC_setting_center_toright = document.createElement("button");
    TUIC_setting_center_toright.id = "toright"
    TUIC_setting_center_toright.style = "width:7em;"
    TUIC_setting_center_toright.textContent = "非表示にする"
    TUIC_setting_center_toright.classList.add("TUIC_setting_text", "TUIC_setting_button")
    TUIC_setting_button_div_center.appendChild(TUIC_setting_center_toright)
    TUIC_setting_button_div_center.appendChild(document.createElement("br"))


    let TUIC_setting_right_title = document.createElement("h2")
    TUIC_setting_right_title.textContent = "非表示"
    TUIC_setting_right_title.classList.add("r-jwli3a", "r-1tl8opc", "r-qvutc0", "r-bcqeeo", "css-901oao", "TUIC_setting_text")
    TUIC_setting_right_title.style = "font-size:15px;"
    TUIC_setting_button_div_right.appendChild(TUIC_setting_right_title)
    TUIC_setting_button_div_right.appendChild(document.createElement("br"))
    let TUIC_setting_button_invisible_box = document.createElement("select")
    TUIC_setting_button_invisible_box.classList.add("TUIC_none_scroll")
    TUIC_setting_button_invisible_box.id = "TUIC_invisible"
    for (var i = 0; i < TUIC_input_checkbox_title.length; i++) {
        if (!visible_button.includes(TUIC_input_checkbox_title[i])) {
            TUIC_checkbox = document.createElement("option")
            TUIC_checkbox.value = TUIC_input_checkbox_title[i]
            TUIC_checkbox.id = TUIC_input_checkbox_title[i]
            TUIC_checkbox.textContent = TUIC_input_checkbox_name[TUIC_input_checkbox_title[i]]
            TUIC_setting_button_invisible_box.appendChild(TUIC_checkbox)
        }
    }
    TUIC_setting_button_invisible_box.size = 6
    TUIC_setting_button_div_right.appendChild(TUIC_setting_button_invisible_box)


    TUIC_setting_button_div_parent.appendChild(TUIC_setting_button_div_left)
    TUIC_setting_button_div_parent.appendChild(TUIC_setting_button_div_center)
    TUIC_setting_button_div_parent.appendChild(TUIC_setting_button_div_right)
    TUIC_setting_main_back.appendChild(TUIC_setting_button_div_parent)

    var TUIC_custom_css_textbox_title = document.createElement("h2")
    TUIC_custom_css_textbox_title.textContent = "カスタムCSS"
    TUIC_custom_css_textbox_title.classList.add("r-jwli3a", "r-1tl8opc", "r-qvutc0", "r-bcqeeo", "css-901oao", "TUIC_setting_text")
    TUIC_custom_css_textbox_title.style = "font-size:20px;"
    TUIC_setting_main_back.appendChild(TUIC_custom_css_textbox_title)
    TUIC_setting_main_back.appendChild(document.createElement("br"))

    let TUIC_custom_css_textbox_frame = document.createElement("form");
    let TUIC_custom_css_textbox = document.createElement("textarea");
    TUIC_custom_css_textbox.style = "width:calc(100% - 10px);"
    TUIC_custom_css_textbox.id = "css_textarea"
    TUIC_custom_css_textbox.value = localStorage.getItem('css')
    TUIC_custom_css_textbox_frame.appendChild(TUIC_custom_css_textbox)

    let TUIC_default_button = document.createElement("button");
    TUIC_default_button.id = "default_set"
    TUIC_default_button.textContent = "デフォルトに戻す"
    TUIC_default_button.classList.add("TUIC_setting_text", "TUIC_setting_button")

    let TUIC_save_button = document.createElement("button");
    TUIC_save_button.id = "save"
    TUIC_save_button.textContent = "保存"
    TUIC_save_button.classList.add("TUIC_setting_text", "TUIC_setting_button")

    TUIC_setting_main_back.classList.add("r-1f1sjgu", "r-1e081e0")
    TUIC_setting_main_back.id = "TUIC_setting"
    TUIC_setting_main_back.appendChild(TUIC_custom_css_textbox_frame)
    TUIC_setting_main_back.appendChild(TUIC_save_button)
    TUIC_setting_main_back.appendChild(TUIC_default_button)

    var TUIC_reload = document.createElement("h4")
    TUIC_reload.classList.add("r-jwli3a", "r-1tl8opc", "r-qvutc0", "r-bcqeeo", "css-901oao", "TUIC_setting_text")
    TUIC_reload.textContent = "※再読込します"
    TUIC_reload.style = "font-size:12px;"
    TUIC_setting_main_back.appendChild(TUIC_reload)


    TWITTER_setting_back.appendChild(TUIC_setting_main_back);


    document.getElementById('save').addEventListener('click',
        save_data);
    document.getElementById('default_set').addEventListener('click',
        default_set);


    document.getElementById('toleft').addEventListener('click', toleft);

    document.getElementById('toright').addEventListener('click', toright);

    document.getElementById('toup').addEventListener('click', toup);
    document.getElementById('todown').addEventListener('click', todown);
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
    for (var i = 0; i < TUIC_input_color_title.length; i++) {
        var color = hex2rgb(document.getElementById(TUIC_input_color_title[i] + "background").value)
        if (document.getElementById(TUIC_input_color_title[i] + "background-check").checked) {
            localStorage.setItem(TUIC_input_color_title[i] + "background", `rgba(${String(color[0])},${String(color[1])},${String(color[2])},0)`)
        } else {
            localStorage.setItem(TUIC_input_color_title[i] + "background", `rgba(${String(color[0])},${String(color[1])},${String(color[2])},1)`)
        }
        var color2 = hex2rgb(document.getElementById(TUIC_input_color_title[i] + "border").value)
        if (document.getElementById(TUIC_input_color_title[i] + "border-check").checked) {
            localStorage.setItem(TUIC_input_color_title[i] + "border", `rgba(${String(color2[0])},${String(color2[1])},${String(color2[2])},0)`)
        } else {
            localStorage.setItem(TUIC_input_color_title[i] + "border", `rgba(${String(color2[0])},${String(color2[1])},${String(color2[2])},1)`)
        }
        var color3 = hex2rgb(document.getElementById(TUIC_input_color_title[i] + "color").value)
        if (document.getElementById(TUIC_input_color_title[i] + "color-check").checked) {
            localStorage.setItem(TUIC_input_color_title[i] + "color", `rgba(${String(color3[0])},${String(color3[1])},${String(color3[2])},0)`)
        } else {
            localStorage.setItem(TUIC_input_color_title[i] + "color", `rgba(${String(color3[0])},${String(color3[1])},${String(color3[2])},1)`)
        }
    }

    for (var i = 0; i < TUIC_input_checkbox_title.length; i++) {
        if (document.getElementById(TUIC_input_checkbox_title[i]).checked) {
            localStorage.setItem(TUIC_input_checkbox_title[i], "1")
        } else {
            localStorage.setItem(TUIC_input_checkbox_title[i], "0")
        }
    }

    let visible_button_list = []
    for (let i = 0; i < document.querySelector("#TUIC_visible").childNodes.length; i++) {
        visible_button_list.push(document.querySelector("#TUIC_visible").childNodes[i].id)
    }
    localStorage.setItem("visible-button", JSON.stringify(visible_button_list))

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
    localStorage.removeItem('reply-button')
    localStorage.removeItem('retweet-button')
    localStorage.removeItem('like-button')
    localStorage.removeItem('downvote-button')
    localStorage.removeItem('share-button')
    localStorage.removeItem('tweet_analytics')
    localStorage.removeItem('visible-button')

    location.reload();
}

function toleft() {
    if (document.querySelector("#TUIC_invisible").selectedIndex != -1) {
        console.log(document.querySelector("#TUIC_invisible").selectedIndex)
        document.querySelector("#TUIC_visible").appendChild(document.querySelector("#TUIC_invisible").childNodes[document.querySelector("#TUIC_invisible").selectedIndex])
    }

}

function toright() {
    if (document.querySelector("#TUIC_visible").selectedIndex != -1) {
        document.querySelector("#TUIC_invisible").appendChild(document.querySelector("#TUIC_visible").childNodes[document.querySelector("#TUIC_visible").selectedIndex])
    }

}

function toup() {
    if (document.querySelector("#TUIC_visible").selectedIndex > 0) {
        document.querySelector("#TUIC_visible").insertBefore(document.querySelector("#TUIC_visible").childNodes[document.querySelector("#TUIC_visible").selectedIndex], document.querySelector("#TUIC_visible").childNodes[document.querySelector("#TUIC_visible").selectedIndex - 1])
    }

}

function todown() {
    if (document.querySelector("#TUIC_visible").selectedIndex < document.querySelector("#TUIC_visible").childNodes.length - 1) {
        document.querySelector("#TUIC_visible").insertBefore(document.querySelector("#TUIC_visible").childNodes[document.querySelector("#TUIC_visible").selectedIndex], document.querySelector("#TUIC_visible").childNodes[document.querySelector("#TUIC_visible").selectedIndex].nextSibling.nextSibling)
    }

}

function bookmark(e) {
    console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(`[aria-label="ツイートを共有"]`).click()
    document.querySelector(`[d="M23.074 3.35H20.65V.927c0-.414-.337-.75-.75-.75s-.75.336-.75.75V3.35h-2.426c-.414 0-.75.337-.75.75s.336.75.75.75h2.425v2.426c0 .414.335.75.75.75s.75-.336.75-.75V4.85h2.424c.414 0 .75-.335.75-.75s-.336-.75-.75-.75zM19.9 10.744c-.415 0-.75.336-.75.75v9.782l-6.71-4.883c-.13-.095-.285-.143-.44-.143s-.31.048-.44.144l-6.71 4.883V5.6c0-.412.337-.75.75-.75h6.902c.414 0 .75-.335.75-.75s-.336-.75-.75-.75h-6.9c-1.242 0-2.25 1.01-2.25 2.25v17.15c0 .282.157.54.41.668.25.13.553.104.78-.062L12 17.928l7.458 5.43c.13.094.286.143.44.143.117 0 .234-.026.34-.08.252-.13.41-.387.41-.67V11.495c0-.414-.335-.75-.75-.75z"]:not(.TUIC_BOOKMARK)`).parentNode.parentNode.parentNode.parentNode.click()
}

function bookmark_delete(e) {
    console.log(e.target.parentElement.parentElement)
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(`[aria-label="ツイートを共有"]`).click()
    document.querySelector(`[d="M19.9 10.744c-.415 0-.75.336-.75.75v9.782l-6.71-4.883c-.13-.095-.285-.143-.44-.143s-.31.048-.44.144l-6.71 4.883V5.6c0-.412.337-.75.75-.75h6.902c.414 0 .75-.335.75-.75s-.336-.75-.75-.75h-6.9c-1.242 0-2.25 1.01-2.25 2.25v17.15c0 .282.157.54.41.668.25.13.553.104.78-.062L12 17.928l7.458 5.43c.13.094.286.143.44.143.117 0 .234-.026.34-.08.252-.13.41-.387.41-.67V11.495c0-.414-.335-.75-.75-.75z"]:not(.TUIC_BOOKMARK)`).parentNode.parentNode.parentNode.parentNode.click()
}