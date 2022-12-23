var urlchange = ""

let TUICParser = new DOMParser();

let TUICIvisibleClass = "TUIC_DISPNONE"
let TUICDidArticle = "TUIC_CHECKED_ARTICLE"
let TUICScrollBottom = "TUIC_SCROLL_BOTTOM"

let TUICColorTypeList = ["background","border","color"]
let TUIC_input_color_title = ["unsent-tweet", "not-following", "following", "un-following", "profile", "profile-save", "birthday"]
let input_name = ["未送信ツイートの編集ボタン", "フォローしていない人のフォローボタン", "フォローしている人のフォローボタン", "フォロー解除ボタン", "プロフィール編集ボタン", "プロフィールの保存ボタン", "最終決定ボタン"]
let TUIC_input_checkbox_title = ["reply-button", "retweet-button", "like-button", "downvote-button", "share-button", "tweet_analytics", "boolkmark", "url-copy"]
let TUIC_input_checkbox_name = { "reply-button": "返信", "retweet-button": "リツイート", "like-button": "いいね", "downvote-button": "自分向きではない", "share-button": "共有", "tweet_analytics": "ツイートアナリティクスを表示", "boolkmark": "ブックマークに保存", "url-copy": "ツイートのリンクをコピー" }
let TUIC_input_checkbox_selector = {
    "reply-button": "[data-testid$=\"reply\"]", "retweet-button": "[data-testid$=\"retweet\"]", "like-button": "[data-testid$=\"like\"]", "downvote-button": "[data-testid$=\"downvote\"]",
    "boolkmark_tweetdeck": "[aria-label$=\"ブックマーク\"],[aria-label$=\"Amlíne: Leabharmharcanna\"],[aria-label$=\"الخطّ الزمنيّ: العلامات المرجعية\"],[aria-label$=\"الخطّ الزمنيّ: العلامات المرجعية\"],[aria-label$=\"Timeline: Bookmarks\"],[aria-label$=\"Cronologia: Segnalibri\"],[aria-label$=\"Timeline: Markah\"],[aria-label$=\"Стрічка: Закладки\"],[aria-label$=\"ٹائم لائن: بُک مارکس\"],[aria-label$=\"Tijdlijn: Bladwijzers\"],[aria-label$=\"Cronologia: Preferits\"],[aria-label$=\"Cronoloxía: Marcadores\"],[aria-label$=\"ಕಾಲರೇಖೆ: ಬುಕ್‌ಮಾರ್ಕ್‌ಗಳು\"],[aria-label$=\"Χρονολόγιο: Σελιδοδείκτες\"],[aria-label$=\"સમય અવધિ: બુકમાર્ક્સ\"],[aria-label$=\"Vremenska crta: Knjižne oznake\"],[aria-label$=\"Tidslinje: Bokmärken\"],[aria-label$=\"Cronología: Guardados\"],[aria-label$=\"Domovská časová os\"],[aria-label$=\"Временска трака: Обележивачи\"],[aria-label$=\"ลำดับเหตุการณ์: บุ๊คมาร์ก\"],[aria-label$=\"முகப்புக் காலவரிசை\"],[aria-label$=\"Časová osa: Záložky\"],[aria-label$=\"Tidslinje: Bogmærker\"],[aria-label$=\"Timeline: Lesezeichen\"],[aria-label$=\"Anasayfa zaman akışı\"],[aria-label$=\"Anasayfa zaman akışı\"],[aria-label$=\"Tidslinje: Bokmerker\"],[aria-label$=\"Denbora lerroa: Laster-markak\"],[aria-label$=\"Kezdőlap idővonala\"],[aria-label$=\"होम टाइमलाइन\"],[aria-label$=\"Timeline: Mga Bookmark\"],[aria-label$=\"Etusivun aikajana\"],[aria-label$=\"Fil d'actualités : Signets\"],[aria-label$=\"Хроника: Отметки\"],[aria-label$=\"Dòng thời gian: Dấu trang\"],[aria-label$=\"ציר הזמן של דף הבית\"],[aria-label$=\"خط زمان: نشانک‌ها\"],[aria-label$=\"সময়রেখা: বুকমার্কগুলি\"],[aria-label$=\"Oś czasu: Zakładki\"],[aria-label$=\"Timeline: Itens salvos\"],[aria-label$=\"टाइमलाइन: बुकमार्क्स\"],[aria-label$=\"Garis masa: Bookmark\"],[aria-label$=\"Cronologia principală\"],[aria-label$=\"Лента: Закладки\"],[aria-label$=\"时间线：书签\"],[aria-label$=\"時間軸：書籤\"],[aria-label$=\"Timeline: Bookmarks\"],[aria-label$=\"타임라인: 북마크\"]",
    "share-button": "[aria-label=\"ツイートを共有\"],[aria-label=\"Roinn an Tweet\"],[aria-label=\"مشاركة التغريدة\"],[aria-label=\"مشاركة التغريدة\"],[aria-label=\"Share Tweet\"],[aria-label=\"Condividi Tweet\"],[aria-label=\"Sebarkan Tweet\"],[aria-label=\"Поділитися твітом\"],[aria-label=\"ٹویٹ شیئر کریں\"],[aria-label=\"Tweet delen\"],[aria-label=\"Comparteix el tuit\"],[aria-label=\"Compartir chío\"],[aria-label=\"ಟ್ವೀಟ್ ಹಂಚಿಕೊಳ್ಳಿ\"],[aria-label=\"Κοινοποίηση Tweet\"],[aria-label=\"ટ્વીટ શેર કરો\"],[aria-label=\"Podijelite Tweet\"],[aria-label=\"Dela tweeten\"],[aria-label=\"Compartir Tweet\"],[aria-label=\"Zdieľať Tweet\"],[aria-label=\"Подели твит\"],[aria-label=\"แบ่งปันทวีต\"],[aria-label=\"கீச்சைப் பகிர்\"],[aria-label=\"Sdílet Tweet\"],[aria-label=\"Del tweetet\"],[aria-label=\"Tweet teilen\"],[aria-label=\"Tweet paylaş\"],[aria-label=\"Del tweeten\"],[aria-label=\"Partekatu txioa\"],[aria-label=\"Tweet megosztása\"],[aria-label=\"ट्वीट शेयर करें\"],[aria-label=\"Ibahagi ang Tweet\"],[aria-label=\"Jaa twiitti\"],[aria-label=\"Partager le Tweet\"],[aria-label=\"Споделяне на туита\"],[aria-label=\"Chia sẻ Tweet\"],[aria-label=\"שתף את הציוץ\"],[aria-label=\"هم‌رسانی توییت\"],[aria-label=\"টুইট শেয়ার করুন\"],[aria-label=\"Udostępnij Tweeta\"],[aria-label=\"Compartilhar Tweet\"],[aria-label=\"ट्विट शेअर करा\"],[aria-label=\"Kongsi Tweet\"],[aria-label=\"Distribuie Tweetul\"],[aria-label=\"Поделиться твитом\"],[aria-label=\"分享推文\"],[aria-label=\"分享推文\"],[aria-label=\"트윗 공유하기\"]",
    "tweet_analytics": "[aria-label*=\"ツイートアナリティクスを表示\"],[aria-label*=\"Breathnaigh ar anailísíocht an Tweet\"],[aria-label*=\"عرض تحليلات Twitter\"],[aria-label*=\"عرض تحليلات Twitter\"],[aria-label*=\"View Tweet analytics\"],[aria-label*=\"Visualizza statistiche Tweet\"],[aria-label*=\"Lihat analitik Tweet\"],[aria-label*=\"Переглянути аналітику твіта\"],[aria-label*=\"View Tweet analytics\"],[aria-label*=\"Tweet-analyses bekijken\"],[aria-label*=\"Mostra les analítiques del tuit\"],[aria-label*=\"Ver análises do chío\"],[aria-label*=\"ಟ್ವೀಟ್ ಅನಾಲಿಟಿಕ್ಸ್ ಅನ್ನು ನೋಡಿ\"],[aria-label*=\"Προβολή στοιχείων ανάλυσης Tweet\"],[aria-label*=\"ટ્વીટ વિશ્લેષણ જુઓ\"],[aria-label*=\"Prikaži analitičke podatke o tweetovima\"],[aria-label*=\"Visa Tweet-statistik\"],[aria-label*=\"Ver estadísticas del Tweet\"],[aria-label*=\"Zobraziť štatistiku Tweetu\"],[aria-label*=\"Погледај аналитику твита\"],[aria-label*=\"ดูการวิเคราะห์ทวีต\"],[aria-label*=\"கீச்சுப் பகுப்பாய்வைக் காட்டு\"],[aria-label*=\"Zobrazit analýzu tweetů\"],[aria-label*=\"Vis Tweet-statistik\"],[aria-label*=\"Tweet-Statistiken anzeigen\"],[aria-label*=\"Tweet istatistiklerini görüntüle\"],[aria-label*=\"Se tweetstatistikk\"],[aria-label*=\"Ikusi txioen analisiak\"],[aria-label*=\"Tweet-elemzések megtekintése\"],[aria-label*=\"ट्वीट विश्लेषण देखें\"],[aria-label*=\"Tingnan ang analytics ng Tweet\"],[aria-label*=\"Näytä twiitin tilastot\"],[aria-label*=\"Voir les statistiques des Tweets\"],[aria-label*=\"Преглед на статистиката за туита\"],[aria-label*=\"Xem phân tích Tweet\"],[aria-label*=\"הצג את ניתוח הציוצים\"],[aria-label*=\"مشاهده اطلاعات آماری توییت\"],[aria-label*=\"টুইটের বিশ্লেষণ দেখুন\"],[aria-label*=\"Zobacz statystyki dotyczące Tweeta\"],[aria-label*=\"Ver estatísticas do Tweet\"],[aria-label*=\"ट्विटची विश्लेषणे पहा\"],[aria-label*=\"Lihat analitis Tweet\"],[aria-label*=\"Vezi analiza Tweet\"],[aria-label*=\"Смотреть аналитику твита\"],[aria-label*=\"查看推文分析\"],[aria-label*=\"查看推文分析\"],[aria-label*=\"트윗 애널리틱스 보기\"]"
}
let TUIC_input_checkbox_selector_three = ["share-button"]
var color = ["rgba(29,161,242,1)", "rgba(29,161,242,1)", "rgba(255,255,255,1)",
    "rgba(255,255,255,0)", "rgba(29,161,242,1)", "rgba(29,161,242,1)",
    "rgba(29,161,242,1)", "rgba(29,161,242,1)", "rgba(255,255,255,1)",
    "rgba(255,0,0,1)", "rgba(255,0,0,1)", "rgba(255,255,255,1)",
    "rgba(255,255,255,0)", "rgba(29,161,242,1)", "rgba(29,161,242,1)",
    "rgba(29,161,242,1)", "rgba(29,161,242,1)", "rgba(255,255,255,1)",
    "rgba(255,0,0,1)", "rgba(255,0,0,1)", "rgba(255,255,255,1)",]
