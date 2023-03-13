const TUICData = {
    defaultPref: { "buttonColor": {}, "visibleButtons": ["reply-button", "retweet-button", "like-button", "downvote-button", "share-button", "tweet_analytics", "boolkmark", "url-copy"], "sidebarButtons": ["home", "explore", "communities", "notifications", "messages", "bookmarks", "twiter-blue", "profile", "moremenu"], "invisibleItems": { "osusume-user-timeline": false }, "otherBoolSetting": { "bottomScroll": false , "invisibleTwitterLogo": false,"smallerSidebarContent":true }, "CSS": "" },
    settings: {
        visibleButtons: {
            all: ["reply-button", "retweet-button", "like-button", "downvote-button", "share-button", "tweet_analytics", "boolkmark", "url-copy"],
            titles: { "reply-button": "返信", "retweet-button": "リツイート", "like-button": "いいね", "downvote-button": "自分向きではない", "share-button": "共有", "tweet_analytics": "ツイートアナリティクスを表示", "boolkmark": "ブックマークに保存", "url-copy": "ツイートのリンクをコピー" }
        },
        sidebarButtons: {
            all: ["home", "explore", "communities", "notifications", "messages", "bookmarks", "twiter-blue", "profile", "moremenu","topics","lists","circles"],
            titles: { "home": "ホーム", "explore": "話題を検索", "communities": "コミュニティ", "notifications": "通知", "messages": "メッセージ", "bookmarks": "ブックマーク", "twiter-blue": "Twitter Blue", "profile": "プロフィール", "moremenu": "もっと見る","topics":"トピック","lists":"リスト","circles":"Twitterサークル" }
        },
        colors: {
            id: ["unsent-tweet", "not-following", "following", "un-following", "profile", "profile-save", "birthday"],
            title: { "unsent-tweet": "未送信ツイートの編集ボタン", "not-following": "フォローしていない人のフォローボタン", "following": "フォローしている人のフォローボタン", "un-following": "フォロー解除ボタン", "profile": "プロフィール編集ボタン", "profile-save": "プロフィールの保存ボタン", "birthday": "最終決定ボタン" }
        }
    },
    colors: {
        "unsent-tweet": {
            "background": "rgba(29,161,242,1)",
            "border": "rgba(29,161,242,1)",
            "color": "rgba(255,255,255,1)"
        },
        "not-following": {
            "background": "rgba(255,255,255,0)",
            "border": "rgba(29,161,242,1)",
            "color": "rgba(29,161,242,1)"
        },
        "following": {
            "background": "rgba(29,161,242,1)",
            "border": "rgba(29,161,242,1)",
            "color": "rgba(255,255,255,1)"
        },
        "un-following": {
            "background": "rgba(255,0,0,1)",
            "border": "rgba(255,0,0,1)",
            "color": "rgba(255,255,255,1)"
        },
        "profile": {
            "background": "rgba(255,255,255,0)",
            "border": "rgba(29,161,242,1)",
            "color": "rgba(29,161,242,1)"
        },
        "profile-save": {
            "background": "rgba(29,161,242,1)",
            "border": "rgba(29,161,242,1)",
            "color": "rgba(255,255,255,1)"
        },
        "birthday": {
            "background": "rgba(255,0,0,1)",
            "border": "rgba(255,0,0,1)",
            "color": "rgba(255,255,255,1)"
        }
    },
    visibleButtons: {
        selectors: {
            "reply-button": "[data-testid$=\"reply\"]", "retweet-button": "[data-testid$=\"retweet\"]", "like-button": "[data-testid$=\"like\"]", "downvote-button": "[data-testid$=\"downvote\"]",
            "boolkmark_tweetdeck": "[aria-label$=\"ブックマーク\"],[aria-label$=\"Amlíne: Leabharmharcanna\"],[aria-label$=\"الخطّ الزمنيّ: العلامات المرجعية\"],[aria-label$=\"الخطّ الزمنيّ: العلامات المرجعية\"],[aria-label$=\"Timeline: Bookmarks\"],[aria-label$=\"Cronologia: Segnalibri\"],[aria-label$=\"Timeline: Markah\"],[aria-label$=\"Стрічка: Закладки\"],[aria-label$=\"ٹائم لائن: بُک مارکس\"],[aria-label$=\"Tijdlijn: Bladwijzers\"],[aria-label$=\"Cronologia: Preferits\"],[aria-label$=\"Cronoloxía: Marcadores\"],[aria-label$=\"ಕಾಲರೇಖೆ: ಬುಕ್‌ಮಾರ್ಕ್‌ಗಳು\"],[aria-label$=\"Χρονολόγιο: Σελιδοδείκτες\"],[aria-label$=\"સમય અવધિ: બુકમાર્ક્સ\"],[aria-label$=\"Vremenska crta: Knjižne oznake\"],[aria-label$=\"Tidslinje: Bokmärken\"],[aria-label$=\"Cronología: Guardados\"],[aria-label$=\"Domovská časová os\"],[aria-label$=\"Временска трака: Обележивачи\"],[aria-label$=\"ลำดับเหตุการณ์: บุ๊คมาร์ก\"],[aria-label$=\"முகப்புக் காலவரிசை\"],[aria-label$=\"Časová osa: Záložky\"],[aria-label$=\"Tidslinje: Bogmærker\"],[aria-label$=\"Timeline: Lesezeichen\"],[aria-label$=\"Anasayfa zaman akışı\"],[aria-label$=\"Anasayfa zaman akışı\"],[aria-label$=\"Tidslinje: Bokmerker\"],[aria-label$=\"Denbora lerroa: Laster-markak\"],[aria-label$=\"Kezdőlap idővonala\"],[aria-label$=\"होम टाइमलाइन\"],[aria-label$=\"Timeline: Mga Bookmark\"],[aria-label$=\"Etusivun aikajana\"],[aria-label$=\"Fil d'actualités : Signets\"],[aria-label$=\"Хроника: Отметки\"],[aria-label$=\"Dòng thời gian: Dấu trang\"],[aria-label$=\"ציר הזמן של דף הבית\"],[aria-label$=\"خط زمان: نشانک‌ها\"],[aria-label$=\"সময়রেখা: বুকমার্কগুলি\"],[aria-label$=\"Oś czasu: Zakładki\"],[aria-label$=\"Timeline: Itens salvos\"],[aria-label$=\"टाइमलाइन: बुकमार्क्स\"],[aria-label$=\"Garis masa: Bookmark\"],[aria-label$=\"Cronologia principală\"],[aria-label$=\"Лента: Закладки\"],[aria-label$=\"时间线：书签\"],[aria-label$=\"時間軸：書籤\"],[aria-label$=\"Timeline: Bookmarks\"],[aria-label$=\"타임라인: 북마크\"]",
            "share-button": "[aria-label=\"ツイートを共有\"],[aria-label=\"Roinn an Tweet\"],[aria-label=\"مشاركة التغريدة\"],[aria-label=\"مشاركة التغريدة\"],[aria-label=\"Share Tweet\"],[aria-label=\"Condividi Tweet\"],[aria-label=\"Sebarkan Tweet\"],[aria-label=\"Поділитися твітом\"],[aria-label=\"ٹویٹ شیئر کریں\"],[aria-label=\"Tweet delen\"],[aria-label=\"Comparteix el tuit\"],[aria-label=\"Compartir chío\"],[aria-label=\"ಟ್ವೀಟ್ ಹಂಚಿಕೊಳ್ಳಿ\"],[aria-label=\"Κοινοποίηση Tweet\"],[aria-label=\"ટ્વીટ શેર કરો\"],[aria-label=\"Podijelite Tweet\"],[aria-label=\"Dela tweeten\"],[aria-label=\"Compartir Tweet\"],[aria-label=\"Zdieľať Tweet\"],[aria-label=\"Подели твит\"],[aria-label=\"แบ่งปันทวีต\"],[aria-label=\"கீச்சைப் பகிர்\"],[aria-label=\"Sdílet Tweet\"],[aria-label=\"Del tweetet\"],[aria-label=\"Tweet teilen\"],[aria-label=\"Tweet paylaş\"],[aria-label=\"Del tweeten\"],[aria-label=\"Partekatu txioa\"],[aria-label=\"Tweet megosztása\"],[aria-label=\"ट्वीट शेयर करें\"],[aria-label=\"Ibahagi ang Tweet\"],[aria-label=\"Jaa twiitti\"],[aria-label=\"Partager le Tweet\"],[aria-label=\"Споделяне на туита\"],[aria-label=\"Chia sẻ Tweet\"],[aria-label=\"שתף את הציוץ\"],[aria-label=\"هم‌رسانی توییت\"],[aria-label=\"টুইট শেয়ার করুন\"],[aria-label=\"Udostępnij Tweeta\"],[aria-label=\"Compartilhar Tweet\"],[aria-label=\"ट्विट शेअर करा\"],[aria-label=\"Kongsi Tweet\"],[aria-label=\"Distribuie Tweetul\"],[aria-label=\"Поделиться твитом\"],[aria-label=\"分享推文\"],[aria-label=\"分享推文\"],[aria-label=\"트윗 공유하기\"]",
            "tweet_analytics": "[aria-label*=\"ツイートアナリティクスを表示\"],[aria-label*=\"Breathnaigh ar anailísíocht an Tweet\"],[aria-label*=\"عرض تحليلات Twitter\"],[aria-label*=\"عرض تحليلات Twitter\"],[aria-label*=\"View Tweet analytics\"],[aria-label*=\"Visualizza statistiche Tweet\"],[aria-label*=\"Lihat analitik Tweet\"],[aria-label*=\"Переглянути аналітику твіта\"],[aria-label*=\"View Tweet analytics\"],[aria-label*=\"Tweet-analyses bekijken\"],[aria-label*=\"Mostra les analítiques del tuit\"],[aria-label*=\"Ver análises do chío\"],[aria-label*=\"ಟ್ವೀಟ್ ಅನಾಲಿಟಿಕ್ಸ್ ಅನ್ನು ನೋಡಿ\"],[aria-label*=\"Προβολή στοιχείων ανάλυσης Tweet\"],[aria-label*=\"ટ્વીટ વિશ્લેષણ જુઓ\"],[aria-label*=\"Prikaži analitičke podatke o tweetovima\"],[aria-label*=\"Visa Tweet-statistik\"],[aria-label*=\"Ver estadísticas del Tweet\"],[aria-label*=\"Zobraziť štatistiku Tweetu\"],[aria-label*=\"Погледај аналитику твита\"],[aria-label*=\"ดูการวิเคราะห์ทวีต\"],[aria-label*=\"கீச்சுப் பகுப்பாய்வைக் காட்டு\"],[aria-label*=\"Zobrazit analýzu tweetů\"],[aria-label*=\"Vis Tweet-statistik\"],[aria-label*=\"Tweet-Statistiken anzeigen\"],[aria-label*=\"Tweet istatistiklerini görüntüle\"],[aria-label*=\"Se tweetstatistikk\"],[aria-label*=\"Ikusi txioen analisiak\"],[aria-label*=\"Tweet-elemzések megtekintése\"],[aria-label*=\"ट्वीट विश्लेषण देखें\"],[aria-label*=\"Tingnan ang analytics ng Tweet\"],[aria-label*=\"Näytä twiitin tilastot\"],[aria-label*=\"Voir les statistiques des Tweets\"],[aria-label*=\"Преглед на статистиката за туита\"],[aria-label*=\"Xem phân tích Tweet\"],[aria-label*=\"הצג את ניתוח הציוצים\"],[aria-label*=\"مشاهده اطلاعات آماری توییت\"],[aria-label*=\"টুইটের বিশ্লেষণ দেখুন\"],[aria-label*=\"Zobacz statystyki dotyczące Tweeta\"],[aria-label*=\"Ver estatísticas do Tweet\"],[aria-label*=\"ट्विटची विश्लेषणे पहा\"],[aria-label*=\"Lihat analitis Tweet\"],[aria-label*=\"Vezi analiza Tweet\"],[aria-label*=\"Смотреть аналитику твита\"],[aria-label*=\"查看推文分析\"],[aria-label*=\"查看推文分析\"],[aria-label*=\"트윗 애널리틱스 보기\"]",
            "boolkmark": `[aria-label="ブックマークに保存"]`,
            "url-copy": `[aria-label="ツイートのリンクをコピー"]`,
        },
        buttonHTML: {
            "boolkmark": function () {
                return `
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
                          class="r-115tad6 r-4qtqp9 r-yyyyoo r-1q142lx r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr ${TUICLibrary.backgroundColorCheck() == "light" ? "r-14j79pv" : "r-1bwzh9t"}"
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
            </div>`},
            "url-copy": function () {
                return `
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
                class="r-115tad6 r-4qtqp9 r-yyyyoo r-1q142lx r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr  ${TUICLibrary.backgroundColorCheck() == "light" ? "r-14j79pv" : "r-1bwzh9t"}">
                <g>
                    <path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z" class="TUIC_URL"></path><path d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z">
    
                    </path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
            </div>`}
        },
        buttonFunction:{
            "boolkmark":function(e){
                e.currentTarget.parentElement.parentElement.querySelector(TUICData.visibleButtons.selectors["share-button"]).click();
                document.querySelector(
                `[d="M23.074 3.35H20.65V.927c0-.414-.337-.75-.75-.75s-.75.336-.75.75V3.35h-2.426c-.414 0-.75.337-.75.75s.336.75.75.75h2.425v2.426c0 .414.335.75.75.75s.75-.336.75-.75V4.85h2.424c.414 0 .75-.335.75-.75s-.336-.75-.75-.75zM19.9 10.744c-.415 0-.75.336-.75.75v9.782l-6.71-4.883c-.13-.095-.285-.143-.44-.143s-.31.048-.44.144l-6.71 4.883V5.6c0-.412.337-.75.75-.75h6.902c.414 0 .75-.335.75-.75s-.336-.75-.75-.75h-6.9c-1.242 0-2.25 1.01-2.25 2.25v17.15c0 .282.157.54.41.668.25.13.553.104.78-.062L12 17.928l7.458 5.43c.13.094.286.143.44.143.117 0 .234-.026.34-.08.252-.13.41-.387.41-.67V11.495c0-.414-.335-.75-.75-.75z"]:not(.TUIC_BOOKMARK),
                [d="M17 3V0h2v3h3v2h-3v3h-2V5h-3V3h3zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z"]:not(.TUIC_BOOKMARK),
                [d="M19.9 10.744c-.415 0-.75.336-.75.75v9.782l-6.71-4.883c-.13-.095-.285-.143-.44-.143s-.31.048-.44.144l-6.71 4.883V5.6c0-.412.337-.75.75-.75h6.902c.414 0 .75-.335.75-.75s-.336-.75-.75-.75h-6.9c-1.242 0-2.25 1.01-2.25 2.25v17.15c0 .282.157.54.41.668.25.13.553.104.78-.062L12 17.928l7.458 5.43c.13.094.286.143.44.143.117 0 .234-.026.34-.08.252-.13.41-.387.41-.67V11.495c0-.414-.335-.75-.75-.75z"]:not(.TUIC_BOOKMARK),
                [d="M16.586 4l-2.043-2.04L15.957.54 18 2.59 20.043.54l1.414 1.42L19.414 4l2.043 2.04-1.414 1.42L18 5.41l-2.043 2.05-1.414-1.42L16.586 4zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z"]:not(.TUIC_BOOKMARK)`
                ).parentNode.parentNode.parentNode.parentNode.click();
            },
            "url-copy":function(e){
                let shareButtonClick = e.currentTarget.parentElement.parentElement.querySelector(TUICData.visibleButtons.selectors["share-button"])
                console.log("aiueo")
                shareButtonClick.click()
                console.log("aiueoaa")
                let urlCopyButton = document.querySelector(`[d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"]:not(.TUIC_URL),
                [d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"]:not(.TUIC_URL)`)
                console.log(urlCopyButton)
                if (urlCopyButton == null) {
                    shareButtonClick.click()
                } else {
                    console.log(urlCopyButton.parentNode.parentNode.parentNode.parentNode.click)
                    urlCopyButton.parentNode.parentNode.parentNode.parentNode.click()
                }
            }
        },
        buttonElement:{
            "boolkmark":function(){
                let elem =  TUICLibrary.HTMLParse(TUICData.visibleButtons.buttonHTML["boolkmark"]())
                elem.children[0].addEventListener("click", TUICData.visibleButtons.buttonFunction["boolkmark"])
                return elem
            },
            "url-copy":function(){
                let elem =  TUICLibrary.HTMLParse(TUICData.visibleButtons.buttonHTML["url-copy"]())
                elem.children[0].addEventListener("click", TUICData.visibleButtons.buttonFunction["url-copy"])
                return elem
            }
        },
        emptyElement:function(){
            return TUICLibrary.TUICParser.parseFromString(`<div class="css-1dbjc4n r-xoduu5 r-1udh08x"><span data-testid="app-text-transition-container" style="transition-property: transform; transition-duration: 0.3s; transform: translate3d(0px, 0px, 0px);"><span class="css-901oao css-16my406 r-1tl8opc r-n6v787 r-1cwl3u0 r-1k6nrdp r-1e081e0 r-qvutc0"></span></span></div>`,"text/html").querySelector("div")
        }
    },
    sidebarButtons: {
        "selectors": {
            "home": `[href="/home"]`,
            "explore": `[href="/explore"]`,
            "communities": `[href$="/communities"]`,
            "notifications": `[href="/notifications"]`,
            "messages": `[href="/messages"]`,
            "bookmarks": `[href="/i/bookmarks"]`,
            "twiter-blue": `[href="/i/twitter_blue_sign_up"]`,
            "profile": `[data-testid="AppTabBar_Profile_Link"]`,
            "moremenu": `[data-testid="AppTabBar_More_Menu"]`,
            "topics": `#TUICSidebar_topics`,
            "lists": `#TUICSidebar_lists`,
            "circles": `#TUICSidebar_circles`
        },
        "html":{
            "topics":function(){
                return `
              <a id="TUICSidebar_topics" role="link" class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1habvwh r-1loqt21 r-6koalj r-eqz5dr r-16y2uox r-1ny4l3l r-rjfia r-13qz1uu TUICSidebarButton ${location.pathname.endsWith("/topics") ? "TUICSidebarSelected" : ""}">
                <div class="css-1dbjc4n r-1awozwy r-sdzlij r-18u37iz r-1777fci r-dnmrzs r-xyw6el r-o7ynqc r-6416eg">
                  <div class="css-1dbjc4n">
                    <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e ${TUICLibrary.backgroundColorCheck() == "light" ? "r-18jsvk2" : "r-vlxjld r-1nao33i"}">
                      <g>
                        <path d="M12 3.75C7.99 3.75 4.75 7 4.75 11s3.24 7.25 7.25 7.25h1v2.44c1.13-.45 2.42-1.3 3.54-2.54 1.52-1.67 2.66-3.95 2.71-6.67.07-4.46-3.28-7.73-7.25-7.73zM2.75 11c0-5.11 4.14-9.25 9.25-9.25s9.34 4.23 9.25 9.77c-.06 3.28-1.44 6.01-3.23 7.97-1.76 1.94-3.99 3.21-5.87 3.5l-1.15.17V20.2c-4.64-.5-8.25-4.43-8.25-9.2zM15 10H9V8h6v2zm-2 4H9v-2h4v2z"></path>
                      </g>
                    </svg>
                  </div>
                  <div dir="ltr" class="css-901oao css-1hf3ou5 r-1tl8opc r-adyw6z r-135wba7 r-1joea0r r-88pszg r-bcqeeo r-qvutc0 ${TUICLibrary.backgroundColorCheck() == "light" ? "r-18jsvk2" : "r-vlxjld r-1nao33i"}" >
                    <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0">トピック</span>
                  </div>
                </div>
              </a>`
            },
            "lists":function(){
                return `
              <a id="TUICSidebar_lists" role="link" class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1habvwh r-1loqt21 r-6koalj r-eqz5dr r-16y2uox r-1ny4l3l r-rjfia r-13qz1uu TUICSidebarButton ${location.pathname.endsWith("/topics") ? "TUICSidebarSelected" : ""}">
                <div class="css-1dbjc4n r-1awozwy r-sdzlij r-18u37iz r-1777fci r-dnmrzs r-xyw6el r-o7ynqc r-6416eg">
                  <div class="css-1dbjc4n">
                    <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e ${TUICLibrary.backgroundColorCheck() == "light" ? "r-18jsvk2" : "r-vlxjld r-1nao33i"}">
                      <g>
                        <path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"></path>
                      </g>
                    </svg>
                  </div>
                  <div dir="ltr" class="css-901oao css-1hf3ou5 r-1tl8opc r-adyw6z r-135wba7 r-1joea0r r-88pszg r-bcqeeo r-qvutc0 ${TUICLibrary.backgroundColorCheck() == "light" ? "r-18jsvk2" : "r-vlxjld r-1nao33i"}" >
                    <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0">リスト</span>
                  </div>
                </div>
              </a>`
            },
            "circles":function(){
                return `
              <a id="TUICSidebar_circles" role="link" class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1habvwh r-1loqt21 r-6koalj r-eqz5dr r-16y2uox r-1ny4l3l r-rjfia r-13qz1uu TUICSidebarButton ${location.pathname.endsWith("/topics") ? "TUICSidebarSelected" : ""}">
                <div class="css-1dbjc4n r-1awozwy r-sdzlij r-18u37iz r-1777fci r-dnmrzs r-xyw6el r-o7ynqc r-6416eg">
                  <div class="css-1dbjc4n">
                    <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e ${TUICLibrary.backgroundColorCheck() == "light" ? "r-18jsvk2" : "r-vlxjld r-1nao33i"}">
                      <g>
                        <path d="M10 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM6 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4zM3.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C13.318 13.65 11.838 13 10 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C5.627 11.85 7.648 11 10 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H1.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zm19.417-3.68c-.541.97-1.601 1.99-3.352 2.98l-.201.12-.202-.12c-1.751-.99-2.811-2.01-3.352-2.98-.545-.97-.564-1.88-.206-2.59.355-.69 1.059-1.13 1.84-1.17.661-.03 1.348.22 1.92.79.571-.57 1.258-.82 1.918-.79.781.04 1.485.48 1.84 1.17.358.71.339 1.62-.205 2.59z"></path>
                      </g>
                    </svg>
                  </div>
                  <div dir="ltr" class="css-901oao css-1hf3ou5 r-1tl8opc r-adyw6z r-135wba7 r-1joea0r r-88pszg r-bcqeeo r-qvutc0 ${TUICLibrary.backgroundColorCheck() == "light" ? "r-18jsvk2" : "r-vlxjld r-1nao33i"}" >
                    <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0">Twitterサークル</span>
                  </div>
                </div>
              </a>`
            }
        },
        "buttonFunctions":{
            "topics":function(e){
                e.currentTarget.parentElement.parentElement.parentElement.querySelector(`[aria-haspopup] > div > div`).click();
                if(document.querySelector(`:is([role="group"],[data-testid="Dropdown"]) [href$="/topics"]`) == null){
                    setTimeout(function(){document.querySelector(`:is([role="group"],[data-testid="Dropdown"]) [href$="/topics"]`).click()},150)
                }else{
                    document.querySelector(`:is([role="group"],[data-testid="Dropdown"]) [href$="/topics"]`).click()
                }
            },
            "lists":function(e){
                e.currentTarget.parentElement.parentElement.parentElement.querySelector(`[aria-haspopup] > div > div`).click();
                if(document.querySelector(`:is([role="group"],[data-testid="Dropdown"]) [href$="/lists"]`) == null){
                    setTimeout(function(){document.querySelector(`:is([role="group"],[data-testid="Dropdown"]) [href$="/lists"]`).click()},150)
                }else{
                    document.querySelector(`:is([role="group"],[data-testid="Dropdown"]) [href$="/lists"]`).click()
                }
            },
            "circles":function(e){
                e.currentTarget.parentElement.parentElement.parentElement.querySelector(`[aria-haspopup] > div > div`).click();
                if(document.querySelector(`:is([role="group"],[data-testid="Dropdown"]) [href="/i/circles"]`) == null){
                    setTimeout(function(){document.querySelector(`:is([role="group"],[data-testid="Dropdown"]) [href="/i/circles"]`).click()},150)
                }else{
                    document.querySelector(`:is([role="group"],[data-testid="Dropdown"]) [href="/i/circles"]`).click()
                }
            }
        },
        "tuicButtonUrl":{
            "topics":`/topics`,
            "lists":`/lists`,
            "circles":`/i/circles/`
        }
    },
    invisibles: {
        all: ["osusume-user-timeline"],
        titles: { "osusume-user-timeline": "タイムライン上のおすすめユーザー" }
    },
    styleColor:{
        light:{
            textColor:"rgba(0,0,0,1)",
            containerBackground:"rgb(247, 249, 249)",
            colorHover:"#00000040"
        },
        blue:{
            textColor:"rgba(255,255,255,1)",
            containerBackground:"rgb(30, 39, 50)",
            colorHover:"#ffffff30"
        },
        dark:{
            textColor:"rgba(255,255,255,1)",
            containerBackground:"rgb(22, 24, 28)",
            colorHover:"#ffffff40"
        }
    }
}

