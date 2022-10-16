var urlchange = ""

let TUIC_input_color_title = ["unsent-tweet-", "not-following-", "following-", "un-following-", "profile-", "profile-save-", "birthday"]
let input_name = ["未送信ツイートの編集ボタン", "フォローしていない人のフォローボタン", "フォローしている人のフォローボタン", "フォロー解除ボタン", "プロフィール編集ボタン", "プロフィールの保存ボタン", "最終決定ボタン"]
let TUIC_input_checkbox_title = ["reply-button", "retweet-button", "like-button", "downvote-button", "share-button", "tweet_analytics", "boolkmark", "url-copy"]
let TUIC_input_checkbox_name = { "reply-button": "返信", "retweet-button": "リツイート", "like-button": "いいね", "downvote-button": "自分向きではない", "share-button": "共有", "tweet_analytics": "ツイートアナリティクスを表示", "boolkmark": "ブックマークに保存", "url-copy": "ツイートのリンクをコピー" }
let TUIC_input_checkbox_selector = {
    "reply-button": "[data-testid$=\"reply\"]", "retweet-button": "[data-testid$=\"retweet\"]", "like-button": "[data-testid$=\"like\"]", "downvote-button": "[data-testid$=\"downvote\"]",
    "boolkmark_tweetdeck": "[aria-label$=\"ブックマーク\"],[aria-label$=\"Amlíne: Leabharmharcanna\"],[aria-label$=\"الخطّ الزمنيّ: العلامات المرجعية\"],[aria-label$=\"الخطّ الزمنيّ: العلامات المرجعية\"],[aria-label$=\"Timeline: Bookmarks\"],[aria-label$=\"Cronologia: Segnalibri\"],[aria-label$=\"Timeline: Markah\"],[aria-label$=\"Стрічка: Закладки\"],[aria-label$=\"ٹائم لائن: بُک مارکس\"],[aria-label$=\"Tijdlijn: Bladwijzers\"],[aria-label$=\"Cronologia: Preferits\"],[aria-label$=\"Cronoloxía: Marcadores\"],[aria-label$=\"ಕಾಲರೇಖೆ: ಬುಕ್‌ಮಾರ್ಕ್‌ಗಳು\"],[aria-label$=\"Χρονολόγιο: Σελιδοδείκτες\"],[aria-label$=\"સમય અવધિ: બુકમાર્ક્સ\"],[aria-label$=\"Vremenska crta: Knjižne oznake\"],[aria-label$=\"Tidslinje: Bokmärken\"],[aria-label$=\"Cronología: Guardados\"],[aria-label$=\"Domovská časová os\"],[aria-label$=\"Временска трака: Обележивачи\"],[aria-label$=\"ลำดับเหตุการณ์: บุ๊คมาร์ก\"],[aria-label$=\"முகப்புக் காலவரிசை\"],[aria-label$=\"Časová osa: Záložky\"],[aria-label$=\"Tidslinje: Bogmærker\"],[aria-label$=\"Timeline: Lesezeichen\"],[aria-label$=\"Anasayfa zaman akışı\"],[aria-label$=\"Anasayfa zaman akışı\"],[aria-label$=\"Tidslinje: Bokmerker\"],[aria-label$=\"Denbora lerroa: Laster-markak\"],[aria-label$=\"Kezdőlap idővonala\"],[aria-label$=\"होम टाइमलाइन\"],[aria-label$=\"Timeline: Mga Bookmark\"],[aria-label$=\"Etusivun aikajana\"],[aria-label$=\"Fil d'actualités : Signets\"],[aria-label$=\"Хроника: Отметки\"],[aria-label$=\"Dòng thời gian: Dấu trang\"],[aria-label$=\"ציר הזמן של דף הבית\"],[aria-label$=\"خط زمان: نشانک‌ها\"],[aria-label$=\"সময়রেখা: বুকমার্কগুলি\"],[aria-label$=\"Oś czasu: Zakładki\"],[aria-label$=\"Timeline: Itens salvos\"],[aria-label$=\"टाइमलाइन: बुकमार्क्स\"],[aria-label$=\"Garis masa: Bookmark\"],[aria-label$=\"Cronologia principală\"],[aria-label$=\"Лента: Закладки\"],[aria-label$=\"时间线：书签\"],[aria-label$=\"時間軸：書籤\"],[aria-label$=\"Timeline: Bookmarks\"],[aria-label$=\"타임라인: 북마크\"]",
    "share-button": "[aria-label=\"ツイートを共有\"],[aria-label=\"Roinn an Tweet\"],[aria-label=\"مشاركة التغريدة\"],[aria-label=\"مشاركة التغريدة\"],[aria-label=\"Share Tweet\"],[aria-label=\"Condividi Tweet\"],[aria-label=\"Sebarkan Tweet\"],[aria-label=\"Поділитися твітом\"],[aria-label=\"ٹویٹ شیئر کریں\"],[aria-label=\"Tweet delen\"],[aria-label=\"Comparteix el tuit\"],[aria-label=\"Compartir chío\"],[aria-label=\"ಟ್ವೀಟ್ ಹಂಚಿಕೊಳ್ಳಿ\"],[aria-label=\"Κοινοποίηση Tweet\"],[aria-label=\"ટ્વીટ શેર કરો\"],[aria-label=\"Podijelite Tweet\"],[aria-label=\"Dela tweeten\"],[aria-label=\"Compartir Tweet\"],[aria-label=\"Zdieľať Tweet\"],[aria-label=\"Подели твит\"],[aria-label=\"แบ่งปันทวีต\"],[aria-label=\"கீச்சைப் பகிர்\"],[aria-label=\"Sdílet Tweet\"],[aria-label=\"Del tweetet\"],[aria-label=\"Tweet teilen\"],[aria-label=\"Tweet paylaş\"],[aria-label=\"Del tweeten\"],[aria-label=\"Partekatu txioa\"],[aria-label=\"Tweet megosztása\"],[aria-label=\"ट्वीट शेयर करें\"],[aria-label=\"Ibahagi ang Tweet\"],[aria-label=\"Jaa twiitti\"],[aria-label=\"Partager le Tweet\"],[aria-label=\"Споделяне на туита\"],[aria-label=\"Chia sẻ Tweet\"],[aria-label=\"שתף את הציוץ\"],[aria-label=\"هم‌رسانی توییت\"],[aria-label=\"টুইট শেয়ার করুন\"],[aria-label=\"Udostępnij Tweeta\"],[aria-label=\"Compartilhar Tweet\"],[aria-label=\"ट्विट शेअर करा\"],[aria-label=\"Kongsi Tweet\"],[aria-label=\"Distribuie Tweetul\"],[aria-label=\"Поделиться твитом\"],[aria-label=\"分享推文\"],[aria-label=\"分享推文\"],[aria-label=\"트윗 공유하기\"]",
    "tweet_analytics": "[aria-label=\"ツイートアナリティクスを表示\"],[aria-label=\"Breathnaigh ar anailísíocht an Tweet\"],[aria-label=\"عرض تحليلات Twitter\"],[aria-label=\"عرض تحليلات Twitter\"],[aria-label=\"View Tweet analytics\"],[aria-label=\"Visualizza statistiche Tweet\"],[aria-label=\"Lihat analitik Tweet\"],[aria-label=\"Переглянути аналітику твіта\"],[aria-label=\"View Tweet analytics\"],[aria-label=\"Tweet-analyses bekijken\"],[aria-label=\"Mostra les analítiques del tuit\"],[aria-label=\"Ver análises do chío\"],[aria-label=\"ಟ್ವೀಟ್ ಅನಾಲಿಟಿಕ್ಸ್ ಅನ್ನು ನೋಡಿ\"],[aria-label=\"Προβολή στοιχείων ανάλυσης Tweet\"],[aria-label=\"ટ્વીટ વિશ્લેષણ જુઓ\"],[aria-label=\"Prikaži analitičke podatke o tweetovima\"],[aria-label=\"Visa Tweet-statistik\"],[aria-label=\"Ver estadísticas del Tweet\"],[aria-label=\"Zobraziť štatistiku Tweetu\"],[aria-label=\"Погледај аналитику твита\"],[aria-label=\"ดูการวิเคราะห์ทวีต\"],[aria-label=\"கீச்சுப் பகுப்பாய்வைக் காட்டு\"],[aria-label=\"Zobrazit analýzu tweetů\"],[aria-label=\"Vis Tweet-statistik\"],[aria-label=\"Tweet-Statistiken anzeigen\"],[aria-label=\"Tweet istatistiklerini görüntüle\"],[aria-label=\"Se tweetstatistikk\"],[aria-label=\"Ikusi txioen analisiak\"],[aria-label=\"Tweet-elemzések megtekintése\"],[aria-label=\"ट्वीट विश्लेषण देखें\"],[aria-label=\"Tingnan ang analytics ng Tweet\"],[aria-label=\"Näytä twiitin tilastot\"],[aria-label=\"Voir les statistiques des Tweets\"],[aria-label=\"Преглед на статистиката за туита\"],[aria-label=\"Xem phân tích Tweet\"],[aria-label=\"הצג את ניתוח הציוצים\"],[aria-label=\"مشاهده اطلاعات آماری توییت\"],[aria-label=\"টুইটের বিশ্লেষণ দেখুন\"],[aria-label=\"Zobacz statystyki dotyczące Tweeta\"],[aria-label=\"Ver estatísticas do Tweet\"],[aria-label=\"ट्विटची विश्लेषणे पहा\"],[aria-label=\"Lihat analitis Tweet\"],[aria-label=\"Vezi analiza Tweet\"],[aria-label=\"Смотреть аналитику твита\"],[aria-label=\"查看推文分析\"],[aria-label=\"查看推文分析\"],[aria-label=\"트윗 애널리틱스 보기\"]"
}
let TUIC_input_checkbox_selector_three = ["share-button"]
var color = ["rgba(29,161,242,1)", "rgba(29,161,242,1)", "rgba(255,255,255,1)",
    "rgba(255,255,255,0)", "rgba(29,161,242,1)", "rgba(29,161,242,1)",
    "rgba(29,161,242,1)", "rgba(29,161,242,1)", "rgba(255,255,255,1)",
    "rgba(255,0,0,1)", "rgba(255,0,0,1)", "rgba(255,255,255,1)",
    "rgba(255,255,255,0)", "rgba(29,161,242,1)", "rgba(29,161,242,1)",
    "rgba(29,161,242,1)", "rgba(29,161,242,1)", "rgba(255,255,255,1)",
    "rgba(255,0,0,1)", "rgba(255,0,0,1)", "rgba(255,255,255,1)",]