let checkbox = ["osusume-user-timeline"]
let invisibleCheckbox = ["osusume-user-timeline"]
let invisibleCheckboxLabel = {"osusume-user-timeline":"タイムライン上のおすすめユーザー"}

const defaultPref = `{"buttonColor":{},"visibleButtons":["reply-button", "retweet-button", "like-button", "downvote-button", "share-button", "tweet_analytics", "boolkmark", "url-copy"],"invisibleItems":{"osusume-user-timeline":false},"otherBoolSetting":{"bottomScroll":false},"CSS":""}`
let TUICPref = JSON.parse(localStorage.getItem("TUIC") ?? defaultPref)
// 対象とするノードを取得
const target = document.getElementsByTagName("body").item(0);

// オブザーバインスタンスを作成
const observer = new MutationObserver((mutations) => {
    observer.disconnect();
    let timeout = window.setTimeout(function () { observer.observe(target, config) }, 10000)
    let articles = document.querySelectorAll(`article:not([TUIC_ARTICLE="${TUICDidArticle}"])`)
    if (articles.length != 0) {
        articles.forEach(function (elem) {
            if (elem.querySelector("[data-testid$=\"reply\"]") != null && elem.querySelector("[data-testid$=\"like\"]") != null) {
                let bar_base = elem.querySelector("[data-testid$=\"reply\"]")
                while (bar_base.querySelector("[data-testid$=\"like\"]") == null) {
                    bar_base = bar_base.parentElement
                }
                if(TUICPref.otherBoolSetting.bottomScroll) bar_base.parentElement.classList.add(TUICScrollBottom)
                let bar_item = {}
                for (const elem_item of bar_base.childNodes) {
                    for (const sel in TUIC_input_checkbox_selector) {
                        if (elem_item.querySelector(TUIC_input_checkbox_selector[sel]) != null) {
                            bar_item[sel] = elem_item
                            break
                        }
                    }
                }
                let needEmpty = bar_item["reply-button"].querySelector(".css-1dbjc4n.r-xoduu5.r-1udh08x") != null
                let lastButton
                for (let i of TUICPref.visibleButtons) {
                    let div = -1
                    if (i in bar_item) {
                        div = bar_item[i]
                    } else if (i == "boolkmark") {
                        div =TUICParser.parseFromString(`
                        <div class="css-1dbjc4n" style="display: inline-grid;justify-content: inherit;transform: rotate(0deg) scale(1) translate3d(0px, 0px, 0px);-moz-box-pack: inherit;">
                            <div class="css-1dbjc4n r-18u37iz r-1h0z5md">
                              <div
                                aria-label="ブックマークに保存"
                                role="button"
                                tabindex="0"
                                class="css-18t94o4 css-1dbjc4n r-1777fci r-bt1l66 r-1ny4l3l r-bztko3 r-lrvibr"
                              >
                                <div
                                  dir="ltr"
                                  class="css-901oao r-1awozwy r-115tad6 r-6koalj r-37j5jr r-a023e6 r-16dba41 r-1h0z5md r-rjixqe r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0 TUIC_ButtonHover2"
                                >
                                  <div class="css-1dbjc4n r-xoduu5 TUIC_ButtonHover">
                                    <div
                                      class="css-1dbjc4n r-1niwhzg r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-1ny4l3l r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg"
                                    ></div>
                                    <svg
                                      viewBox="0 0 24 24"
                                      aria-hidden="true"
                                      class="r-115tad6 r-4qtqp9 r-yyyyoo r-1q142lx r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr ${document.body.style.backgroundColor == ("rgb(255, 255, 255)") ? "r-14j79pv" : "r-1bwzh9t"}"
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
                        </div>
                          `,"text/html").querySelector(".css-1dbjc4n")
                        div.childNodes[1].addEventListener("click", bookmark)
                        bar_base.appendChild(div)


                    } else if (i == "url-copy") {
                        div = TUICParser.parseFromString(`
                        <div class="css-1dbjc4n" style="display: inline-grid;justify-content: inherit;transform: rotate(0deg) scale(1) translate3d(0px, 0px, 0px);-moz-box-pack: inherit;">
                        <div class="css-1dbjc4n r-18u37iz r-1h0z5md">
    <div
      aria-label="ツイートのリンクをコピー"
      role="button"
      tabindex="0"
      class="css-18t94o4 css-1dbjc4n r-1777fci r-bt1l66 r-1ny4l3l r-bztko3 r-lrvibr"
    >
      <div
        dir="ltr"
        class="css-901oao r-1awozwy r-115tad6 r-6koalj r-37j5jr r-a023e6 r-16dba41 r-1h0z5md r-rjixqe r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0 TUIC_ButtonHover2"
      >
        <div class="css-1dbjc4n r-xoduu5 TUIC_ButtonHover">
          <div
            class="css-1dbjc4n r-1niwhzg r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-1ny4l3l r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg"
          ></div>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="r-115tad6 r-4qtqp9 r-yyyyoo r-1q142lx r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr ${document.body.style.backgroundColor == ("rgb(255, 255, 255)") ? "r-14j79pv" : "r-1bwzh9t"}">
            <g>
                <path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z" class="TUIC_URL"></path><path d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z">

                </path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
  </div>
                      `,"text/html").querySelector(".css-1dbjc4n")
                        div.childNodes[1].addEventListener("click", url_copy)
                        bar_base.appendChild(div)


                    }
                    if (div != -1) {
                        if (needEmpty && div.querySelector(".css-1dbjc4n.r-xoduu5.r-1udh08x") == null) div.querySelector("svg").parentElement.parentElement.insertAdjacentHTML("beforeend", `<div class="css-1dbjc4n r-xoduu5 r-1udh08x"><span data-testid="app-text-transition-container" style="transition-property: transform; transition-duration: 0.3s; transform: translate3d(0px, 0px, 0px);"><span class="css-901oao css-16my406 r-1tl8opc r-n6v787 r-1cwl3u0 r-1k6nrdp r-1e081e0 r-qvutc0"></span></span></div>`)
                        lastButton = div
                        bar_base.appendChild(div)
                    }

                }
                if (lastButton != null && lastButton.querySelector(".css-1dbjc4n.r-xoduu5.r-1udh08x") != null) {
                    lastButton.querySelector(".css-1dbjc4n.r-xoduu5.r-1udh08x").remove()
                }

                for (var i = 0; i < TUIC_input_checkbox_title.length; i++) {
                    if (!TUICPref.visibleButtons.includes(TUIC_input_checkbox_title[i]) && TUIC_input_checkbox_title[i] in bar_item) {
                        bar_item[TUIC_input_checkbox_title[i]].classList.add(TUICIvisibleClass);
                    }
                }


            }
            elem.setAttribute("TUIC_ARTICLE", TUICDidArticle)
        })
    }
    if (TUICPref.invisibleItems["osusume-user-timeline"] && location.search.indexOf("f=user") == -1 && location.href != "https://twitter.com/settings/device_follow") {
        let cells = document.querySelectorAll(`div[data-testid="cellInnerDiv"]:not([TUIC_ARTICLE="${TUICDidArticle}"]):not([aria-labelledby="modal-header"] > div > div > div > section > div > div > div):not([aria-labelledby="modal-header"] > div > div > div > div > div > div > div):not([data-testid="primaryColumn"] > div > section > div > div > div)`)
        if (cells.length != 0) {
            cells.forEach(function (elem) {
                if (elem.querySelector(`[data-testid="UserCell"]`) != null && elem.getAttribute("TUIC_ARTICLE") != TUICDidArticle) {
                    elem.classList.add(TUICIvisibleClass)
                    if (elem.previousElementSibling != null && elem.previousElementSibling.querySelector(`[data-testid="UserCell"]`) == null) {
                        if (elem.previousElementSibling != null) elem.previousElementSibling.classList.add(TUICIvisibleClass)
                        if (elem.previousElementSibling.previousElementSibling != null) elem.previousElementSibling.previousElementSibling.classList.add(TUICIvisibleClass)
                    }
                    let cellElement = elem.nextElementSibling
                    while (cellElement != null && cellElement.querySelector(`[href^="/search?q="]`) == null && cellElement.querySelector(`[href^="/i/connect_people?user_id="]`) == null) {
                        cellElement.classList.add(TUICIvisibleClass)
                        cellElement = cellElement.nextElementSibling
                    }
                    if (cellElement != null) cellElement.classList.add(TUICIvisibleClass)
                }
            })
        }
    }
    if (document.querySelector('style.twitter_ui_customizer') == null) {

        run_first()
    }
    if (window.location.pathname == "/tuic/safemode") {


    } else if (document.querySelector('#unsent-tweet-background') == null && document.querySelector('section[aria-labelledby="detail-header"] > .r-1h0z5md > div[dir]') != null && window.location.pathname == "/settings/display") {
        display_run()
    }
    window.clearTimeout(timeout)
    observer.observe(target, config);
});