const TUICLibrary = {
    color: {
        rgb2hex: function (rgb) {
            return (
                `#${rgb.map(function (value) { return ("0" + value.toString(16)).slice(-2); }).join("")}`
            );
        },
        hex2rgb: function (hex) {
            if (hex.slice(0, 1) == "#") hex = hex.slice(1);
            return [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)].map(function (str) { return parseInt(str, 16); });
        }
    },
    getClasses: {
        TUICIvisibleClass: function () {
            return "TUIC_DISPNONE" + this.query
        },
        TUICDidArticle: function () {
            return "TUIC_CHECKED_ARTICLE" + this.query
        },
        TUICScrollBottom: function () {
            return "TUIC_SCROLL_BOTTOM" + this.query
        },
        update: function () {
            this.query += "_"
            TUICCss()
        },
        query: ""
    },
    defaultPref: {
        get: function () {
            return JSON.parse(this.getString())
        },
        getString: function () {
            return JSON.stringify(TUICData.defaultPref)
        }
    },
    updatePref: {
        update: function () {
            dPref = TUICLibrary.defaultPref.get()
            if ((localStorage.getItem('unsent-tweet-background') ?? "unknown") != "unknown") {
                this.parallelToSerial()
            }

            for (let i in dPref) {
                if (!(i in TUICPref)) {
                    TUICPref[i] = dPref[i]
                }
            }
        },
        parallelToSerial: function () {
            TUICPref.CSS = localStorage.getItem('CSS');
            TUICPref.invisibleItems["osusume-user-timeline"] = (localStorage.getItem('osusume-user-timeline') ?? "0") == "1";
            TUICPref.visibleButtons = JSON.parse(localStorage.getItem('visible-button'))
            for (let i of TUICData.settings.colors.id) {
                let a = localStorage.getItem(`${i}-background`) ?? "unknown"
                if (a != "unknown") {
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

            localStorage.setItem("TUIC", JSON.stringify(TUICPref))
        },
    },
    backgroundColorCheck:function(){
        bodyStyle = document
        .querySelector("body").style.backgroundColor.toString()
        if(bodyStyle == "rgb(0, 0, 0)"){
            return "dark"
        }else if(bodyStyle == "rgb(21, 32, 43)"){
            return "blue"
        } else{
            return "light"
        }
    },
    TUICParser: new DOMParser(),
    HTMLParse:function(elem){
        return this.HTMLParseFunc(elem).querySelector("body > *")
    },
    HTMLParseAll:function(elem){
        return this.HTMLParseFunc(elem).querySelectorAll("body > *")
    },
    HTMLParseFunc:function(elem){
        return this.TUICParser.parseFromString(elem,"text/html")
    }
}

const TUICObserver = {
    observerFunction:function(){
        TUICObserver.observer.disconnect();
        let timeout = window.setTimeout(function () { TUICObserver.observer.observe(TUICObserver.target, TUICObserver.config) }, 10000)

        TUICObserver.functions.sidebarButtons()

        TUICObserver.functions.buttonUnderTweet()

        TUICObserver.functions.osusumeUser()

        TUICObserver.functions.clientInfo()

        TUICObserver.functions.updateStyles()

        if (document.querySelector('style.twitter_ui_customizer') == null) {
            TUICRunFirst()
        }
        if (window.location.pathname == "/tuic/safemode") {
        } else if (document.querySelector('#unsent-tweet-background') == null && document.querySelector('[role="slider"]') != null && (window.location.pathname == "/settings/display")) {
            TUICOptionHTML.displaySetting(document.querySelector('[role="slider"]').parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)
        } else if (document.querySelector('#unsent-tweet-background') == null && document.querySelector('[role="slider"]') != null && (window.location.pathname == "/i/display")) {
            TUICOptionHTML.displaySetting(document.querySelector('[role="slider"]').parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)
        }

        window.clearTimeout(timeout)
        TUICObserver.observer.observe(TUICObserver.target, TUICObserver.config);
    },
    config: {
        childList: true,
        subtree: true
    },
    target: document.querySelector("body"),
    functions:{
        sidebarButtons:function(){
            let bannerRoot = document.querySelector(`[role=banner] > div > div > div > div > div > nav`)
            if (bannerRoot != null && bannerRoot.querySelector(`a:not(.${"NOT_" + TUICLibrary.getClasses.TUICIvisibleClass()}):not(.${TUICLibrary.getClasses.TUICIvisibleClass()})`) != null) {
                for (const i of TUICPref.sidebarButtons) {
                    let moveElem = bannerRoot.querySelector(TUICData.sidebarButtons.selectors[i])
                    if(moveElem != null){
                        bannerRoot.appendChild(moveElem)
                        moveElem.classList.add("NOT_" + TUICLibrary.getClasses.TUICIvisibleClass())
                    }else if(i in TUICData.sidebarButtons.html){
                        moveElem =TUICLibrary.HTMLParse(TUICData.sidebarButtons.html[i]())
                        moveElem.classList.add("NOT_" + TUICLibrary.getClasses.TUICIvisibleClass())
                        moveElem.onclick = TUICData.sidebarButtons.buttonFunctions[i]
                        bannerRoot.appendChild(moveElem)
                    }
                }
                for (const i of TUICData.settings.sidebarButtons.all) {
                    if(!TUICPref.sidebarButtons.includes(i)){
                        const moveElem = bannerRoot.querySelector(TUICData.sidebarButtons.selectors[i])
                        if(moveElem != null) moveElem.classList.add(TUICLibrary.getClasses.TUICIvisibleClass());
                    }

                }

                if (TUICPref.otherBoolSetting.invisibleTwitterLogo) document.querySelector(`header [role="heading"]`).classList.add(TUICLibrary.getClasses.TUICIvisibleClass())
            }
        },
        buttonUnderTweet:function(){
            let articles = document.querySelectorAll(`article:not([TUIC_ARTICLE="${TUICLibrary.getClasses.TUICDidArticle()}"])`)
            if (articles.length != 0) {
                articles.forEach(function (elem) {
                    if (elem.querySelector("[data-testid$=\"reply\"]") != null && elem.querySelector("[data-testid$=\"like\"]") != null) {
                        let bar_base = elem.querySelector("[data-testid$=\"reply\"]")
                        while (bar_base.querySelector("[data-testid$=\"like\"]") == null) {
                            bar_base = bar_base.parentElement
                        }
                        if (TUICPref.otherBoolSetting.bottomScroll) bar_base.parentElement.classList.add(TUICLibrary.getClasses.TUICScrollBottom())
                        let bar_item = {}
                        for (const elem_item of bar_base.children) {
                            for (const sel in TUICData.visibleButtons.selectors) {
                                if (elem_item.querySelector(TUICData.visibleButtons.selectors[sel]) != null) {
                                    bar_item[sel] = elem_item
                                    break
                                }
                            }
                        }
                        let lastButton
                        for (let i of TUICPref.visibleButtons) {
                            let div = -1
                            if (i in bar_item) {
                                div = bar_item[i]
                            } else if (i in TUICData.visibleButtons.buttonElement) {
                                div = TUICData.visibleButtons.buttonElement[i]()
                            }
                            if (div != -1) {
                                if ((bar_item["reply-button"].querySelector(".css-1dbjc4n.r-xoduu5.r-1udh08x") != null) && div.querySelector(".css-1dbjc4n.r-xoduu5.r-1udh08x") == null) div.querySelector("svg").parentElement.parentElement.appendChild(TUICData.visibleButtons.emptyElement())
                                lastButton = div
                                bar_base.appendChild(div)
                            }
                        }
                        if (lastButton.querySelector(".css-1dbjc4n.r-xoduu5.r-1udh08x") != null && lastButton.querySelector(".css-1dbjc4n.r-xoduu5.r-1udh08x").children[0].children[0].childElementCount == 0) {
                            lastButton.querySelector(".css-1dbjc4n.r-xoduu5.r-1udh08x").remove()
                        }
    
                        for (var i = 0; i < TUICData.settings.visibleButtons.all.length; i++) {
                            if (!TUICPref.visibleButtons.includes(TUICData.settings.visibleButtons.all[i]) && TUICData.settings.visibleButtons.all[i] in bar_item) {
                                bar_item[TUICData.settings.visibleButtons.all[i]].classList.add(TUICLibrary.getClasses.TUICIvisibleClass());
                            }
                        }
                    }
                    elem.setAttribute("TUIC_ARTICLE", TUICLibrary.getClasses.TUICDidArticle())
                })
            }
        },
        osusumeUser:function(){
            if (TUICPref.invisibleItems["osusume-user-timeline"] && location.search.indexOf("f=user") == -1 && location.href != "https://twitter.com/settings/device_follow") {
                let cells = document.querySelectorAll(`div[data-testid="cellInnerDiv"]:not(.${TUICLibrary.getClasses.TUICDidArticle()}):not([aria-labelledby="modal-header"] > div > div > div > section > div > div > div):not([aria-labelledby="modal-header"] > div > div > div > div > div > div > div):not([aria-labelledby="modal-header"] > div > div > div > div > div > div):not([data-testid="primaryColumn"] > div > section > div > div > div)`)
                if (cells.length != 0) {
                    cells.forEach(function (elem) {
                        if (elem.querySelector(`[data-testid="UserCell"]`) != null && elem.getAttribute("TUIC_ARTICLE") != TUICLibrary.getClasses.TUICDidArticle()) {
                            elem.classList.add(TUICLibrary.getClasses.TUICIvisibleClass())
                            if (elem.previousElementSibling != null && elem.previousElementSibling.querySelector(`[data-testid="UserCell"]`) == null) {
                                if (elem.previousElementSibling != null) elem.previousElementSibling.classList.add(TUICLibrary.getClasses.TUICIvisibleClass())
                                if (elem.previousElementSibling.previousElementSibling != null) elem.previousElementSibling.previousElementSibling.classList.add(TUICLibrary.getClasses.TUICIvisibleClass())
                            }
                            let cellElement = elem.nextElementSibling
                            while (cellElement != null && cellElement.querySelector(`[href^="/search?q="]`) == null && cellElement.querySelector(`[href^="/i/connect_people?user_id="]`) == null) {
                                cellElement.classList.add(TUICLibrary.getClasses.TUICIvisibleClass())
                                cellElement = cellElement.nextElementSibling
                            }
                            if (cellElement != null) cellElement.classList.add(TUICLibrary.getClasses.TUICIvisibleClass())
                        }
                    })
                }
            }
        },
        clientInfo:function(){
            if (document.getElementById("client-info") == null && TUICPref.otherBoolSetting.clientInfo && !isNaN((new URL(location.href)).pathname.split('/')[3]) && document.getElementsByClassName("css-1dbjc4n r-1d09ksm r-1471scf r-18u37iz r-1wbh5a2").length >= 1) {
                TUICObserver.functions.clientInfoVisible()
            } else if (document.getElementById("client-info") != null && !TUICPref.otherBoolSetting.clientInfo) {
                document.getElementById("client-info").remove()
            }
        },
        clientInfoVisible:async function(){
            let client = document.createElement("a");
            client.style.marginLeft = "4px";
            client.id = "client-info";
            client.classList.add("css-4rbku5", "css-18t94o4", "css-901oao", "css-16my406", "r-1loqt21", "r-xoduu5", "r-1q142lx", "r-1w6e6rj", "r-1tl8opc", "r-9aw3ui", "r-bcqeeo", "r-3s2u2q", "r-qvutc0");
            document.querySelector(".css-1dbjc4n.r-1d09ksm.r-1471scf.r-18u37iz.r-1wbh5a2").children[0].appendChild(client);
            chrome.runtime.sendMessage(
                {
                    endpoint: 'https://mico.re/api/getclient.php?id=' + (new URL(location.href)).pathname.split('/')[3]
                },
                (response) => {
                        json = response;
                        let cliantInfoElem = document.querySelector("#client-info")
                        console.log(json.source)
                        if (json.source ?? "unknwon" != "unknwon") {
                            cliantInfoElem.textContent = json.source.replace("</a>", "").split(">")[1];
                        }else{
                            cliantInfoElem.textContent = "情報を取得できませんでした"
                        }
        
        
                }
            );
        },
        updateStyles:function(){
            for(let i of document.querySelectorAll(".TUICSidebarButton")){
                let itemId = i.id.replace("TUICSidebar_","")
                let locationBool = false
                if(TUICData.sidebarButtons.tuicButtonUrl[itemId].endsWith("/")){
                    locationBool = location.pathname.includes(TUICData.sidebarButtons.tuicButtonUrl[itemId])
                }else{
                    locationBool = location.pathname.endsWith(TUICData.sidebarButtons.tuicButtonUrl[itemId])
                }
                if( locationBool && !i.classList.value.includes("TUICSidebarSelected")){
                    i.classList.add("TUICSidebarSelected")
                }else if(!locationBool && i.classList.value.includes("TUICSidebarSelected")){
                    i.classList.remove("TUICSidebarSelected")
                }
                i.querySelector("[dir]").style.display = (document.querySelector(TUICData.sidebarButtons.selectors.bookmarks).children[0].childNodes.length == 2) ? "" : "none"
            }
        }
    },

}
TUICObserver.observer =  new MutationObserver(TUICObserver.observerFunction)

const TUICOptionHTML = {
    displaySetting: function (rootElement = "") {
        let TWITTER_setting_back = rootElement;


        let TUICPrefHTML = TUICLibrary.HTMLParse(this.TUICOptionHTML())
        TWITTER_setting_back.appendChild(TUICPrefHTML);

        document.querySelector("#css_textarea").value = TUICPref['CSS']

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
                localStorage.setItem("TUIC", JSON.stringify(TUICPref))
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
                TUICPref.CSS = document.querySelector("#css_textarea").value;
                localStorage.setItem("TUIC", JSON.stringify(TUICPref));
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
                    TUICObserver.observerFunction
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

                if (rightBox.selectedIndex != -1) {
                    leftBox.appendChild(rightBox.children[rightBox.selectedIndex]);
                    TUICOptionHTML.upDownListSetting(parentBox);
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
                if (leftBox.selectedIndex != -1) {
                    rightBox.appendChild(leftBox.children[leftBox.selectedIndex]);
                    TUICOptionHTML.upDownListSetting(parentBox);
                }
            },
            "single": false
        },
        ".TUIC_up_down_list_to_up": {
            "type": "click",
            "function": function (event) {
                parentBox = event.currentTarget.parentElement.parentElement
                leftBox = parentBox.children[0].children[2]
                if (leftBox.selectedIndex > 0) {
                    leftBox.insertBefore(leftBox.children[leftBox.selectedIndex], leftBox.children[leftBox.selectedIndex - 1]);
                    TUICOptionHTML.upDownListSetting(parentBox);
                }
            },
            "single": false
        },
        ".TUIC_up_down_list_to_down": {
            "type": "click",
            "function": function (event) {
                parentBox = event.currentTarget.parentElement.parentElement
                leftBox = parentBox.children[0].children[2]
                if (leftBox.selectedIndex > -1) {
                    leftBox.insertBefore(leftBox.children[leftBox.selectedIndex], leftBox.children[leftBox.selectedIndex].nextSibling.nextSibling)
                    TUICOptionHTML.upDownListSetting(parentBox)
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
                let ListItem = TUICOptionHTML.upDownListItem(settingId, TUICData.settings["all"], TUICData.settings["title"])

                while(leftBox.childNodes.length != 0){
                    leftBox.childNodes[0].remove()
                }
                for( let elem of TUICLibrary.HTMLParseAll(ListItem[0])){
                    console.log(elem)
                    leftBox.appendChild(elem)
                }
                while(rightBox.childNodes.length != 0){
                    rightBox.childNodes[0].remove()
                }
                for( let elem of TUICLibrary.HTMLParseAll(ListItem[1])){
                    console.log(elem)
                    rightBox.appendChild(elem)

                }

                TUICOptionHTML.upDownListSetting(parentBox)
            },
            "single": false
        },
    },
    upDownListSetting(parentBox) {
        id = parentBox.getAttribute("TUICUDBox")
        let visible_button_list = []
        let visibleButtonsT = parentBox.children[0].children[2].querySelectorAll("option")
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
            <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0 TUIC_setting_text">Twitter UI Customizer</span>
            </h2>
${this.safemodeReturnButton()}
    </div>

    <div>
        <br><br>
${this.colorsList()}
${this.upDownList("visibleButtons", "ツイート下ボタンの並び替え", this.checkbox("bottomScroll",TUICPref.otherBoolSetting["bottomScroll"], "ツイート下ボタンにスクロールバーを表示", "otherBoolSetting"))}
        <br><br>
${this.upDownList("sidebarButtons", "サイドバーの並び替え",
this.checkbox("invisibleTwitterLogo",TUICPref.otherBoolSetting["invisibleTwitterLogo"], "Twitterロゴを非表示", "otherBoolSetting") +
this.checkbox("smallerSidebarContent",TUICPref.otherBoolSetting["smallerSidebarContent"] ?? true, "ボタン同士の幅を狭くする", "otherBoolSetting")
)}
        <br><br>
${this.checkboxList(TUICData.invisibles.all, TUICPref.invisibleItems, TUICData.invisibles.titles, "非表示設定", "TUICInvisibleItems")}
${this.checkboxList(["clientInfo"], { "clientInfo": TUICPref.otherBoolSetting.clientInfo }, { "clientInfo": "クライアント情報を表示" }, "クライアント情報 (廃止される可能性があります)", "otherBoolSetting")}
        <br><br>
        <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" id="default_set">全てデフォルトに戻す</button>
        <br><br>
        <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_title">カスタムCSS</h2><br>
        <div class="TUIC_col_setting_container">
            <form>
                <textarea id="css_textarea"></textarea>
            </form>
            <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" id="save">カスタムCSSを保存</button>
        </div>
    </div>
</div>

`
    },
    //セーフモードの戻るボタン(ただの条件分岐)
    safemodeReturnButton: function () {
        return window.location.pathname == "/tuic/safemode"
            ? `<a href="https://twitter.com" style="color:rgb(172,172,0);">&lt; 戻る</a>`
            : ""
    },
    //色の設定の一行(id,type:色のIDと種類。これで判別 color:rgba形式の色,text:色の名前)
    colorSetting: function (id, type, color, text) {
        let TUIC_color = color.replace("rgba(", "").replace(")", "").split(",")
        let TUICColor1 = TUICLibrary.color.rgb2hex([Number(TUIC_color[0]), Number(TUIC_color[1]), Number(TUIC_color[2])])
        return `
        <div class="TUIC_setting_color_colmn">
        <h4 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size:15px;">${text}</h4>
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
            }" class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size:15px;">透明色にする</label>
            <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_default TUICDfaultColor"
             TUICColor="${id}" TUICColorType="${type}">デフォルトに戻す</button>
        </div>
    </div>`
    },
    //色の設定のひとまとまり(id:色のID。種類・色はTUICPrefから自動補完される)
    threeColorSetting: function (id) {
        return `
<h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_title TUIC_setting_text">${TUICData.settings.colors.title[id]
            }
</h2>
<div class="TUIC_col_setting_container">
${this.colorSetting(id, "background", TUICPref.buttonColor[id]?.background ?? TUICData.colors[id].background, "背景色")}
${this.colorSetting(id, "border", TUICPref.buttonColor[id]?.border ?? TUICData.colors[id].border, "枠色")}
${this.colorSetting(id, "color", TUICPref.buttonColor[id]?.color ?? TUICData.colors[id].color, "文字色")}
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
            <label class="TUIC_setting_text" for="${id}">${name}</label>
        </div>
        `
    },
    //チェックボックスリスト(ids:ArrayでID values:Objectでbook names:Objectで名前 title:Stringでタイトル)
    checkboxList: function (ids, values, names, title, type) {
        let TUICInvisibleCheckBox = "";
        for (let i of ids) {
            TUICInvisibleCheckBox += this.checkbox(i, values[i], names[i], type)
        }
        return `
          <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_title">${title}</h2><br>
          <div class="TUIC_col_setting_container">
              ${TUICInvisibleCheckBox}
          </div>
          <br>
          `
    },
    //アップダウンリスト(id:設定のID。TUICPref直下 title:設定の名前, option:下に表示する設定)
    upDownList: function (id, title, option) {
        const UDAllValue = TUICData.settings[id].all
        let ListItem = this.upDownListItem(id)
        let TUICVisibleButtons = ListItem[0]
        let TUICInvisibleButtons = ListItem[1]
        return `
<h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_title">${title}</h2>

        <div class="TUIC_col_setting_container">
            <div style="display:flex" TUICUDBox="${id}">
                <div>
                    <h2 style="font-size:15px;" class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text">表示</h2><br>
                    <select id="TUIC_visible" class="TUIC_none_scroll TUIC_selectbox" size="${UDAllValue.length
            }">
