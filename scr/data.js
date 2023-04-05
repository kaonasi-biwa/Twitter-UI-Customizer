const TUICData = {
    defaultPref: { "buttonColor": {}, "visibleButtons": ["reply-button", "retweet-button", "like-button", "downvote-button", "share-button", "tweet_analytics", "boolkmark", "url-copy"], "sidebarButtons": ["home", "explore", "communities", "notifications", "messages", "bookmarks", "twiter-blue", "profile", "moremenu"], "invisibleItems": { "osusume-user-timeline": false }, "otherBoolSetting": { "bottomScroll": false ,"smallerSidebarContent":true,"roundIcon":true },"clientInfo":{"clientInfoVisible":false},"twitterIcon":"nomal"},
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
    twitterIconSVG:`url('data:image/svg+xml;charset=UTF-8,<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"72\" height=\"72\" viewBox=\"0 0 72 72\" enable-background=\"new 0 0 72 72\" xml:space=\"preserve\"><g id=\"bounds\"><rect opacity=\"0\" width=\"72\" height=\"72\"/></g><g id=\"icon\"><path d=\"M67.812,16.141c-2.348,1.039-4.869,1.743-7.519,2.06c2.703-1.62,4.778-4.187,5.756-7.244c-2.529,1.5-5.33,2.592-8.313,3.176C55.349,11.591,51.948,10,48.182,10c-7.229,0-13.092,5.861-13.092,13.093c0,1.026,0.118,2.021,0.338,2.981C24.543,25.526,14.9,20.317,8.441,12.395c-1.126,1.936-1.771,4.184-1.771,6.581c0,4.542,2.312,8.551,5.824,10.898c-2.146-0.069-4.165-0.657-5.93-1.638c-0.002,0.055-0.002,0.11-0.002,0.162c0,6.345,4.513,11.638,10.504,12.84c-1.101,0.298-2.256,0.457-3.449,0.457c-0.846,0-1.667-0.078-2.465-0.231c1.667,5.2,6.499,8.986,12.23,9.09C18.9,54.066,13.253,56.16,7.122,56.16c-1.055,0-2.096-0.061-3.122-0.184c5.794,3.717,12.676,5.882,20.067,5.882c24.083,0,37.251-19.949,37.251-37.249c0-0.566-0.014-1.134-0.039-1.694C63.838,21.068,66.058,18.765,67.812,16.141z\"/></g></svg>') `
}