// オブザーバの設定
const config = {
    childList: true,
    subtree: true
};

// 対象ノードとオブザーバの設定を渡す
if (document.getElementById("react-root") != null) {
    if((localStorage.getItem('unsent-tweet-background') ?? "unknown") != "unknown"){

        TUICPref.CSS = localStorage.getItem('CSS');
        TUICPref.invisibleItems["osusume-user-timeline"] = (localStorage.getItem('osusume-user-timeline') ?? "0") == "1"
        TUICPref.visibleButtons = JSON.parse(localStorage.getItem('visible-button'))
        for(let i of TUIC_input_color_title){
            let a = localStorage.getItem(`${i}-background`) ?? "unknown"
            if(a != "unknown"){
                TUICPref.buttonColor[i] = {}
                TUICPref.buttonColor[i].background = a
                TUICPref.buttonColor[i].border = localStorage.getItem(`${i}-border`)
                TUICPref.buttonColor[i].color = localStorage.getItem(`${i}-color`)
            }
        }

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
        localStorage.removeItem('osusume-user-timeline')
        localStorage.removeItem('CSS')

        localStorage.setItem("TUIC",JSON.stringify(TUICPref))
    }
    if(TUICPref.otherBoolSetting == undefined) TUICPref.otherBoolSetting = {}
    observer.observe(target, config);

    const bodyObserver = new MutationObserver(run_first)
    bodyObserver.observe(document.getElementsByTagName("body").item(0), { childList: false, subtree: false, attributes: true })
    run_first()
}