${TUICVisibleButtons}
                    </select>
                </div>
                <div style="text-align: center;">
                    <br>
                    <br>
                    <button style="width:8em" class="TUIC_setting_text TUIC_setting_button TUIC_up_down_list_to_left">表示する</button><br>
                    <button style="width:8em" class="TUIC_setting_text TUIC_setting_button TUIC_up_down_list_to_up">上へ</button><br>
                    <button style="width:8em" class="TUIC_setting_text TUIC_setting_button TUIC_up_down_list_to_down">下へ</button><br>
                    <button style="width:8em" class="TUIC_setting_text TUIC_setting_button TUIC_up_down_list_to_right">非表示にする</button><br><br>
                    <button style="width:8em" class="TUIC_setting_text TUIC_setting_button TUIC_up_down_list_to_default">初期化</button><br>
                </div>
                <div>
                    <h2 style="font-size:15px;" class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text">非表示</h2><br>
                    <select id="TUIC_invisible" class="TUIC_none_scroll TUIC_selectbox" size="${UDAllValue.length
            }">
    ${TUICInvisibleButtons}
                    </select>
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
            TUICVisibleButtons += `<option value="${i}" id="${i}">${TUICData.settings[id].titles[i]}</option>`
        }
        for (let i of TUICData.settings[id].all) {
            if (!TUICPref[id].includes(i)) {
                TUICInvisibleButtons += `<option value="${i}" id="${i}">${TUICData.settings[id].titles[i]}</option>`
            }
        }
        return [TUICVisibleButtons, TUICInvisibleButtons]

    }
}

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
            document.title = "セーフモード / Twitter UI Customizer"
            TUICOptionHTML.displaySetting(document.querySelector('#safemode'))
        }
    }

}

