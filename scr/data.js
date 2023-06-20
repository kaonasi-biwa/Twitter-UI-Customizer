
const TUICData = {
  defaultPref: { "buttonColor": {}, "buttonColorLight": {}, "buttonColorDark": {}, "visibleButtons": ["reply-button", "retweet-button", "like-button", "share-button", "tweet_analytics", "boolkmark", "url-copy"], "sidebarButtons": ["home", "explore", "communities", "notifications", "messages", "bookmarks", "twiter-blue", "profile", "moremenu"], "invisibleItems": { "osusume-user-timeline": false, "twitter-pro-promotion-btn": false,"discoverMore":false,"verified-rSidebar":false,"subscribe-profile":false,"subscribe-tweets":false }, "otherBoolSetting": { "bottomScroll": false, "smallerSidebarContent": true, "roundIcon": true, "bottomSpace": false }, "clientInfo": { "clientInfoVisible": false }, "twitterIcon": "nomal" },
  settings: {
    visibleButtons: {
      all: ["reply-button", "retweet-button", "like-button", "share-button", "tweet_analytics", "boolkmark", "url-copy"],
      i18n: { "reply-button": "bottomTweetButtons-replay", "retweet-button": "bottomTweetButtons-retweet", "like-button": "bottomTweetButtons-like", "share-button": "bottomTweetButtons-share", "tweet_analytics": "bottomTweetButtons-tweetAnalytics", "boolkmark": "bottomTweetButtons-bookmark", "url-copy": "bottomTweetButtons-urlCopy" }
    },
    sidebarButtons: {
      all: ["home", "explore", "communities", "notifications", "messages", "bookmarks", "twiter-blue", "profile", "moremenu", "topics", "lists", "circles","drafts","connect","communitynotes","verified-choose"],
      i18n: { "home": "sidebarButtons-home", "explore": "sidebarButtons-explore", "communities": "sidebarButtons-communities", "notifications": "sidebarButtons-notifications", "messages": "sidebarButtons-messages", "bookmarks": "sidebarButtons-bookmarks", "twiter-blue": "sidebarButtons-twitterBlue", "profile": "sidebarButtons-profile", "moremenu": "sidebarButtons-moremenu", "topics": "sidebarButtons-topics", "lists": "sidebarButtons-lists", "circles": "sidebarButtons-circles", "drafts": "sidebarButtons-drafts", "connect": "sidebarButtons-connect","communitynotes": "sidebarButtons-communitynotes","verified-choose":"sidebarButtons-verified-choose" }
    },
    colors: {
      id: ["unsent-tweet", "not-following", "willFollow", "following", "un-following","blocking","blocking-unlock", "profile", "profile-save", "birthday"],
      i18n: { "unsent-tweet": "settingColors-editUnsetTweet", "willFollow": "settingColors-willFollowButton", "not-following": "settingColors-notFollowingButton", "following": "settingColors-followingButton", "un-following": "settingColors-unfollowButton", "profile": "settingColors-editProfile", "profile-save": "settingColors-saveProfile", "birthday": "settingColors-finalDecideButton","blocking":"settingColors-blocking","blocking-unlock":"settingColors-blockingUnlock" }
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
    "willFollow": {
      "background": "rgba(29,161,242,1)",
      "border": "rgba(29,161,242,1)",
      "color": "rgba(255,255,255,1)"
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
    },
    "birthday": {
      "background": "rgba(255,0,0,1)",
      "border": "rgba(255,0,0,1)",
      "color": "rgba(255,255,255,1)"
    },"blocking":{
      "background":"rgba(244, 33, 46,1)",
      "border":"rgba(244, 33, 46,1)",
      "color":"rgba(255, 255, 255,1)"
    }
    ,"blocking-unlock":{
      "background":"rgba(220, 30, 41,1)",
      "border":"rgba(220, 30, 41,1)",
      "color":"rgba(255, 255, 255,1)"
    }
  },
  visibleButtons: {
    selectors: {
      "reply-button": "[data-testid$=\"reply\"]",
      "retweet-button": "[data-testid$=\"retweet\"]",
      "like-button": "[data-testid$=\"like\"]",
      "share-button": "[aria-label=\"ツイートを共有\"],[aria-label=\"Roinn an Tweet\"],[aria-label=\"مشاركة التغريدة\"],[aria-label=\"مشاركة التغريدة\"],[aria-label=\"Share Tweet\"],[aria-label=\"Condividi Tweet\"],[aria-label=\"Sebarkan Tweet\"],[aria-label=\"Поділитися твітом\"],[aria-label=\"ٹویٹ شیئر کریں\"],[aria-label=\"Tweet delen\"],[aria-label=\"Comparteix el tuit\"],[aria-label=\"Compartir chío\"],[aria-label=\"ಟ್ವೀಟ್ ಹಂಚಿಕೊಳ್ಳಿ\"],[aria-label=\"Κοινοποίηση Tweet\"],[aria-label=\"ટ્વીટ શેર કરો\"],[aria-label=\"Podijelite Tweet\"],[aria-label=\"Dela tweeten\"],[aria-label=\"Compartir Tweet\"],[aria-label=\"Zdieľať Tweet\"],[aria-label=\"Подели твит\"],[aria-label=\"แบ่งปันทวีต\"],[aria-label=\"கீச்சைப் பகிர்\"],[aria-label=\"Sdílet Tweet\"],[aria-label=\"Del tweetet\"],[aria-label=\"Tweet teilen\"],[aria-label=\"Tweet paylaş\"],[aria-label=\"Del tweeten\"],[aria-label=\"Partekatu txioa\"],[aria-label=\"Tweet megosztása\"],[aria-label=\"ट्वीट शेयर करें\"],[aria-label=\"Ibahagi ang Tweet\"],[aria-label=\"Jaa twiitti\"],[aria-label=\"Partager le Tweet\"],[aria-label=\"Споделяне на туита\"],[aria-label=\"Chia sẻ Tweet\"],[aria-label=\"שתף את הציוץ\"],[aria-label=\"هم‌رسانی توییت\"],[aria-label=\"টুইট শেয়ার করুন\"],[aria-label=\"Udostępnij Tweeta\"],[aria-label=\"Compartilhar Tweet\"],[aria-label=\"ट्विट शेअर करा\"],[aria-label=\"Kongsi Tweet\"],[aria-label=\"Distribuie Tweetul\"],[aria-label=\"Поделиться твитом\"],[aria-label=\"分享推文\"],[aria-label=\"分享推文\"],[aria-label=\"트윗 공유하기\"]",
      "tweet_analytics": "[aria-label*=\"ツイートアナリティクスを表示\"],[aria-label*=\"Breathnaigh ar anailísíocht an Tweet\"],[aria-label*=\"عرض تحليلات Twitter\"],[aria-label*=\"عرض تحليلات Twitter\"],[aria-label*=\"View Tweet analytics\"],[aria-label*=\"Visualizza statistiche Tweet\"],[aria-label*=\"Lihat analitik Tweet\"],[aria-label*=\"Переглянути аналітику твіта\"],[aria-label*=\"View Tweet analytics\"],[aria-label*=\"Tweet-analyses bekijken\"],[aria-label*=\"Mostra les analítiques del tuit\"],[aria-label*=\"Ver análises do chío\"],[aria-label*=\"ಟ್ವೀಟ್ ಅನಾಲಿಟಿಕ್ಸ್ ಅನ್ನು ನೋಡಿ\"],[aria-label*=\"Προβολή στοιχείων ανάλυσης Tweet\"],[aria-label*=\"ટ્વીટ વિશ્લેષણ જુઓ\"],[aria-label*=\"Prikaži analitičke podatke o tweetovima\"],[aria-label*=\"Visa Tweet-statistik\"],[aria-label*=\"Ver estadísticas del Tweet\"],[aria-label*=\"Zobraziť štatistiku Tweetu\"],[aria-label*=\"Погледај аналитику твита\"],[aria-label*=\"ดูการวิเคราะห์ทวีต\"],[aria-label*=\"கீச்சுப் பகுப்பாய்வைக் காட்டு\"],[aria-label*=\"Zobrazit analýzu tweetů\"],[aria-label*=\"Vis Tweet-statistik\"],[aria-label*=\"Tweet-Statistiken anzeigen\"],[aria-label*=\"Tweet istatistiklerini görüntüle\"],[aria-label*=\"Se tweetstatistikk\"],[aria-label*=\"Ikusi txioen analisiak\"],[aria-label*=\"Tweet-elemzések megtekintése\"],[aria-label*=\"ट्वीट विश्लेषण देखें\"],[aria-label*=\"Tingnan ang analytics ng Tweet\"],[aria-label*=\"Näytä twiitin tilastot\"],[aria-label*=\"Voir les statistiques des Tweets\"],[aria-label*=\"Преглед на статистиката за туита\"],[aria-label*=\"Xem phân tích Tweet\"],[aria-label*=\"הצג את ניתוח הציוצים\"],[aria-label*=\"مشاهده اطلاعات آماری توییت\"],[aria-label*=\"টুইটের বিশ্লেষণ দেখুন\"],[aria-label*=\"Zobacz statystyki dotyczące Tweeta\"],[aria-label*=\"Ver estatísticas do Tweet\"],[aria-label*=\"ट्विटची विश्लेषणे पहा\"],[aria-label*=\"Lihat analitis Tweet\"],[aria-label*=\"Vezi analiza Tweet\"],[aria-label*=\"Смотреть аналитику твита\"],[aria-label*=\"查看推文分析\"],[aria-label*=\"查看推文分析\"],[aria-label*=\"트윗 애널리틱스 보기\"]",
      "boolkmark": `[TUICButton="bookmark"],[data-testid="bookmark"],[data-testid="removeBookmark"]`,
      "url-copy": `[TUICButton="urlCopy"]`,
    },
    buttonHTML: {
      "_base":function(id,svg){
        return `
        <div class="css-1dbjc4n" style="display: inline-grid;justify-content: inherit;transform: rotate(0deg) scale(1) translate3d(0px, 0px, 0px);-moz-box-pack: inherit;">
            <div class="css-1dbjc4n r-18u37iz r-1h0z5md">
              <div
                TUICButton="${id}"
                role="button"
                tabindex="0"
                class="css-18t94o4 css-1dbjc4n r-1777fci r-bt1l66 r-1ny4l3l r-bztko3 r-lrvibr"
              >
                <div
                  dir="ltr"
                  class="css-901oao r-1awozwy r-115tad6 r-6koalj r-37j5jr r-a023e6 r-16dba41 r-1h0z5md r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0 ${TUICLibrary.fontSizeClass("r-1b43r93","r-hjklzo","r-rjixqe","r-1inkyih","r-1i10wst")} TUIC_ButtonHover2"
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
                        ${svg}
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
        </div>`
      },
      "boolkmark": function () {
        return TUICData.visibleButtons.buttonHTML._base("bookmark",`<path d="M23.074 3.35H20.65V.927c0-.414-.337-.75-.75-.75s-.75.336-.75.75V3.35h-2.426c-.414 0-.75.337-.75.75s.336.75.75.75h2.425v2.426c0 .414.335.75.75.75s.75-.336.75-.75V4.85h2.424c.414 0 .75-.335.75-.75s-.336-.75-.75-.75zM19.9 10.744c-.415 0-.75.336-.75.75v9.782l-6.71-4.883c-.13-.095-.285-.143-.44-.143s-.31.048-.44.144l-6.71 4.883V5.6c0-.412.337-.75.75-.75h6.902c.414 0 .75-.335.75-.75s-.336-.75-.75-.75h-6.9c-1.242 0-2.25 1.01-2.25 2.25v17.15c0 .282.157.54.41.668.25.13.553.104.78-.062L12 17.928l7.458 5.43c.13.094.286.143.44.143.117 0 .234-.026.34-.08.252-.13.41-.387.41-.67V11.495c0-.414-.335-.75-.75-.75z" class="TUIC_BOOKMARK"></path>`)
      },
      "url-copy": function () {
        return TUICData.visibleButtons.buttonHTML._base("urlCopy",`<path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z" class="TUIC_URL"></path><path d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z"></path>`)
      }
    },
    buttonFunction: {
      "boolkmark": function (e) {
        e.currentTarget.parentElement.parentElement.querySelector(TUICData.visibleButtons.selectors["share-button"]).click();
        document.querySelector(
          `[d="M23.074 3.35H20.65V.927c0-.414-.337-.75-.75-.75s-.75.336-.75.75V3.35h-2.426c-.414 0-.75.337-.75.75s.336.75.75.75h2.425v2.426c0 .414.335.75.75.75s.75-.336.75-.75V4.85h2.424c.414 0 .75-.335.75-.75s-.336-.75-.75-.75zM19.9 10.744c-.415 0-.75.336-.75.75v9.782l-6.71-4.883c-.13-.095-.285-.143-.44-.143s-.31.048-.44.144l-6.71 4.883V5.6c0-.412.337-.75.75-.75h6.902c.414 0 .75-.335.75-.75s-.336-.75-.75-.75h-6.9c-1.242 0-2.25 1.01-2.25 2.25v17.15c0 .282.157.54.41.668.25.13.553.104.78-.062L12 17.928l7.458 5.43c.13.094.286.143.44.143.117 0 .234-.026.34-.08.252-.13.41-.387.41-.67V11.495c0-.414-.335-.75-.75-.75z"]:not(.TUIC_BOOKMARK),
                [d="M17 3V0h2v3h3v2h-3v3h-2V5h-3V3h3zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z"]:not(.TUIC_BOOKMARK),
                [d="M19.9 10.744c-.415 0-.75.336-.75.75v9.782l-6.71-4.883c-.13-.095-.285-.143-.44-.143s-.31.048-.44.144l-6.71 4.883V5.6c0-.412.337-.75.75-.75h6.902c.414 0 .75-.335.75-.75s-.336-.75-.75-.75h-6.9c-1.242 0-2.25 1.01-2.25 2.25v17.15c0 .282.157.54.41.668.25.13.553.104.78-.062L12 17.928l7.458 5.43c.13.094.286.143.44.143.117 0 .234-.026.34-.08.252-.13.41-.387.41-.67V11.495c0-.414-.335-.75-.75-.75z"]:not(.TUIC_BOOKMARK),
                [d="M16.586 4l-2.043-2.04L15.957.54 18 2.59 20.043.54l1.414 1.42L19.414 4l2.043 2.04-1.414 1.42L18 5.41l-2.043 2.05-1.414-1.42L16.586 4zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z"]:not(.TUIC_BOOKMARK)`
        ).parentNode.parentNode.parentNode.parentNode.click();
      },
      "url-copy": function (e) {
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
    buttonElement: {
      "boolkmark": function () {
        let elem = TUICLibrary.HTMLParse(TUICData.visibleButtons.buttonHTML["boolkmark"]())
        elem.children[0].addEventListener("click", TUICData.visibleButtons.buttonFunction["boolkmark"])
        return elem
      },
      "url-copy": function () {
        let elem = TUICLibrary.HTMLParse(TUICData.visibleButtons.buttonHTML["url-copy"]())
        elem.children[0].addEventListener("click", TUICData.visibleButtons.buttonFunction["url-copy"])
        return elem
      }
    },
    emptyElement: function () {
      return TUICLibrary.TUICParser.parseFromString(`<div class="css-1dbjc4n r-xoduu5 r-1udh08x"><span data-testid="app-text-transition-container" style="transition-property: transform; transition-duration: 0.3s; transform: translate3d(0px, 0px, 0px);"><span class="css-901oao css-16my406 r-1tl8opc r-n6v787 r-1cwl3u0 r-1k6nrdp r-1e081e0 r-qvutc0"></span></span></div>`, "text/html").querySelector("div")
    }
  },
  sidebarButtons: {
    "selectors": {
      "home": `[href="/home"]`,
      "explore": `[href="/explore"]`,
      "communities": `[href$="/communities"],#TUICSidebar_communities`,
      "notifications": `[href$="/notifications"]`,
      "messages": `[href^="/messages"]`,
      "bookmarks": `[href="/i/bookmarks"]`,
      "twiter-blue": `[href="/i/twitter_blue_sign_up"]`,
      "profile": `[data-testid="AppTabBar_Profile_Link"]`,
      "moremenu": `[data-testid="AppTabBar_More_Menu"]`,
      "topics": `#TUICSidebar_topics`,
      "lists": `#TUICSidebar_lists,[href$="/lists"]`,
      "circles": `#TUICSidebar_circles`,
      "drafts":"#TUICSidebar_drafts",
      "connect":"#TUICSidebar_connect",
      "communitynotes":`[href="/i/communitynotes"]`,
      "verified-choose":`[href="/i/verified-choose"]`
    },
    "html": {
      "__base":(id,svg) => {
        return `
        <a id="TUICSidebar_${id}" role="link" class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1habvwh r-1loqt21 r-6koalj r-eqz5dr r-16y2uox r-1ny4l3l r-rjfia r-13qz1uu TUICSidebarButton ${location.pathname.endsWith("/topics") ? "TUICSidebarSelected" : ""}">
          <div class="css-1dbjc4n r-1awozwy r-sdzlij r-18u37iz r-1777fci r-dnmrzs r-o7ynqc r-6416eg ${TUICLibrary.fontSizeClass("r-q81ovl","r-q81ovl","r-xyw6el","r-kq9wsh","r-1slz7xr")}">
            <div class="css-1dbjc4n">
              <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e ${TUICLibrary.backgroundColorCheck() == "light" ? "r-18jsvk2" : "r-vlxjld r-1nao33i"}">
                <g>${svg}</g>
              </svg>
            </div>
            <div dir="ltr" class="css-901oao css-1hf3ou5 r-1tl8opc ${TUICLibrary.fontSizeClass("r-1i10wst r-16dba41 r-hbpseb r-1uvorsx r-1oa8saw","r-1b6yd1w r-16dba41 r-7ptqe7 r-j240cv r-y3t9qe","r-adyw6z r-135wba7 r-1joea0r r-88pszg","r-evnaw r-16dba41 r-eaezby r-uzqwk8 r-12e0a8i","r-1x35g6 r-16dba41 r-1h1c4di r-6uxfom r-le9fof")} r-bcqeeo r-qvutc0 ${TUICLibrary.backgroundColorCheck() == "light" ? "r-18jsvk2" : "r-vlxjld r-1nao33i"}" >
              <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0">${TUICLibrary.getI18n("sidebarButtons-"+id)}</span>
            </div>
          </div>
        </a>`
      },
      "topics": function () {
        return TUICData.sidebarButtons.html.__base("topics",`<path d="M12 3.75C7.99 3.75 4.75 7 4.75 11s3.24 7.25 7.25 7.25h1v2.44c1.13-.45 2.42-1.3 3.54-2.54 1.52-1.67 2.66-3.95 2.71-6.67.07-4.46-3.28-7.73-7.25-7.73zM2.75 11c0-5.11 4.14-9.25 9.25-9.25s9.34 4.23 9.25 9.77c-.06 3.28-1.44 6.01-3.23 7.97-1.76 1.94-3.99 3.21-5.87 3.5l-1.15.17V20.2c-4.64-.5-8.25-4.43-8.25-9.2zM15 10H9V8h6v2zm-2 4H9v-2h4v2z"></path>`)
      },
      "lists": function () {
        return TUICData.sidebarButtons.html.__base("lists",`<path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"></path>`)
      },
      "circles": function () {
        return TUICData.sidebarButtons.html.__base("circles",`<path d="M10 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM6 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4zM3.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C13.318 13.65 11.838 13 10 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C5.627 11.85 7.648 11 10 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H1.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zm19.417-3.68c-.541.97-1.601 1.99-3.352 2.98l-.201.12-.202-.12c-1.751-.99-2.811-2.01-3.352-2.98-.545-.97-.564-1.88-.206-2.59.355-.69 1.059-1.13 1.84-1.17.661-.03 1.348.22 1.92.79.571-.57 1.258-.82 1.918-.79.781.04 1.485.48 1.84 1.17.358.71.339 1.62-.205 2.59z"></path>`)
      },
      "communities": function () {
        return TUICData.sidebarButtons.html.__base("communities",`<path d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"></path>`)
      },
      "drafts": function () {
        return TUICData.sidebarButtons.html.__base("drafts",`<path d="M10 5H2V3h8v2zM7 7H2v2h5V7zm12.94 4.946C19.48 15.918 16.1 19 12 19H8.19c-.12.988-.19 1.993-.19 3H6c0-4.669 1.29-9.39 3.95-12.97C12.62 5.421 16.38 2.9 23 3c.17 3.359-.21 7.147-3.06 8.946zM21 5.033c-4.16.276-7.29 2.275-9.45 5.187-1.43 1.929-2.43 4.268-3 6.78H12c2.68 0 4.95-1.76 5.72-4.188-.52.108-1.09.172-1.72.188h-1.5v-2H16c3.9 0 4.95-2.921 5-5.967z">`)
      },
      "connect": function () {
        return TUICData.sidebarButtons.html.__base("connect",`<path d="M12 3.786c-4.556 0-8.25 3.694-8.25 8.25s3.694 8.25 8.25 8.25c1.595 0 3.081-.451 4.341-1.233l1.054 1.7c-1.568.972-3.418 1.534-5.395 1.534-5.661 0-10.25-4.589-10.25-10.25S6.339 1.786 12 1.786s10.25 4.589 10.25 10.25c0 .901-.21 1.77-.452 2.477-.592 1.731-2.343 2.477-3.917 2.334-1.242-.113-2.307-.74-3.013-1.647-.961 1.253-2.45 2.011-4.092 1.78-2.581-.363-4.127-2.971-3.76-5.578.366-2.606 2.571-4.688 5.152-4.325 1.019.143 1.877.637 2.519 1.342l1.803.258-.507 3.549c-.187 1.31.761 2.509 2.079 2.629.915.083 1.627-.356 1.843-.99.2-.585.345-1.224.345-1.83 0-4.556-3.694-8.25-8.25-8.25zm-.111 5.274c-1.247-.175-2.645.854-2.893 2.623-.249 1.769.811 3.143 2.058 3.319 1.247.175 2.645-.854 2.893-2.623.249-1.769-.811-3.144-2.058-3.319z"></path>`)
      }
    },
    "buttonClickInMoreMenu": (e, selector) => {
      let moreMenu = e.currentTarget.parentElement.parentElement.parentElement.querySelector(`[aria-haspopup] > div > div`)
      moreMenu.click();
      if (document.querySelector(`:is([role="group"],[data-testid="Dropdown"]) ${selector}`) == null) {
        setTimeout(() => {
          let elem = document.querySelector(`:is([role="group"],[data-testid="Dropdown"]) ${selector}`)
          if (elem == null) {
            moreMenu.click();
          } else {
            elem.click()
          }
        }, 150)
      } else {
        document.querySelector(`:is([role="group"],[data-testid="Dropdown"]) ${selector}`).click()
      }
    },
    "waitSetElement":async (selector) => {
      for(let i = 0;i <= 10;i++){
        re = await (new Promise((resolve2) => {
          let elem = document.querySelector(selector)
          console.log(selector)
          console.log(elem)
          if(elem != null){
            elem.click()
            resolve2("ok")
          }
          resolve2("bb")
        }))
        console.log(re)
        if(re == "ok") return
        await( new Promise((resolve2) => {
          window.setTimeout(() => {
            resolve2("")
          }, 250)
        }))
      }
    },
    "buttonFunctions": {
      "topics": async function (e) {
        if (!location.pathname.endsWith("/topics")) {
          let moreMenu = document.querySelector(`[data-testid="AppTabBar_More_Menu"] > div > div`)
          if (document.querySelector(`[role="menu"]`) == null) moreMenu.click();
          setTimeout(async () => {
            document.querySelector(`:is([role="group"],[data-testid="Dropdown"]) [data-testid="settingsAndSupport"]`).click()
            document.querySelector(`[href="/settings"]`)?.click()
            await TUICData.sidebarButtons.waitSetElement(`[href="/settings/privacy_and_safety"]`)
            await TUICData.sidebarButtons.waitSetElement(`[href="/settings/content_you_see"]`)
            await TUICData.sidebarButtons.waitSetElement(`[href$="/topics"]`)
          }, 150)
        }
      },
      "lists": function (e) {
        TUICData.sidebarButtons.buttonClickInMoreMenu(e, `[href$="/lists"]`)
      },
      "circles":async function (e) {
        document.querySelector(`[href="/compose/tweet"]`).click()
        await TUICData.sidebarButtons.waitSetElement(`[data-viewportview="true"] [role="button"][aria-haspopup="menu"]`)
        await TUICData.sidebarButtons.waitSetElement(`span+[role="button"]`)
      },
      "communities": function (e) {
        TUICData.sidebarButtons.buttonClickInMoreMenu(e, `[href$="/communities"]`)
      },
      "drafts": function (e) {
        TUICData.sidebarButtons.buttonClickInMoreMenu(e, `[href="/compose/tweet/unsent/drafts"]`)
      },
      "connect": function (e) {
        TUICData.sidebarButtons.buttonClickInMoreMenu(e, `[href="/i/connect_people"]`)
      }
    },
    "tuicButtonUrl": {
      "topics": `/topics`,
      "lists": `/lists`,
      "circles": `/i/circles/`,
      "communities": "/communities",
      "connect":"/i/connect_people",
      "drafts":"/compose/tweet/unsent/"
    }
  },
  invisibleItems: {
    all: ["osusume-user-timeline", "twitter-pro-promotion-btn","discoverMore","verified-rSidebar","subscribe-tweets","subscribe-profile"],
    i18n: {
      "osusume-user-timeline": "invisibleItems-osusumeUsersOnTL",
      "twitter-pro-promotion-btn": "invisibleItems-twitterProPromotionBtn",
      "discoverMore":"invisibleItems-discoverMore",
      "verified-rSidebar":"invisibleItems-verifiedRSidebar",
      "subscribe-tweets":"invisibleItems-subscribeTweets",
      "subscribe-profile":"invisibleItems-subscribeProfile"
    }
  },
  clientInfo: {
    all: ["clientInfoVisible"],
    i18n: { "clientInfoVisible": "clientInfo-clientInfoVisible" }
  },
  styleColor: {
    light: {
      textColor: "rgba(0,0,0,1)",
      containerBackground: "rgb(247, 249, 249)",
      containerBackground2: "rgb(237, 239, 239)",
      colorHover: "#00000040",
      detailBorder:"rgba(0,0,0,0.08)"
    },
    blue: {
      textColor: "rgba(255,255,255,1)",
      containerBackground: "rgb(30, 39, 50)",
      containerBackground2: "rgb(40, 49, 60)",
      colorHover: "#ffffff30",
      detailBorder:"rgba(255,255,255,0.08)"
    },
    dark: {
      textColor: "rgba(255,255,255,1)",
      containerBackground: "rgb(22, 24, 28)",
      containerBackground2: "rgb(28, 34, 38)",
      colorHover: "#ffffff40",
      detailBorder:"rgba(255,255,255,0.16)"
    }
  },
  twitterIcon: {
    all: ["nomal", "invisible", "dog", "twitter", "custom"],
    i18n: {
      "nomal": "twitterIcon-normal",
      "invisible": "twitterIcon-invisible",
      "dog": "twitterIcon-dog",
      "twitter": "twitterIcon-twitter",
      "custom": "twitterIcon-custom"
    }
  },
  twitterIconSVG: `url('data:image/svg+xml;charset=UTF-8,<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"72\" height=\"72\" viewBox=\"0 0 72 72\" enable-background=\"new 0 0 72 72\" xml:space=\"preserve\"><g id=\"bounds\"><rect opacity=\"0\" width=\"72\" height=\"72\"/></g><g id=\"icon\"><path d=\"M67.812,16.141c-2.348,1.039-4.869,1.743-7.519,2.06c2.703-1.62,4.778-4.187,5.756-7.244c-2.529,1.5-5.33,2.592-8.313,3.176C55.349,11.591,51.948,10,48.182,10c-7.229,0-13.092,5.861-13.092,13.093c0,1.026,0.118,2.021,0.338,2.981C24.543,25.526,14.9,20.317,8.441,12.395c-1.126,1.936-1.771,4.184-1.771,6.581c0,4.542,2.312,8.551,5.824,10.898c-2.146-0.069-4.165-0.657-5.93-1.638c-0.002,0.055-0.002,0.11-0.002,0.162c0,6.345,4.513,11.638,10.504,12.84c-1.101,0.298-2.256,0.457-3.449,0.457c-0.846,0-1.667-0.078-2.465-0.231c1.667,5.2,6.499,8.986,12.23,9.09C18.9,54.066,13.253,56.16,7.122,56.16c-1.055,0-2.096-0.061-3.122-0.184c5.794,3.717,12.676,5.882,20.067,5.882c24.083,0,37.251-19.949,37.251-37.249c0-0.566-0.014-1.134-0.039-1.694C63.838,21.068,66.058,18.765,67.812,16.141z\"/></g></svg>') `,
  resetIconSVG: `<svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="matrix(0 1 1 0 2.5 2.5)"><path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8"/><path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)"/></g></svg>`,
  arrowLeftIconSVG: `<svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="m4.5 8.5-4-4 4-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(7 6)"/></svg>`,
  arrowRightIconSVG: `<svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="m.5 8.5 4-4-4-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(9 6)"/></svg>`,
  arrowUpIconSVG: `<svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="m.5 4.5 4-4 4 4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(6 8)"/></svg>`,
  arrowDownIconSVG: `<svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="m8.5.5-4 4-4-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(6 8)"/></svg>`
}