function run_first() {

    if (document.querySelector("#twitter_ui_customizer_css") != null) document.querySelector("#twitter_ui_customizer_css").remove()
    if (document.querySelector("#twitter_ui_customizer") != null) document.querySelector("#twitter_ui_customizer").remove()

    // 追加する要素を用意します。
    let TUIC_css = document.createElement("style");
    TUIC_css.id = "twitter_ui_customizer"
    let TWITTER_head = document.getElementsByTagName("head").item(0)
    // 基準となる要素を指定します。
    TWITTER_head.appendChild(TUIC_css);
    TUICCss()
    if (window.location.pathname != "/tuic/safemode") {
        let TUIC_custom_css = document.createElement("style");
        TUIC_custom_css.id = "twitter_ui_customizer_css"
        TWITTER_head.appendChild(TUIC_custom_css);
        TUICCustomCSS()



    } else {
        if (document.querySelector("#safemode") == null) {
            document.querySelector("#react-root").style = "display:none !important;"
            let safemode = document.createElement("div")
            safemode.id = "safemode"
            safemode.style = "height:100%;width:100%"
            document.querySelector("body").appendChild(safemode)
            if (document.querySelector(".twitter_ui_customizer_css") != null) {
                document.querySelector(".twitter_ui_customizer_css").remove()
            }

            display_setting('#safemode')
        }
    }

}



