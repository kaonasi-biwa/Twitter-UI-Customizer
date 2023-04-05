let TUICI18N;

const TUICData = {
    defaultPref: { "buttonColor": {}, "visibleButtons": ["reply-button", "retweet-button", "like-button", "downvote-button", "share-button", "tweet_analytics", "boolkmark", "url-copy"], "s/idebarButtons": ["home", "explore", "communities", "notifications", "messages", "bookmarks", "twiter-blue", "profile", "moremenu"], "invisibleItems": { "osusume-user-timeline": false }, "otherBoolSetting": { "bottomScroll": false ,"smallerSidebarContent":true },"clientInfo":{"clientInfoVisible":false},"twitterIcon":"invisible"},
    settings: {
        visibleButtons: {
            all: ["reply-button", "retweet-button", "like-button", "downvote-button", "share-button", "tweet_analytics", "boolkmark", "url-copy"],
            i18n: { "reply-button": "bottomTweetButtons-replay", "retweet-button": "bottomTweetButtons-retweet", "like-button": "bottomTweetButtons-like", "downvote-button": "bottomTweetButtons-downvote", "share-button": "bottomTweetButtons-share", "tweet_analytics": "bottomTweetButtons-tweetAnalytics", "boolkmark": "bottomTweetButtons-bookmark", "url-copy": "bottomTweetButtons-urlCopy" }
        },
        sidebarButtons: {
            all: ["home", "explore", "communities", "notifications", "messages", "bookmarks", "twiter-blue", "profile", "moremenu","topics","lists","circles"],
            i18n: { "home": "sidebarButtons-home", "explore": "sidebarButtons-explore", "communities": "sidebarButtons-communities", "notifications": "sidebarButtons-notifications", "messages": "sidebarButtons-messages", "bookmarks": "sidebarButtons-bookmarks", "twiter-blue": "sidebarButtons-twitterBlue", "profile": "sidebarButtons-profile", "moremenu": "sidebarButtons-moremenu","topics":"sidebarButtons-topics","lists":"sidebarButtons-lists","circles":"sidebarButtons-circles" }
        },
        colors: {
            id: ["unsent-tweet", "not-following", "following", "un-following", "profile", "profile-save", "birthday"],
            i18n: { "unsent-tweet": "settingColors-editUnsetTweet", "not-following": "settingColors-notFollowingButton", "following": "settingColors-followingButton", "un-following": "settingColors-unfollowButton", "profile": "settingColors-editProfile", "profile-save": "settingColors-saveProfile", "birthday": "settingColors-finalDecideButton" }
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
            "share-button": "[aria-label=\"ツイートを共有\"],[aria-label=\"Roinn an Tweet\"],[aria-label=\"مشاركة التغريدة\"],[aria-label=\"مشاركة التغريدة\"],[aria-label=\"Share Tweet\"],[aria-label=\"Condividi Tweet\"],[aria-label=\"Sebarkan Tweet\"],[aria-label=\"Поділитися твітом\"],[aria-label=\"ٹویٹ شیئر کریں\"],[aria-label=\"Tweet delen\"],[aria-label=\"Comparteix el tuit\"],[aria-label=\"Compartir chío\"],[aria-label=\"ಟ್ವೀಟ್ ಹಂಚಿಕೊಳ್ಳಿ\"],[aria-label=\"Κοινοποίηση Tweet\"],[aria-label=\"ટ્વીટ શેર કરો\"],[aria-label=\"Podijelite Tweet\"],[aria-label=\"Dela tweeten\"],[aria-label=\"Compartir Tweet\"],[aria-label=\"Zdieľať Tweet\"],[aria-label=\"Подели твит\"],[aria-label=\"แบ่งปันทวีต\"],[aria-label=\"கீச்சைப் பகிர்\"],[aria-label=\"Sdílet Tweet\"],[aria-label=\"Del tweetet\"],[aria-label=\"Tweet teilen\"],[aria-label=\"Tweet paylaş\"],[aria-label=\"Del tweeten\"],[aria-label=\"Partekatu txioa\"],[aria-label=\"Tweet megosztása\"],[aria-label=\"ट्वीट शेयर करें\"],[aria-label=\"Ibahagi ang Tweet\"],[aria-label=\"Jaa twiitti\"],[aria-label=\"Partager le Tweet\"],[aria-label=\"Споделяне на туита\"],[aria-label=\"Chia sẻ Tweet\"],[aria-label=\"שתף את הציוץ\"],[aria-label=\"هم‌رسانی توییت\"],[aria-label=\"টুইট শেয়ার করুন\"],[aria-label=\"Udostępnij Tweeta\"],[aria-label=\"Compartilhar Tweet\"],[aria-label=\"ट्विट शेअर करा\"],[aria-label=\"Kongsi Tweet\"],[aria-label=\"Distribuie Tweetul\"],[aria-label=\"Поделиться твитом\"],[aria-label=\"分享推文\"],[aria-label=\"分享推文\"],[aria-label=\"트윗 공유하기\"]",
            "tweet_analytics": "[aria-label*=\"ツイートアナリティクスを表示\"],[aria-label*=\"Breathnaigh ar anailísíocht an Tweet\"],[aria-label*=\"عرض تحليلات Twitter\"],[aria-label*=\"عرض تحليلات Twitter\"],[aria-label*=\"View Tweet analytics\"],[aria-label*=\"Visualizza statistiche Tweet\"],[aria-label*=\"Lihat analitik Tweet\"],[aria-label*=\"Переглянути аналітику твіта\"],[aria-label*=\"View Tweet analytics\"],[aria-label*=\"Tweet-analyses bekijken\"],[aria-label*=\"Mostra les analítiques del tuit\"],[aria-label*=\"Ver análises do chío\"],[aria-label*=\"ಟ್ವೀಟ್ ಅನಾಲಿಟಿಕ್ಸ್ ಅನ್ನು ನೋಡಿ\"],[aria-label*=\"Προβολή στοιχείων ανάλυσης Tweet\"],[aria-label*=\"ટ્વીટ વિશ્લેષણ જુઓ\"],[aria-label*=\"Prikaži analitičke podatke o tweetovima\"],[aria-label*=\"Visa Tweet-statistik\"],[aria-label*=\"Ver estadísticas del Tweet\"],[aria-label*=\"Zobraziť štatistiku Tweetu\"],[aria-label*=\"Погледај аналитику твита\"],[aria-label*=\"ดูการวิเคราะห์ทวีต\"],[aria-label*=\"கீச்சுப் பகுப்பாய்வைக் காட்டு\"],[aria-label*=\"Zobrazit analýzu tweetů\"],[aria-label*=\"Vis Tweet-statistik\"],[aria-label*=\"Tweet-Statistiken anzeigen\"],[aria-label*=\"Tweet istatistiklerini görüntüle\"],[aria-label*=\"Se tweetstatistikk\"],[aria-label*=\"Ikusi txioen analisiak\"],[aria-label*=\"Tweet-elemzések megtekintése\"],[aria-label*=\"ट्वीट विश्लेषण देखें\"],[aria-label*=\"Tingnan ang analytics ng Tweet\"],[aria-label*=\"Näytä twiitin tilastot\"],[aria-label*=\"Voir les statistiques des Tweets\"],[aria-label*=\"Преглед на статистиката за туита\"],[aria-label*=\"Xem phân tích Tweet\"],[aria-label*=\"הצג את ניתוח הציוצים\"],[aria-label*=\"مشاهده اطلاعات آماری توییت\"],[aria-label*=\"টুইটের বিশ্লেষণ দেখুন\"],[aria-label*=\"Zobacz statystyki dotyczące Tweeta\"],[aria-label*=\"Ver estatísticas do Tweet\"],[aria-label*=\"ट्विटची विश्लेषणे पहा\"],[aria-label*=\"Lihat analitis Tweet\"],[aria-label*=\"Vezi analiza Tweet\"],[aria-label*=\"Смотреть аналитику твита\"],[aria-label*=\"查看推文分析\"],[aria-label*=\"查看推文分析\"],[aria-label*=\"트윗 애널리틱스 보기\"]",
            "boolkmark": `[TUICButton="bookmark"],[data-testid="bookmark"],[data-testid="removeBookmark"]`,
            "url-copy": `[TUICButton="urlCopy"]`,
        },
        buttonHTML: {
            "boolkmark": function () {
                return `
            <div class="css-1dbjc4n" style="display: inline-grid;justify-content: inherit;transform: rotate(0deg) scale(1) translate3d(0px, 0px, 0px);-moz-box-pack: inherit;">
                <div class="css-1dbjc4n r-18u37iz r-1h0z5md">
                  <div
                    TUICButton="bookmark"
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
          TUICButton="urlCopy"
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
                shareButtonClick.click()
                let urlCopyButton = document.querySelector(`[d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"]:not(.TUIC_URL),
                [d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"]:not(.TUIC_URL)`)
                if (urlCopyButton == null) {
                    shareButtonClick.click()
                } else {
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
            "notifications": `[href$="/notifications"]`,
            "messages": `[href^="/messages"]`,
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
                    <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0">${TUICLibrary.getI18n("sidebarButtons-topics")}</span>
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
                    <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0">${TUICLibrary.getI18n("sidebarButtons-lists")}</span>
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
                    <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0">${TUICLibrary.getI18n("sidebarButtons-circles")}</span>
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
    invisibleItems: {
        all: ["osusume-user-timeline"],
        i18n: { "osusume-user-timeline": "invisibleItems-osusumeUsersOnTL" }
    },
    clientInfo: {
        all: ["clientInfoVisible"],
        i18n: { "clientInfoVisible": "clientInfo-clientInfoVisible" }
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
    },
    twitterIcon:{
        all:["nomal","invisible","dog","twitter","custom"],
        i18n:{
            "nomal":"twitterIcon-nomal",
            "invisible":"twitterIcon-invisible",
            "dog":"twitterIcon-dog",
            "twitter":"twitterIcon-twitter",
            "custom":"twitterIcon-custom"
        }
    },
    twitterIconSVG:""
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
        TUICScrollBottom: function () {
            return "TUIC_SCROLL_BOTTOM" + TUICLibrary.query
        },
        getClass:function(id){
            return id + this.query
        },
        update: function () {
            this.query += "_"
            TUICCss()
            TUICObserver.observerFunction()
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

            if(TUICPref.otherBoolSetting.clientInfo == true){
                TUICPref.clientInfo = {}
                TUICPref.clientInfo.clientInfoVisible = true
            }
            delete TUICPref.otherBoolSetting.clientInfo
            if(TUICPref.otherBoolSetting.invisibleTwitterLogo == true){
                TUICPref.twitterIcon = "invisible"
            }
            delete TUICPref.otherBoolSetting.invisibleTwitterLogo
            if("CSS" in TUICPref){
                localStorage.setItem("TUIC_CSS", TUICPref.CSS)
            }
            delete TUICPref.CSS

            this.updateToDefault(TUICPref,dPref)
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
        updateToDefault:function(object,defObject){
            for (let i in defObject) {
                if (!(i in object)) {
                    object[i] = defObject[i]
                }else if(typeof defObject.i == "object"){
                    this.updateToDefault(object[i],defObject[i])
                }
            }
        }
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
    },
    getI18n:function(elem){
        let lang = document.querySelector("html").getAttribute("lang").toLowerCase()
        if(lang in TUICI18N && elem in TUICI18N[lang]){
            return TUICI18N[lang][elem].escapeToUseHTML()
        }else if(elem in TUICI18N.en){
            return TUICI18N.en[elem].escapeToUseHTML()
        }else{
            return TUICI18N.ja[elem].escapeToUseHTML()
        }
    },
    escapeToUseHTML:function(text){
        return text.replace(/[&'`"<>=;]/g, function(match) {
            return {
              '&': '&amp;',
              "'": '&#x27;',
              '`': '&#x60;',
              '"': '&quot;',
              '<': '&lt;',
              '>': '&gt;',
              '=': '&equals;',
              ";": "&semi;",
            }[match]
          });
    }
}

String.prototype.escapeToUseHTML = function(){return TUICLibrary.escapeToUseHTML(this)}

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
            if (bannerRoot != null && bannerRoot.querySelector(`a:not(.${"NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}):not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")})`) != null) {
                for (const i of TUICPref.sidebarButtons) {
                    let moveElem = bannerRoot.querySelector(TUICData.sidebarButtons.selectors[i])
                    if(moveElem != null){
                        bannerRoot.appendChild(moveElem)
                        moveElem.classList.add("NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE"))
                    }else if(i in TUICData.sidebarButtons.html){
                        moveElem =TUICLibrary.HTMLParse(TUICData.sidebarButtons.html[i]())
                        moveElem.classList.add("NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE"))
                        moveElem.onclick = TUICData.sidebarButtons.buttonFunctions[i]
                        bannerRoot.appendChild(moveElem)
                    }
                }
                for (const i of TUICData.settings.sidebarButtons.all) {
                    if(!TUICPref.sidebarButtons.includes(i)){
                        const moveElem = bannerRoot.querySelector(TUICData.sidebarButtons.selectors[i])
                        if(moveElem != null) moveElem.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
                    }

                }
                switch(TUICPref.twitterIcon){
                    case "invisible":
                        document.querySelector(`header [role="heading"]`).classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"))
                        break
                    case "twitter":
                        document.querySelector(`header h1 a > div > svg`).classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"))
                        document.querySelector(`header h1 a > div`).classList.add(TUICLibrary.getClasses.getClass("TUICTwitterIcon_Twitter"))
                        break;
                    case "dog":
                        document.querySelector(`header h1 a > div > svg`).classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"))
                        document.querySelector(`header h1 a > div`).classList.add(TUICLibrary.getClasses.getClass("TUICTwitterIcon_Dog"))
                        break;
                    case "custom":
                        document.querySelector(`header h1 a > div > svg`).classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"))
                        document.querySelector(`header h1 a > div`).classList.add(TUICLibrary.getClasses.getClass("TUICTwitterIcon_IconImg"))
                    default:
                        break
                }
            }
        },
        buttonUnderTweet:function(){
            let articles = document.querySelectorAll(`article:not([TUIC_ARTICLE="${TUICLibrary.getClasses.getClass("TUICDidArticle")}"])`)
            if (articles.length != 0) {
                articles.forEach(function (elem) {
                    if (elem.querySelector("[data-testid$=\"reply\"]") != null && elem.querySelector("[data-testid$=\"like\"]") != null) {
                        let bar_base = elem.querySelector("[data-testid$=\"reply\"]")
                        while (bar_base.querySelector("[data-testid$=\"like\"]") == null) {
                            bar_base = bar_base.parentElement
                        }
                        if (TUICPref.otherBoolSetting.bottomScroll) bar_base.parentElement.classList.add(TUICLibrary.getClasses.getClass("TUICScrollBottom"))
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
                                bar_item[TUICData.settings.visibleButtons.all[i]].classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
                            }
                        }
                    }
                    elem.setAttribute("TUIC_ARTICLE", TUICLibrary.getClasses.getClass("TUICDidArticle"))
                })
            }
        },
        osusumeUser:function(){
            if (TUICPref.invisibleItems["osusume-user-timeline"] && location.search.indexOf("f=user") == -1 && location.href != "https://twitter.com/settings/device_follow") {
                let cells = document.querySelectorAll(`div[data-testid="cellInnerDiv"]:not(.${TUICLibrary.getClasses.getClass("TUICDidArticle")}):not([aria-labelledby="modal-header"] > div > div > div > section > div > div > div):not([aria-labelledby="modal-header"] > div > div > div > div > div > div > div):not([aria-labelledby="modal-header"] > div > div > div > div > div > div):not([data-testid="primaryColumn"] > div > section > div > div > div)`)
                if (cells.length != 0) {
                    cells.forEach(function (elem) {
                        if (elem.querySelector(`[data-testid="UserCell"]`) != null && elem.getAttribute("TUIC_ARTICLE") != TUICLibrary.getClasses.getClass("TUICDidArticle")) {
                            elem.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"))
                            if (elem.previousElementSibling != null && elem.previousElementSibling.querySelector(`[data-testid="UserCell"]`) == null) {
                                if (elem.previousElementSibling != null) elem.previousElementSibling.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"))
                                if (elem.previousElementSibling.previousElementSibling != null) elem.previousElementSibling.previousElementSibling.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"))
                            }
                            let cellElement = elem.nextElementSibling
                            while (cellElement != null && cellElement.querySelector(`[href^="/search?q="]`) == null && cellElement.querySelector(`[href^="/i/connect_people?user_id="]`) == null) {
                                cellElement.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"))
                                cellElement = cellElement.nextElementSibling
                            }
                            if (cellElement != null) cellElement.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"))
                        }
                    })
                }
            }
        },
        clientInfo:function(){
            if (document.getElementById("client-info") == null && TUICPref.clientInfo.clientInfoVisible && !isNaN((new URL(location.href)).pathname.split('/')[3]) && document.getElementsByClassName("css-1dbjc4n r-1d09ksm r-1471scf r-18u37iz r-1wbh5a2").length >= 1) {
                TUICObserver.functions.clientInfoVisible()
            } else if (document.getElementById("client-info") != null && !TUICPref.clientInfo.clientInfoVisible) {
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
                    type:"clientInfo",
                    endpoint: 'https://mico.re/api/getclient.php?id=' + (new URL(location.href)).pathname.split('/')[3]
                },
                (response) => {
                        json = response;
                        let cliantInfoElem = document.querySelector("#client-info")
                        console.log(json.source)
                        if (json.source ?? "unknwon" != "unknwon") {
                            cliantInfoElem.textContent = json.source.replace("</a>", "").split(">")[1];
                        }else{
                            cliantInfoElem.textContent = TUICLibrary.getI18n("clientInfo-cannotGetInfo")
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
                let ListItem = TUICOptionHTML.upDownListItem(settingId)

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
        }
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

${this.radioButtonList("twitterIcon", "twitterIcon-settingTitle", "TUICRadio",this.uploadImageFile("twitterIcon-usedIcon","IconImg"))}

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
    colorSetting: function (id, type, color_, text) {
        let [color] = [color_.escapeToUseHTML()]
        let TUIC_color = color.replace("rgba(", "").replace(")", "").split(",")
        let TUICColor1 = TUICLibrary.color.rgb2hex([Number(TUIC_color[0]), Number(TUIC_color[1]), Number(TUIC_color[2])])
        return `
        <div class="TUIC_setting_color_colmn">
        <h4 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size:15px;">${TUICLibrary.getI18n(text)}</h4>
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
            }" class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size:15px;">${TUICLibrary.getI18n("settingUI-colorPicker-transport")}</label>
            <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_default TUICDfaultColor"
             TUICColor="${id}" TUICColorType="${type}">${TUICLibrary.getI18n("settingUI-colorPicker-restoreDefault")}</button>
        </div>
    </div>`
    },
    //色の設定のひとまとまり(id:色のID。種類・色はTUICPrefから自動補完される)
    threeColorSetting: function (id) {
        return `
<h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_title TUIC_setting_text">${TUICLibrary.getI18n(TUICData.settings.colors.i18n[id])}</h2>
<div class="TUIC_col_setting_container">
${this.colorSetting(id, "background", TUICPref.buttonColor[id]?.background ?? TUICData.colors[id].background, "settingUI-colorPicker-background")}
${this.colorSetting(id, "border", TUICPref.buttonColor[id]?.border ?? TUICData.colors[id].border, "settingUI-colorPicker-border")}
${this.colorSetting(id, "color", TUICPref.buttonColor[id]?.color ?? TUICData.colors[id].color, "settingUI-colorPicker-textColor")}
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
            console.log(i)

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
    //アップダウンリスト(id:設定のID。TUICPref直下 title:設定の名前, option:下に表示する設定)
    upDownList: function (id, title, option) {
        const UDAllValue = TUICData.settings[id].all
        let ListItem = this.upDownListItem(id)
        let TUICVisibleButtons = ListItem[0]
        let TUICInvisibleButtons = ListItem[1]
        return `
<h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_title">${TUICLibrary.getI18n(title)}</h2>

        <div class="TUIC_col_setting_container">
            <div style="display:flex" TUICUDBox="${id}">
                <div>
                    <h2 style="font-size:15px;" class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text">${TUICLibrary.getI18n("settingUI-upDownList-visible")}</h2><br>
                    <select id="TUIC_visible" class="TUIC_none_scroll TUIC_selectbox" size="${UDAllValue.length}">
${TUICVisibleButtons}
                    </select>
                </div>
                <div style="text-align: center;">
                    <br>
                    <br>
                    <button style="width:8em" class="TUIC_setting_text TUIC_setting_button TUIC_up_down_list_to_left">${TUICLibrary.getI18n("settingUI-upDownList-toLeft")}</button><br>
                    <button style="width:8em" class="TUIC_setting_text TUIC_setting_button TUIC_up_down_list_to_up">${TUICLibrary.getI18n("settingUI-upDownList-toUp")}</button><br>
                    <button style="width:8em" class="TUIC_setting_text TUIC_setting_button TUIC_up_down_list_to_down">${TUICLibrary.getI18n("settingUI-upDownList-toDown")}</button><br>
                    <button style="width:8em" class="TUIC_setting_text TUIC_setting_button TUIC_up_down_list_to_right">${TUICLibrary.getI18n("settingUI-upDownList-toRight")}</button><br><br>
                    <button style="width:8em" class="TUIC_setting_text TUIC_setting_button TUIC_up_down_list_to_default">${TUICLibrary.getI18n("settingUI-upDownList-restoreDefault")}</button><br>
                </div>
                <div>
                    <h2 style="font-size:15px;" class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text">${TUICLibrary.getI18n("settingUI-upDownList-invisible")}</h2><br>
                    <select id="TUIC_invisible" class="TUIC_none_scroll TUIC_selectbox" size="${UDAllValue.length}">
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
            TUICVisibleButtons += `<option value="${i}" id="${i}">${TUICLibrary.getI18n(TUICData.settings[id].i18n[i])}</option>`
        }
        for (let i of TUICData.settings[id].all) {
            if (!TUICPref[id].includes(i)) {
                TUICInvisibleButtons += `<option value="${i}" id="${i}">${TUICLibrary.getI18n(TUICData.settings[id].i18n[i])}</option>`
            }
        }
        return [TUICVisibleButtons, TUICInvisibleButtons]

    },
    uploadImageFile:function(title,id){
        return `<h3 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_title">${TUICLibrary.getI18n(title)}</h3><br>
        <input type="file" accept="image/*" class="TUIC_setting_text TUICSelectImg" TUICImgID="${id}" />
        <p class="TUIC_setting_text">${TUICLibrary.getI18n("twiterIcon-nowIcon")}</p>
        <img id="TUICIcon_${id}" class="TUICUploadedImg">`
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
            let setTitle = ()=>{
                document.title = TUICLibrary.getI18n("safemode-title")
                window.setTimeout(setTitle,5000)
            }
            setTitle()
            TUICOptionHTML.displaySetting(document.querySelector('#safemode'))
        }
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

.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_Twitter")},
.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_Dog")},
.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_IconImg")},
.TUICUploadedImg{
    margin: 8px;
    background-size: cover;
}
.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_Dog")}{
    background-image:url('data:image/png;base64,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');
}

.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_Twitter")}{
    mask-size: cover !important;
    background-color:var(--twitter-TUIC-color);
    mask:${TUICData.twitterIconSVG};
}