var visible_button = JSON.parse(localStorage.getItem('visible-button')) ?? TUIC_input_checkbox_title
// 対象とするノードを取得
const target = document.getElementsByTagName("body").item(0);

// オブザーバインスタンスを作成
const observer = new MutationObserver((mutations) => {
    observer.disconnect();
    let articles = document.querySelectorAll(`article:not([TUIC_ARTICLE="TUIC_CHECKED_ARTICLE"])`)
    if (articles.length != 0) {
        articles.forEach(function (elem) {
            if (elem.querySelector("[data-testid$=\"reply\"]") != null && elem.querySelector("[data-testid$=\"like\"]") != null) {
                let bar_base = elem.querySelector("[data-testid$=\"reply\"]")
                while (bar_base.querySelector("[data-testid$=\"like\"]") == null) {
                    bar_base = bar_base.parentElement
                }
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
                for (var i = 0; i < visible_button.length; i++) {
                    let div = -1
                    if (visible_button[i] in bar_item) {
                        div = bar_item[visible_button[i]]
                    } else if (visible_button[i] == "boolkmark") {
                        div = document.createElement('div');
                        div.classList.add("css-1dbjc4n")
                        div.style = "display: inline-grid;justify-content: inherit;transform: rotate(0deg) scale(1) translate3d(0px, 0px, 0px);-moz-box-pack: inherit;"
                        if (window.location.pathname == "/i/bookmarks" || (document.domain == "tweetdeck.twitter.com" && elem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(TUIC_input_checkbox_selector.boolkmark_tweetdeck) != null)) {
                            div.insertAdjacentHTML("beforeend",`
                            <div class="css-1dbjc4n r-18u37iz r-1h0z5md">
                              <div
                                aria-label="ブックマークから削除"
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
                                      <g><path d="M19.9 10.744c-.415 0-.75.336-.75.75v9.782l-6.71-4.883c-.13-.095-.285-.143-.44-.143s-.31.048-.44.144l-6.71 4.883V5.6c0-.412.337-.75.75-.75h6.902c.414 0 .75-.335.75-.75s-.336-.75-.75-.75h-6.9c-1.242 0-2.25 1.01-2.25 2.25v17.15c0 .282.157.54.41.668.25.13.553.104.78-.062L12 17.928l7.458 5.43c.13.094.286.143.44.143.117 0 .234-.026.34-.08.252-.13.41-.387.41-.67V11.495c0-.414-.335-.75-.75-.75z" class="TUIC_BOOKMARK"></path><path d="M20.955 4.226l2.07-2.07c.293-.293.293-.768 0-1.06s-.768-.294-1.06 0l-2.07 2.07-2.07-2.07c-.294-.294-.77-.294-1.062 0s-.293.767 0 1.06l2.07 2.07-2.07 2.07c-.293.293-.293.768 0 1.06.146.147.338.22.53.22s.384-.072.53-.22l2.07-2.07 2.07 2.07c.146.147.338.22.53.22s.384-.072.53-.22c.293-.292.293-.767 0-1.06l-2.068-2.07z" class="TUIC_BOOKMARK"></path></g>
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          `)
                            div.childNodes[1].addEventListener("click", bookmark_delete)
                        } else {
                            div.insertAdjacentHTML("beforeend",`
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
                          `)
                            div.childNodes[1].addEventListener("click", bookmark)
                        }

                        bar_base.appendChild(div)


                    } else if (visible_button[i] == "url-copy") {
                        div = document.createElement('div');
                        div.classList.add("css-1dbjc4n")
                        div.style = "display: inline-grid;justify-content: inherit;transform: rotate(0deg) scale(1) translate3d(0px, 0px, 0px);-moz-box-pack: inherit;"
                        div.insertAdjacentHTML("beforeend",`
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
                <path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"></path><path d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z" class="TUIC_URL">

                </path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
                      `)
                        div.childNodes[1].addEventListener("click", url_copy)

                        bar_base.appendChild(div)


                    }
                    if(div != -1){
                        if (needEmpty && div.querySelector(".css-1dbjc4n.r-xoduu5.r-1udh08x") == null) div.querySelector("svg").parentElement.parentElement.insertAdjacentHTML("beforeend",`<div class="css-1dbjc4n r-xoduu5 r-1udh08x"><span data-testid="app-text-transition-container" style="transition-property: transform; transition-duration: 0.3s; transform: translate3d(0px, 0px, 0px);"><span class="css-901oao css-16my406 r-1tl8opc r-n6v787 r-1cwl3u0 r-1k6nrdp r-1e081e0 r-qvutc0"></span></span></div>`)
                        lastButton = div
                        bar_base.appendChild(div)
                    }

                }
                if(lastButton.querySelector(".css-1dbjc4n.r-xoduu5.r-1udh08x") != null){
                    lastButton.querySelector(".css-1dbjc4n.r-xoduu5.r-1udh08x").remove()
                }

                for (var i = 0; i < TUIC_input_checkbox_title.length; i++) {
                    if (!visible_button.includes(TUIC_input_checkbox_title[i]) && TUIC_input_checkbox_title[i] in bar_item) {
                        bar_item[TUIC_input_checkbox_title[i]].classList.add("TUIC_DISPNONE");
                    }
                }


            }

            console.log("aaa")
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

const bodyObserver = new MutationObserver(run_first)
bodyObserver.observe(document.getElementsByTagName("body").item(0),{childList:false,subtree:false,attributes:true})

window.onload = function () {
    run_first()
}

function run_first() {

    if(document.querySelector(".twitter_ui_customizer_css") != null) document.querySelector(".twitter_ui_customizer_css").remove()
    if(document.querySelector(".twitter_ui_customizer") != null) document.querySelector(".twitter_ui_customizer").remove()

    var TUIC_color = "rgba(255,255,255,1)"
    // 追加する要素を用意します。
    let TUIC_css = document.createElement("style");
    TUIC_css.classList.add("twitter_ui_customizer")

    if (document.querySelector('body[style*=\"255\"]') != null) {
        TUIC_color = "rgba(0,0,0,1)"
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
.TUIC_none_scroll{
    scrollbar-width: none;
    -ms-overflow-style: none;
}
.TUIC_none_scroll::-webkit-scrollbar{display:none}
.TUIC_DISPNONE{
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
    console.log("qiu")
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
    TUIC_setting_button_visible_box.size = TUIC_input_checkbox_title.length
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
    TUIC_setting_button_invisible_box.size = TUIC_input_checkbox_title.length
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
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(TUIC_input_checkbox_selector["share-button"]).click()
    document.querySelector(`[d="M23.074 3.35H20.65V.927c0-.414-.337-.75-.75-.75s-.75.336-.75.75V3.35h-2.426c-.414 0-.75.337-.75.75s.336.75.75.75h2.425v2.426c0 .414.335.75.75.75s.75-.336.75-.75V4.85h2.424c.414 0 .75-.335.75-.75s-.336-.75-.75-.75zM19.9 10.744c-.415 0-.75.336-.75.75v9.782l-6.71-4.883c-.13-.095-.285-.143-.44-.143s-.31.048-.44.144l-6.71 4.883V5.6c0-.412.337-.75.75-.75h6.902c.414 0 .75-.335.75-.75s-.336-.75-.75-.75h-6.9c-1.242 0-2.25 1.01-2.25 2.25v17.15c0 .282.157.54.41.668.25.13.553.104.78-.062L12 17.928l7.458 5.43c.13.094.286.143.44.143.117 0 .234-.026.34-.08.252-.13.41-.387.41-.67V11.495c0-.414-.335-.75-.75-.75z"]:not(.TUIC_BOOKMARK)`).parentNode.parentNode.parentNode.parentNode.click()
}

function bookmark_delete(e) {
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(TUIC_input_checkbox_selector["share-button"]).click()
    document.querySelector(`[d="M19.9 10.744c-.415 0-.75.336-.75.75v9.782l-6.71-4.883c-.13-.095-.285-.143-.44-.143s-.31.048-.44.144l-6.71 4.883V5.6c0-.412.337-.75.75-.75h6.902c.414 0 .75-.335.75-.75s-.336-.75-.75-.75h-6.9c-1.242 0-2.25 1.01-2.25 2.25v17.15c0 .282.157.54.41.668.25.13.553.104.78-.062L12 17.928l7.458 5.43c.13.094.286.143.44.143.117 0 .234-.026.34-.08.252-.13.41-.387.41-.67V11.495c0-.414-.335-.75-.75-.75z"]:not(.TUIC_BOOKMARK)`).parentNode.parentNode.parentNode.parentNode.click()
}

function url_copy(e) {
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(TUIC_input_checkbox_selector["share-button"]).click()
    if(document.querySelector(`[d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"]:not(.TUIC_URL)`) == null){
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(TUIC_input_checkbox_selector["share-button"]).click()
    }else{
        document.querySelector(`[d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"]:not(.TUIC_URL)`).parentNode.parentNode.parentNode.parentNode.click()
    }
}