function display_setting(rootElement = "") {
    let TWITTER_setting_back = document.querySelector(rootElement);

    let TUICColors = ""
    for (var i = 0; i < TUIC_input_color_title.length; i++) {
        let TUIC_color = (TUICPref.buttonColor[TUIC_input_color_title[i]]?.background ?? color[i * 3]).replace("rgba(", "").replace(")", "").split(",")
        let TUICColor1 = rgb2hex([Number(TUIC_color[0]), Number(TUIC_color[1]), Number(TUIC_color[2])])
        let TUIC_color2 = (TUICPref.buttonColor[TUIC_input_color_title[i]]?.border ?? color[i * 3 + 1]).replace("rgba(", "").replace(")", "").split(",")
        let TUICColor2 = rgb2hex([Number(TUIC_color2[0]), Number(TUIC_color2[1]), Number(TUIC_color2[2])])
        let TUIC_color3 = (TUICPref.buttonColor[TUIC_input_color_title[i]]?.color ?? color[i * 3 + 2]).replace("rgba(", "").replace(")", "").split(",")
        let TUICColor3 = rgb2hex([Number(TUIC_color3[0]), Number(TUIC_color3[1]), Number(TUIC_color3[2])])
        TUICColors += `
<h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size:20px;">${input_name[i]}</h2>
<br>
<h4 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size:15px;">背景色:</h4>
<input type="color" id="${TUIC_input_color_title[i] + "-background"}" TUICColor="${TUIC_input_color_title[i]}" TUICColorType="background" value="${TUICColor1}" class="TUICButtonColor"></input>
<input type="checkbox" id="${TUIC_input_color_title[i] + "-background-check"}" ${TUIC_color[3] == "0" ? "checked" : ""} TUICColor="${TUIC_input_color_title[i]}" TUICColorType="background" class="TUICButtonColorCheck">
<label for="${TUIC_input_color_title[i] + "-background-check"}" class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size:15px;">透明色にする</label>
<button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_default TUICDfaultColor" TUICColor="${TUIC_input_color_title[i]}" TUICColorType="background">デフォルトに戻す</button>
<br>

<h4 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size:15px;">枠色:</h4>
<input type="color" id="${TUIC_input_color_title[i] + "-border"}" value="${TUICColor2}" TUICColor="${TUIC_input_color_title[i]}" TUICColorType="border" class="TUICButtonColor"></input>
<input type="checkbox" id="${TUIC_input_color_title[i] + "-border-check"}" ${TUIC_color2[3] == "0" ? "checked" : ""} TUICColor="${TUIC_input_color_title[i]}" TUICColorType="border" class="TUICButtonColorCheck">
<label for="${TUIC_input_color_title[i] + "-border-check"}" class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size:15px;">透明色にする</label>
<button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_default TUICDfaultColor" TUICColor="${TUIC_input_color_title[i]}" TUICColorType="border">デフォルトに戻す</button>
<br>

<h4 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size:15px;">文字色:</h4>
<input type="color" id="${TUIC_input_color_title[i] + "-color"}" value="${TUICColor3}" TUICColor="${TUIC_input_color_title[i]}" TUICColorType="color" class="TUICButtonColor"></input>
<input type="checkbox" id="${TUIC_input_color_title[i] + "-color-check"}" ${TUIC_color3[3] == "0" ? "checked" : ""} TUICColor="${TUIC_input_color_title[i]}" TUICColorType="color" class="TUICButtonColorCheck">
<label for="${TUIC_input_color_title[i] + "-color-check"}" class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size:15px;">透明色にする</label>
<button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_default" TUICDfaultColor TUICColor="${TUIC_input_color_title[i]}" TUICColorType="color">デフォルトに戻す</button>
<br>
<br>
`
    }


    let TUICInvisibleCheckBox = ""
    for (let i of invisibleCheckbox) {
        TUICInvisibleCheckBox += `
<div>
    <input id=${i} ${TUICPref.invisibleItems[i] ? "checked" : ""} type="checkbox" class="TUICInvisibleItems"></input>
    <label class="TUIC_setting_text" for="${i}">${invisibleCheckboxLabel[i]}</label>
</div>
`
    }
let TUICPrefHTML = TUICParser.parseFromString(`
<div id="TUIC_setting" class="css-1dbjc4n r-1wtj0ep r-ymttw5 r-1f1sjgu r-1e081e0">
    <div style="-webkit-line-clamp: 3;" class="css-901oao css-cens5h r-jwli3a r-1tl8opc r-adyw6z r-1vr29t4 r-135wba7 r-bcqeeo r-qvutc0">
        <h2 aria-level="2" role="heading" class="css-4rbku5 css-1dbjc4n r-18u37iz">
            <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0 TUIC_setting_text">Twitter UI Customizer</span>
            </h2>
    </div>

    <div>
        <br>
${TUICColors}
        <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size:20px;">ツイート下ボタンの並び替え</h2>
        <br>

        <div style="display:flex">
            <div>
                <h2 style="font-size:15px;" class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text">表示</h2><br>
                <select id="TUIC_visible" class="TUIC_none_scroll" size="${TUIC_input_checkbox_title.length}">
${settingVisibleButton()}
                </select>
            </div>
            <div style="text-align: center;">
                <br>
                <br>
                <button id="toleft" style="width:8em" class="TUIC_setting_text TUIC_setting_button">表示する</button><br>
                <button id="toup" style="width:8em" class="TUIC_setting_text TUIC_setting_button">上へ</button><br>
                <button id="todown" style="width:8em" class="TUIC_setting_text TUIC_setting_button">下へ</button><br>
                <button id="toright" style="width:8em" class="TUIC_setting_text TUIC_setting_button">非表示にする</button><br><br>
                <button id="todefault" style="width:8em" class="TUIC_setting_text TUIC_setting_button">初期化</button><br>
            </div>
            <div>
                <h2 style="font-size:15px;" class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text">非表示</h2><br>
                <select id="TUIC_invisible" class="TUIC_none_scroll" size="${TUIC_input_checkbox_title.length}">
${settingInvisibleButton()}
                </select>
            </div>
        </div>
        <br>
        <div>
        <input id="bottomScroll" ${TUICPref.otherBoolSetting["bottomScroll"] ? "checked" : ""} type="checkbox" class="otherBoolSetting"></input>
            <label class="TUIC_setting_text" for="bottomScroll">ツイート下ボタンにスクロールバーを表示</label>
        </div>
        <br>
        <br>

        <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size:20px;">非表示設定</h2><br>
${TUICInvisibleCheckBox}

        <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size:20px;">カスタムCSS</h2><br>
        <form>
            <textarea id="css_textarea"></textarea>
        </form>
        <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" id="save">保存</button>
        <br><br>
    </div>

    <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" id="default_set">全てデフォルトに戻す</button>
</div>

`,"text/html").querySelector("#TUIC_setting")

    TWITTER_setting_back.appendChild(TUICPrefHTML);
    for(let elem of document.querySelectorAll(".TUICButtonColor")){
        elem.addEventListener('change',
        ButtonColor);
    }
    for(let elem of document.querySelectorAll(".TUICButtonColorCheck")){
        elem.addEventListener('change',
        ButtonColorCheck);
    }
    for(let elem of document.querySelectorAll(".TUICDfaultColor")){
        elem.addEventListener('click',
        ButtonColorDefault);
    }
    for(let elem of document.querySelectorAll(".TUICInvisibleItems")){
        elem.addEventListener('click',
        settingInvisibleItems);
    }
    for(let elem of document.querySelectorAll(".otherBoolSetting")){
        elem.addEventListener('click',
        settingOtherBoolSetting);
    }
    for(let elem of document.querySelector("#TUIC_visible").childNodes){
        if(elem.tagName != "OPTION") elem.remove()
    }
    for(let elem of document.querySelector("#TUIC_invisible").childNodes){
        if(elem.tagName != "OPTION") elem.remove()
    }

    document.querySelector("#css_textarea").value =  TUICPref['CSS']
    document.getElementById('save').addEventListener('click',
        save_data);
    document.getElementById('default_set').addEventListener('click',
        default_set);

        document.getElementById('todefault').addEventListener('click', todefault);
    document.getElementById('toleft').addEventListener('click', toleft);

    document.getElementById('toright').addEventListener('click', toright);

    document.getElementById('toup').addEventListener('click', toup);
    document.getElementById('todown').addEventListener('click', todown);
}