function TUICCss() {
    let backgroundColor = TUICLibrary.backgroundColorCheck()

    document.querySelector("#twitter_ui_customizer").textContent = `
:root{
    --twitter-unsent-tweet-background: ${TUICPref.buttonColor["unsent-tweet"]?.background ?? TUICData.colors["unsent-tweet"].background};
    --twitter-unsent-tweet-border: ${TUICPref.buttonColor["unsent-tweet"]?.border ?? TUICData.colors["unsent-tweet"].border};
    --twitter-unsent-tweet-color: ${TUICPref.buttonColor["unsent-tweet"]?.color ?? TUICData.colors["unsent-tweet"].color};

    --twitter-not-following-background: ${TUICPref.buttonColor["not-following"]?.background ?? TUICData.colors["not-following"].background};
    --twitter-not-following-border: ${TUICPref.buttonColor["not-following"]?.border ?? TUICData.colors["not-following"].border};
    --twitter-not-following-color: ${TUICPref.buttonColor["not-following"]?.color ?? TUICData.colors["not-following"].color};

    --twitter-following-background: ${TUICPref.buttonColor["following"]?.background ?? TUICData.colors["following"].background};
    --twitter-following-border: ${TUICPref.buttonColor["following"]?.border ?? TUICData.colors["following"].border};
    --twitter-following-color: ${TUICPref.buttonColor["following"]?.color ?? TUICData.colors["following"].color};

    --twitter-un-following-background: ${TUICPref.buttonColor["un-following"]?.background ?? TUICData.colors["un-following"].background};
    --twitter-un-following-border: ${TUICPref.buttonColor["un-following"]?.border ?? TUICData.colors["un-following"].border};
    --twitter-un-following-color: ${TUICPref.buttonColor["un-following"]?.color ?? TUICData.colors["un-following"].color};

    --twitter-profile-background: ${TUICPref.buttonColor["profile"]?.background ?? TUICData.colors["profile"].background};
    --twitter-profile-border: ${TUICPref.buttonColor["profile"]?.border ?? TUICData.colors["profile"].border};
    --twitter-profile-color: ${TUICPref.buttonColor["profile"]?.color ?? TUICData.colors["profile"].color};

    --twitter-profile-save-background: ${TUICPref.buttonColor["profile-save"]?.background ?? TUICData.colors["profile-save"].background};
    --twitter-profile-save-border: ${TUICPref.buttonColor["profile-save"]?.border ?? TUICData.colors["profile-save"].border};
    --twitter-profile-save-color: ${TUICPref.buttonColor["profile-save"]?.color ?? TUICData.colors["profile-save"].color};

    --twitter-birthday-background: ${TUICPref.buttonColor["birthday"]?.background ?? TUICData.colors["birthday"].background};
    --twitter-birthday-border: ${TUICPref.buttonColor["birthday"]?.border ?? TUICData.colors["birthday"].border};
    --twitter-birthday-color: ${TUICPref.buttonColor["birthday"]?.color ?? TUICData.colors["birthday"].color};

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

/*色選択*/
.TUIC_setting_color_colmn {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
}
[tuicudbox="sidebarButtons"] > div > select > option{
    padding-right:1em;
    padding-left:1em;
}
/*設定画面の文字色*/
.TUIC_setting_text{
    color: var(--twitter-TUIC-color);
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
}
.TUIC_setting_button_default{
    width:10em;
    /*position:absolute;
    right:20px*/
}
.TUIC_none_scroll{
    scrollbar-width: none;
    -ms-overflow-style: none;
}
.TUIC_none_scroll::-webkit-scrollbar{display:none}
.${TUICLibrary.getClasses.TUICIvisibleClass()}{
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
    border: 1px solid #808080;
    border-radius: 6px;
    margin-bottom: 20px;
}

.${TUICLibrary.getClasses.TUICScrollBottom()} {
    overflow-x:auto;
scrollbar-width:thin;
padding-right:8px;
margin-right:-8px;
padding-left:8px;
margin-left:-8px;
padding-bottom:16px;
margin-bottom:-16px;
}

.${TUICLibrary.getClasses.TUICScrollBottom()}::-webkit-scrollbar {
height:8px
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
 [role="navigation"] .NOT_TUIC_DISPNONE{
    padding-bottom:0px !important;
    padding-top:0px !important;
}
 ` : ""}
`;

}

function TUICCustomCSS() {
    document.querySelector("#twitter_ui_customizer_css").textContent = TUICPref['CSS']
}

//ここから実際に動かしてゆく
let TUICPref = JSON.parse(localStorage.getItem("TUIC") ?? TUICLibrary.defaultPref.getString())

if (document.getElementById("react-root") != null) {
    chrome.runtime.sendMessage({ updateType: "openTwitter" });

    /*旧バージョンからのアップデート*/
    TUICLibrary.updatePref.update()
    /*Fin 旧バージョンからのアップデート*/

    TUICObserver.observer.observe(TUICObserver.target, TUICObserver.config);

    const bodyObserver = new MutationObserver(TUICRunFirst)
    bodyObserver.observe(document.querySelector("body"), { childList: false, subtree: false, attributes: true })
    TUICRunFirst()
}