.${TUICLibrary.getClasses.getClass("TUICTwitterIcon_IconImg")},
#TUICIcon_IconImg{
    background-image:url('${localStorage.getItem("TUIC_IconImg") ?? ""}');
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

//ここから実際に動かしてゆく
let TUICPref = JSON.parse(localStorage.getItem("TUIC") ?? TUICLibrary.defaultPref.getString())


if (document.getElementById("react-root") != null) {
    (async () => {
        await (new Promise((resolve, reject) => {
            chrome.runtime.sendMessage({type:"getI18n"},(response) => {
                TUICI18N = JSON.parse(response);
                resolve();
            });
        }))
        TUICData.twitterIconSVG = `url('data:image/svg+xml;charset=UTF-8,${ (await (await fetch(document.querySelector(`[rel="mask-icon"]`).href)).text()).replace(`<?xml version="1.0" encoding="utf-8"?>`,"").replace(/[#\r\n]/g, function(match) {
            return {
              '#': '&amp;',
              "\r": '',
              "\n": '',
            }[match]
          })}')`
        console.log(TUICLibrary.getI18n("@JapaneseLanguageName"))
        chrome.runtime.sendMessage({type:"update", updateType: "openTwitter" });

        /*旧バージョンからのアップデート*/
        TUICLibrary.updatePref.update()
        /*Fin 旧バージョンからのアップデート*/
    
        TUICObserver.observer.observe(TUICObserver.target, TUICObserver.config);
    
        const bodyObserver = new MutationObserver(TUICRunFirst)
        bodyObserver.observe(document.querySelector("body"), { childList: false, subtree: false, attributes: true })
        TUICRunFirst()
    })()
}