function settingVisibleButton(){
    let TUICVisibleButtons = ""
    for (let i of TUICPref.visibleButtons) {
        TUICVisibleButtons += `<option value="${i}" id="${i}">${TUIC_input_checkbox_name[i]}</option>`
    }
    return TUICVisibleButtons
}
function settingInvisibleButton(){
    let TUICInvisibleButtons = ""
    for (let i of TUIC_input_checkbox_title) {
        if (!TUICPref.visibleButtons.includes(i)) TUICInvisibleButtons += `<option value="${i}" id="${i}">${TUIC_input_checkbox_name[i]}</option>`
    }
    return TUICInvisibleButtons
}

function display_run() {
    if (document.querySelector('section[aria-labelledby="detail-header"] > .r-1h0z5md > div[dir]') == null) {
        window.setTimeout(display_run, 10000)
    } else {
        display_setting('section[aria-labelledby="detail-header"] > .r-1h0z5md')

    }



}

function ButtonColor(event){
    let colorValue = hex2rgb(event.target.value)
    if(TUICPref.buttonColor[event.target.getAttribute("TUICColor")] ?? "unknown" != "unknown") TUICPref[event.target.getAttribute("TUICColor")] = {}
    TUICPref.buttonColor[event.target.getAttribute("TUICColor")][event.target.getAttribute("TUICColorType")] = `rgba(${colorValue[0]},${colorValue[1]},${colorValue[2]},${document.getElementById(`${event.target.getAttribute("TUICColor")}-${event.target.getAttribute("TUICColorType")}-check`).checked ? 0 : 1})`
    localStorage.setItem("TUIC",JSON.stringify(TUICPref))
    TUICCustomCSS()
}

function ButtonColorCheck(event){
    let colorValue = hex2rgb(document.getElementById(`${event.target.getAttribute("TUICColor")}-${event.target.getAttribute("TUICColorType")}`).value)
    if(TUICPref.buttonColor[event.target.getAttribute("TUICColor")] ?? "unknown" != "unknown") TUICPref[event.target.getAttribute("TUICColor")] = {}
    TUICPref.buttonColor[event.target.getAttribute("TUICColor")][event.target.getAttribute("TUICColorType")] = `rgba(${colorValue[0]},${colorValue[1]},${colorValue[2]},${event.target.checked ? 0 : 1})`
    localStorage.setItem("TUIC",JSON.stringify(TUICPref))
    TUICCustomCSS()
}

function ButtonColorDefault(event){

let colorIndex = 3 * TUIC_input_color_title.indexOf(event.target.getAttribute("TUICColor")) + TUICColorTypeList.indexOf(event.target.getAttribute("TUICColorType"))
console.log(colorIndex)
let TUIC_color = (color[colorIndex]).replace("rgba(", "").replace(")", "").split(",")
let TUICColor1 = rgb2hex([Number(TUIC_color[0]), Number(TUIC_color[1]), Number(TUIC_color[2])])
document.getElementById(`${event.target.getAttribute("TUICColor")}-${event.target.getAttribute("TUICColorType")}`).value = TUICColor1

if(document.getElementById(`${event.target.getAttribute("TUICColor")}-${event.target.getAttribute("TUICColorType")}-check`).checked  != TUIC_color[3] == 0) document.getElementById(`${event.target.getAttribute("TUICColor")}-${event.target.getAttribute("TUICColorType")}-check`).checked = TUIC_color[3] == 0
    TUICPref.buttonColor[event.target.getAttribute("TUICColor")][event.target.getAttribute("TUICColorType")] = color[colorIndex]
    localStorage.setItem("TUIC",JSON.stringify(TUICPref))
    TUICCustomCSS()
}

function settingInvisibleItems(event){
TUICPref.invisibleItems[event.target.id] = event.target.checked
localStorage.setItem("TUIC",JSON.stringify(TUICPref))
TUICIvisibleClass += "_"
TUICDidArticle += "_"
TUICCss()
}

function settingOtherBoolSetting(event){
    TUICPref.otherBoolSetting[event.target.id] = event.target.checked
    localStorage.setItem("TUIC",JSON.stringify(TUICPref))
    TUICIvisibleClass += "_"
    TUICDidArticle += "_"
    TUICCss()
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
    TUICPref.CSS = document.querySelector("#css_textarea").value
    localStorage.setItem("TUIC",JSON.stringify(TUICPref))
    TUICCustomCSS()
    /*
    for (let i = 0; i < checkbox.length; i++) {
        localStorage.setItem(checkbox[i], document.getElementById(checkbox[i]).checked ? "1" : "0")
    }*/

}
function default_set() {
    localStorage.setItem("TUIC",defaultPref)
    TUICPref = JSON.parse(defaultPref)

    if (window.location.pathname == "/tuic/safemode") {
        window.location.href = `${window.location.protocol}//${window.location.hostname}`
    } else {
document.querySelector("#TUIC_setting").remove()
    }
}

function toleft() {
    if (document.querySelector("#TUIC_invisible").selectedIndex != -1) {
        document.querySelector("#TUIC_visible").appendChild(document.querySelector("#TUIC_invisible").childNodes[document.querySelector("#TUIC_invisible").selectedIndex])
        visibleButtonFunc()
    }

}

function toright() {
    if (document.querySelector("#TUIC_visible").selectedIndex != -1) {
        document.querySelector("#TUIC_invisible").appendChild(document.querySelector("#TUIC_visible").childNodes[document.querySelector("#TUIC_visible").selectedIndex])
        visibleButtonFunc()
    }

}

function toup() {
    if (document.querySelector("#TUIC_visible").selectedIndex > 0) {
        document.querySelector("#TUIC_visible").insertBefore(document.querySelector("#TUIC_visible").childNodes[document.querySelector("#TUIC_visible").selectedIndex], document.querySelector("#TUIC_visible").childNodes[document.querySelector("#TUIC_visible").selectedIndex - 1])
        visibleButtonFunc()
    }

}

function todown() {
    if (document.querySelector("#TUIC_visible").selectedIndex < document.querySelector("#TUIC_visible").childNodes.length - 1) {
        document.querySelector("#TUIC_visible").insertBefore(document.querySelector("#TUIC_visible").childNodes[document.querySelector("#TUIC_visible").selectedIndex], document.querySelector("#TUIC_visible").childNodes[document.querySelector("#TUIC_visible").selectedIndex].nextSibling.nextSibling)
visibleButtonFunc()
    }

}

function todefault() {
    TUICPref.visibleButtons =JSON.parse(defaultPref).visibleButtons
    localStorage.setItem("TUIC",JSON.stringify(TUICPref))
    document.querySelector("#TUIC_visible").innerHTML = settingVisibleButton()
    document.querySelector("#TUIC_invisible").innerHTML = settingInvisibleButton()
visibleButtonFunc()

}

function visibleButtonFunc(){
    let visible_button_list = []
    let visibleButtonsT = document.querySelector("#TUIC_visible").querySelectorAll("option")
    for (let i = 0; i < visibleButtonsT.length; i++) {
        visible_button_list.push(visibleButtonsT[i].id)
    }
    TUICPref.visibleButtons = visible_button_list
    localStorage.setItem("TUIC",JSON.stringify(TUICPref))
    TUICIvisibleClass += "_"
    TUICDidArticle += "_"
    TUICScrollBottom += "_"
    TUICCss()
}

function bookmark(e) {
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(TUIC_input_checkbox_selector["share-button"]).click()
    document.querySelector(`[d="M23.074 3.35H20.65V.927c0-.414-.337-.75-.75-.75s-.75.336-.75.75V3.35h-2.426c-.414 0-.75.337-.75.75s.336.75.75.75h2.425v2.426c0 .414.335.75.75.75s.75-.336.75-.75V4.85h2.424c.414 0 .75-.335.75-.75s-.336-.75-.75-.75zM19.9 10.744c-.415 0-.75.336-.75.75v9.782l-6.71-4.883c-.13-.095-.285-.143-.44-.143s-.31.048-.44.144l-6.71 4.883V5.6c0-.412.337-.75.75-.75h6.902c.414 0 .75-.335.75-.75s-.336-.75-.75-.75h-6.9c-1.242 0-2.25 1.01-2.25 2.25v17.15c0 .282.157.54.41.668.25.13.553.104.78-.062L12 17.928l7.458 5.43c.13.094.286.143.44.143.117 0 .234-.026.34-.08.252-.13.41-.387.41-.67V11.495c0-.414-.335-.75-.75-.75z"]:not(.TUIC_BOOKMARK),
    [d="M17 3V0h2v3h3v2h-3v3h-2V5h-3V3h3zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z"]:not(.TUIC_BOOKMARK),
    [d="M19.9 10.744c-.415 0-.75.336-.75.75v9.782l-6.71-4.883c-.13-.095-.285-.143-.44-.143s-.31.048-.44.144l-6.71 4.883V5.6c0-.412.337-.75.75-.75h6.902c.414 0 .75-.335.75-.75s-.336-.75-.75-.75h-6.9c-1.242 0-2.25 1.01-2.25 2.25v17.15c0 .282.157.54.41.668.25.13.553.104.78-.062L12 17.928l7.458 5.43c.13.094.286.143.44.143.117 0 .234-.026.34-.08.252-.13.41-.387.41-.67V11.495c0-.414-.335-.75-.75-.75z"]:not(.TUIC_BOOKMARK),
    [d="M16.586 4l-2.043-2.04L15.957.54 18 2.59 20.043.54l1.414 1.42L19.414 4l2.043 2.04-1.414 1.42L18 5.41l-2.043 2.05-1.414-1.42L16.586 4zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z"]:not(.TUIC_BOOKMARK)`).parentNode.parentNode.parentNode.parentNode.click()
}

function url_copy(e) {
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(TUIC_input_checkbox_selector["share-button"]).click()
    if (document.querySelector(`[d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"]:not(.TUIC_URL),
    [d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"]:not(.TUIC_URL)`) == null) {
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(TUIC_input_checkbox_selector["share-button"]).click()
    } else {
        document.querySelector(`[d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"]:not(.TUIC_URL),
    [d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"]:not(.TUIC_URL)`).parentNode.parentNode.parentNode.parentNode.click()
    }
}

function TUICCss(){
    let TUIC_color = "rgba(255,255,255,1)"
    if (document.querySelector('body[style*=\"255\"]') != null) {
        TUIC_color = "rgba(0,0,0,1)"
    }

    let unsent_tweet_background = TUICPref.buttonColor["unsent-tweet"]?.background ?? color[0]
    let unsent_tweet_border = TUICPref.buttonColor['unsent-tweet']?.border ?? color[1]
    let unsent_tweet_color = TUICPref.buttonColor['unsent-tweet']?.color ?? color[2]
    let not_following_background = TUICPref.buttonColor['not-following']?.background ?? color[3]
    let not_following_border = TUICPref.buttonColor['not-following']?.border ?? color[4]
    let not_following_color = TUICPref.buttonColor['not-following']?.color ?? color[5]
    let following_background = TUICPref.buttonColor['following']?.background ?? color[6]
    let following_border = TUICPref.buttonColor['following']?.border ?? color[7]
    let following_color = TUICPref.buttonColor['following']?.color ?? color[8]
    let un_following_background = TUICPref.buttonColor['un-following']?.background ?? color[9]
    let un_following_border = TUICPref.buttonColor['un-following']?.border ?? color[10]
    let un_following_color = TUICPref.buttonColor['un-following']?.color ?? color[11]
    let profile_background = TUICPref.buttonColor['profile']?.background ?? color[12]
    let profile_border = TUICPref.buttonColor['profile']?.border ?? color[13]
    let profile_color = TUICPref.buttonColor['profile']?.color ?? color[14]
    let profile_save_background = TUICPref.buttonColor['profile-save']?.background ?? color[15]
    let profile_save_border = TUICPref.buttonColor['profile-save']?.border ?? color[16]
    let profile_save_color = TUICPref.buttonColor['profile-save']?.color ?? color[17]
    let birthday_background = TUICPref.buttonColor['birthday']?.background ?? color[18]
    let birthday_border = TUICPref.buttonColor['birthday']?.border ?? color[19]
    let birthday_color = TUICPref.buttonColor['birthday']?.color ?? color[20]


    document.querySelector("#twitter_ui_customizer").textContent = `
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

/*設定画面の文字色*/
.TUIC_setting_text{
    color: var(--twitter-TUIC-color) !important;
}
.TUIC_setting_button{
    background: transparent !important;
    border-color: var(--twitter-TUIC-color);
}
.TUIC_setting_button_width{
    width:100%;
}
.TUIC_setting_button_default{
    width:10em;
    position:absolute;
    right:20px
}
.TUIC_none_scroll{
    scrollbar-width: none;
    -ms-overflow-style: none;
}
.TUIC_none_scroll::-webkit-scrollbar{display:none}
.${TUICIvisibleClass}{
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
#TUIC_invisible > option,#TUIC_visible > option,#css_textarea{
    background:transparent;
    color:var(--twitter-TUIC-color);
}

textarea#css_textarea {
    width: calc(100% - 10px) !important;
    height: 300px;
}

.${TUICScrollBottom} {
    overflow-x:auto;
scrollbar-width:thin;
padding-right:8px;
padding-left:8px;
padding-bottom:8px;
margin-bottom:-8px;
}

.${TUICScrollBottom}::-webkit-scrollbar {
height:8px
}
`;
}

function TUICCustomCSS(){
    document.querySelector("#twitter_ui_customizer_css").textContent = TUICPref['CSS']
}