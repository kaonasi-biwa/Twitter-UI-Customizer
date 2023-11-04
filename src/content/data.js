import { TUICI18N } from "./i18n.js";
import { TUICLibrary, TUICPref } from "./library.js";
import { SIDEBAR_BUTTON_ICON } from "./data/icons.js";

export const TUICData = {
    defaultPref: {
        buttonColor: {},
        buttonColorLight: {},
        buttonColorDark: {},
        visibleButtons: ["reply-button", "retweet-button", "like-button", "share-button", "tweet_analytics", "boolkmark", "url-copy"],
        sidebarButtons: ["home", "explore", "communities", "notifications", "messages", "lists", "bookmarks", "twiter-blue", "profile", "moremenu"],
        fixEngagements: ["likes", "retweets", "quotes"],
        invisibleItems: {
            hideBelowDM: false,

            verifiedNotifications: false,
        },
        profileSetting: {
            tabs: {
                pinnedTab: false,
            },
            invisible: {
                "subscribe-profile": false,
                profileHighlights: false,
                profileAffiliates: false,
                verifiedFollowerTab: false,
            },
        },
        tweetDisplaySetting: {
            "twitter-pro-promotion-btn": false,
            "subscribe-tweets": false,
            bottomScroll: false,
            bottomSpace: false,
            RTNotQuote: false,
            noModalbottomTweetButtons: false,
            noNumberBottomTweetButtons: false,
            linkCopyURL: "linkCopyURL_twitter",
            linkShareCopyURL: "linkShareCopyURL_twitter",
        },
        otherBoolSetting: {
            roundIcon: true,
            faviconSet: false,
            placeEngagementsLink: false,
            placeEngagementsLinkShort: false,
            showLinkCardInfo: true,
        },
        sidebarSetting: {
            buttonConfig: {
                smallerSidebarContent: true,
                sidebarNoneScrollbar: false,
                birdGoBackHome: false,
            },
        },
        XToTwitter: { XToTwitter: false, PostToTweet: false },
        timeline: {
            "osusume-user-timeline": false,
            hideOhterRTTL: false,
            accountStart: false,
        },
        twitterIcon: "nomal",
        rightSidebar: {
            searchBox: false,
            verified: false,
            trend: false,
            osusumeUser: false,
            links: false,
            space: false,
            relevantPeople: false,
        },
        accountSwitcher: {
            icon: false,
            nameID: false,
            moreMenu: false,
        },
        "timeline-discoverMore": "discoverMore_nomal",
    },
    settings: {
        visibleButtons: {
            all: ["reply-button", "retweet-button", "quoteTweet", "like-button", "share-button", "tweet_analytics", "boolkmark", "url-copy", "userBlock", "userMute", "deleteButton", "sendDM", "likeAndRT"],
            i18n: {
                "reply-button": "bottomTweetButtons-reply",
                "retweet-button": "bottomTweetButtons-retweet",
                "like-button": "bottomTweetButtons-like",
                "share-button": "bottomTweetButtons-share",
                tweet_analytics: "bottomTweetButtons-tweetAnalytics",
                boolkmark: "bottomTweetButtons-bookmark",
                "url-copy": "bottomTweetButtons-urlCopy",
                userBlock: "bottomTweetButtons-userBlock",
                userMute: "bottomTweetButtons-userMute",
                quoteTweet: "bottomTweetButtons-quoteTweet",
                deleteButton: "bottomTweetButtons-deleteButton",
                sendDM: "bottomTweetButtons-sendDM",
                likeAndRT: "bottomTweetButtons-likeAndRT",
            },
        },
        sidebarButtons: {
            all: ["home", "explore", "communities", "notifications", "messages", "bookmarks", "twiter-blue", "profile", "moremenu", "topics", "lists", "circles", "drafts", "connect", "communitynotes", "verified-choose", "display", "muteAndBlock"],
            i18n: {
                home: "sidebarButtons-home",
                explore: "sidebarButtons-explore",
                communities: "sidebarButtons-communities",
                notifications: "sidebarButtons-notifications",
                messages: "sidebarButtons-messages",
                bookmarks: "sidebarButtons-bookmarks",
                "twiter-blue": "sidebarButtons-twitterBlue",
                profile: "sidebarButtons-profile",
                moremenu: "sidebarButtons-moremenu",
                topics: "sidebarButtons-topics",
                lists: "sidebarButtons-lists",
                circles: "sidebarButtons-circles",
                drafts: "sidebarButtons-drafts",
                connect: "sidebarButtons-connect",
                communitynotes: "sidebarButtons-communitynotes",
                "verified-choose": "sidebarButtons-verified-choose",
                display: "sidebarButtons-display",
                muteAndBlock: "sidebarButtons-muteAndBlock",
            },
        },
        fixEngagements: {
            all: ["likes", "retweets", "quotes"],
            i18n: {
                likes: "bottomTweetButtons-setting-placeEngagementsLink-likes-short",
                retweets: "bottomTweetButtons-setting-placeEngagementsLink-retweets-short",
                quotes: "bottomTweetButtons-setting-placeEngagementsLink-quotes-short",
            },
        },
        colors: {
            id: ["unsent-tweet", "not-following", "willFollow", "following", "un-following", "blocking", "blocking-unlock", "profile", "profile-save", "birthday", "twitterIcon", "twitterIconFavicon"],
            i18n: {
                "unsent-tweet": "settingColors-editUnsetTweet",
                willFollow: "settingColors-willFollowButton",
                "not-following": "settingColors-notFollowingButton",
                following: "settingColors-followingButton",
                "un-following": "settingColors-unfollowButton",
                profile: "settingColors-editProfile",
                "profile-save": "settingColors-saveProfile",
                birthday: "settingColors-finalDecideButton",
                blocking: "settingColors-blocking",
                "blocking-unlock": "settingColors-blockingUnlock",
                twitterIcon: "settingColors-twitterIcon",
                twitterIconFavicon: "settingColors-twitterIconFavicon",
            },
        },
    },
    colors: {
        "unsent-tweet": {
            background: "rgba(29,161,242,1)",
            border: "rgba(29,161,242,1)",
            color: "rgba(255,255,255,1)",
        },
        "not-following": {
            background: "rgba(255,255,255,0)",
            border: "rgba(29,161,242,1)",
            color: "rgba(29,161,242,1)",
        },
        willFollow: {
            background: "rgba(29,161,242,1)",
            border: "rgba(29,161,242,1)",
            color: "rgba(255,255,255,1)",
        },
        following: {
            background: "rgba(29,161,242,1)",
            border: "rgba(29,161,242,1)",
            color: "rgba(255,255,255,1)",
        },
        "un-following": {
            background: "rgba(255,0,0,1)",
            border: "rgba(255,0,0,1)",
            color: "rgba(255,255,255,1)",
        },
        profile: {
            background: "rgba(255,255,255,0)",
            border: "rgba(29,161,242,1)",
            color: "rgba(29,161,242,1)",
        },
        "profile-save": {
            background: "rgba(29,161,242,1)",
            border: "rgba(29,161,242,1)",
            color: "rgba(255,255,255,1)",
        },
        birthday: {
            background: "rgba(255,0,0,1)",
            border: "rgba(255,0,0,1)",
            color: "rgba(255,255,255,1)",
        },
        blocking: {
            background: "rgba(244, 33, 46,1)",
            border: "rgba(244, 33, 46,1)",
            color: "rgba(255, 255, 255,1)",
        },
        "blocking-unlock": {
            background: "rgba(220, 30, 41,1)",
            border: "rgba(220, 30, 41,1)",
            color: "rgba(255, 255, 255,1)",
        },
        twitterIcon: {
            color: "rgba(29,161,242,1)",
            typeColor: "imageColor",
            ldColor: true,
        },
        twitterIconFavicon: {
            color: "rgba(29,161,242,1)",
            typeColor: "imageColor",
        },
    },
    "colors-buttonColorDark": {
        twitterIcon: {
            color: "rgba(255,255,255,1)",
        },
    },
    "colors-buttonColorLight": {
        twitterIcon: {
            color: "rgba(29,161,242,1)",
        },
    },
    visibleButtons: {
        selectors: {
            "reply-button": '[data-testid$="reply"]:not([data-testid*="UserAvatar-Container-"])',
            "retweet-button": '[data-testid$="retweet"]:not([data-testid*="UserAvatar-Container-"])',
            "like-button": '[data-testid$="like"]:not([data-testid*="UserAvatar-Container-"])',
            "share-button": '[aria-haspopup="menu"]:not([data-testid="retweet"]):not([data-testid="unretweet"])',
            tweet_analytics: '[href$="/analytics"],[d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"]',
            boolkmark: `[TUICButton="bookmark"],[data-testid="bookmark"]:not([data-testid*="UserAvatar-Container-"]),[data-testid="removeBookmark"]:not([data-testid*="UserAvatar-Container-"])`,
            "url-copy": `[TUICButton="urlCopy"]`,
            userBlock: `[TUICButton="userBlock"]`,
            userMute: `[TUICButton="userMute"]`,
            quoteTweet: `[TUICButton="quoteTweet"]`,
            deleteButton: `[TUICButton="deleteButton"]`,
            sendDM: `[TUICButton="sendDM"]`,
            likeAndRT: `[TUICButton="likeAndRT"]`,
        },
        buttonHTML: {
            _base: function (id, svg, isBigArticle, disable = false, redButton = false) {
                return `
        <div class="css-1dbjc4n TUICButtonUnderTweet TUICOriginalContent" style="display: inline-grid;justify-content: inherit;transform: rotate(0deg) scale(1) translate3d(0px, 0px, 0px);-moz-box-pack: inherit;">
            <div class="css-1dbjc4n r-18u37iz r-1h0z5md">
              <div
                TUICButton="${id}"
                role="button"
                tabindex="${disable ? -1 : 0}"
                class="css-1dbjc4n r-1777fci r-bt1l66 r-1ny4l3l r-bztko3 r-lrvibr ${disable ? "r-icoktb" : "css-18t94o4"}"
              >
                <div
                  dir="ltr"
                  class="css-901oao r-1awozwy r-6koalj r-37j5jr r-a023e6 r-16dba41 r-1h0z5md r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0 ${TUICLibrary.fontSizeClass("r-1b43r93", "r-hjklzo", "r-rjixqe", "r-1inkyih", "r-1i10wst")} TUIC_ButtonHover2"
                >
                  <div class="css-1dbjc4n r-xoduu5 TUIC_ButtonHover">
                    <div
                      class="css-1dbjc4n r-1niwhzg r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-1ny4l3l r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg"
                    ></div>
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      class="r-4qtqp9 r-yyyyoo r-1q142lx r-dnmrzs r-bnwqim r-1plcrui r-lrvibr ${isBigArticle ? "r-1srniue r-50lct3" : "r-1xvli5t"}${redButton ? " r-9l7dzd" : ""} ${TUICLibrary.backgroundColorClass("r-1bwzh9t", "r-115tad6", "r-14j79pv")}"
                    >
                      <g>
                        ${svg}
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
        </div>`;
            },
            boolkmark: function (isBigArticle) {
                return TUICData.visibleButtons.buttonHTML._base("bookmark", `<path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z" class="TUIC_BOOKMARK"></path>`, isBigArticle);
            },
            "url-copy": function (isBigArticle) {
                return TUICData.visibleButtons.buttonHTML._base(
                    "urlCopy",
                    `<path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z" class="TUIC_URL"></path>`,
                    isBigArticle,
                );
            },
            userBlock: function (isBigArticle, isMe) {
                return TUICData.visibleButtons.buttonHTML._base(
                    "userBlock",
                    `<path d="M12 3.75c-4.55 0-8.25 3.69-8.25 8.25 0 1.92.66 3.68 1.75 5.08L17.09 5.5C15.68 4.4 13.92 3.75 12 3.75zm6.5 3.17L6.92 18.5c1.4 1.1 3.16 1.75 5.08 1.75 4.56 0 8.25-3.69 8.25-8.25 0-1.92-.65-3.68-1.75-5.08zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z" class="TUIC_USERBLOCK"></path>`,
                    isBigArticle,
                    isMe,
                );
            },
            userMute: function (isBigArticle, isMe) {
                return TUICData.visibleButtons.buttonHTML._base(
                    "userMute",
                    `<path d="M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z" class="TUIC_USERMUTE"></path>`,
                    isBigArticle,
                    isMe,
                );
            },
            quoteTweet: function (isBigArticle, locked) {
                return TUICData.visibleButtons.buttonHTML._base(
                    "quoteTweet",
                    `<path d="M14.23 2.854c.98-.977 2.56-.977 3.54 0l3.38 3.378c.97.977.97 2.559 0 3.536L9.91 21H3v-6.914L14.23 2.854zm2.12 1.414c-.19-.195-.51-.195-.7 0L5 14.914V19h4.09L19.73 8.354c.2-.196.2-.512 0-.708l-3.38-3.378zM14.75 19l-2 2H21v-2h-6.25z" class="TUIC_QuoteTweet"></path>`,
                    isBigArticle,
                    locked,
                );
            },
            likeAndRT: function (isBigArticle, disable) {
                return `
        <div class="css-1dbjc4n TUICButtonUnderTweet TUICOriginalContent" style="display: inline-grid;justify-content: inherit;transform: rotate(0deg) scale(1) translate3d(0px, 0px, 0px);-moz-box-pack: inherit;">
            <div class="css-1dbjc4n r-18u37iz r-1h0z5md">
              <div
                TUICButton="likeAndRT"
                role="button"
                tabindex="${disable ? -1 : 0}"
                class="css-1dbjc4n r-1777fci r-bt1l66 r-1ny4l3l r-bztko3 r-lrvibr ${disable ? "r-icoktb" : "css-18t94o4"}"
              >
                <div
                  dir="ltr"
                  class="css-901oao r-1awozwy r-6koalj r-37j5jr r-a023e6 r-16dba41 r-1h0z5md r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0 ${TUICLibrary.fontSizeClass("r-1b43r93", "r-hjklzo", "r-rjixqe", "r-1inkyih", "r-1i10wst")} TUIC_ButtonHover2"
                >
                  <div class="css-1dbjc4n r-xoduu5 TUIC_ButtonHover">
                    <div
                      class="css-1dbjc4n r-1niwhzg r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-1ny4l3l r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg"
                    ></div>
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      class="r-4qtqp9 r-yyyyoo r-1q142lx r-dnmrzs r-bnwqim r-1plcrui r-lrvibr ${isBigArticle ? "r-1srniue r-50lct3" : "r-1xvli5t"} ${TUICLibrary.backgroundColorClass("r-1bwzh9t", "r-115tad6", "r-14j79pv")}"
                    >
                    <g
                    id="layer1"
                    transform="matrix(0.95510786,0,0,0.95510786,0.63270977,0.61735767)">
                   <g
                      id="g227"
                      transform="matrix(0.1814,0,0,0.1814,-0.576,-0.37241)"
                      >
                     <path
                        id="path113"
                        style="stroke-width:0;stroke-linecap:square"
                        d="m 72.876953,47.507812 c -8.429872,0.160284 -16.643665,5.146193 -20.730469,12.41211 -2.721534,4.897158 -3.718842,10.472599 -3.240234,15.972656 0.183352,2.191822 0.667879,4.597476 1.300781,6.703125 2.798662,9.287072 8.824332,17.23649 15.718278,23.904337 7.719083,7.50214 16.751138,13.48467 26.006332,18.90621 0.740525,0.71039 1.821545,0.21834 2.471034,-0.35366 10.288175,-6.02389 20.274125,-12.85073 28.461355,-21.63407 6.07112,-6.526621 11.20425,-14.263772 13.2473,-23.041567 1.29649,-5.584976 1.17432,-11.459938 -0.85526,-16.842818 -1.0308,-2.781745 -2.56923,-5.366693 -4.47739,-7.559842 -3.46151,-4.040035 -8.52359,-6.975007 -13.7937,-8.001157 -5.24418,-1.020315 -10.63104,-0.355237 -15.49727,1.799897 -3.188517,1.356242 -6.041831,3.384075 -8.600991,5.701576 -4.093861,-3.75649 -9.140964,-6.571195 -14.640234,-7.565135 -1.767685,-0.331288 -3.572143,-0.465911 -5.369532,-0.401662 z m 39.273437,11.478516 c 5.93983,-0.05989 11.62942,4.407743 12.8125,10.259766 1.27599,5.396423 -0.29036,11.045125 -2.87407,15.812683 -3.85113,7.218699 -9.75124,13.094611 -16.00913,18.255023 -4.17866,3.38649 -8.64285,6.39988 -13.200784,9.2487 C 83.278268,106.60897 74.039739,99.672721 67.172693,90.598029 63.410787,85.565565 60.440547,79.598062 60.305475,73.204691 c -0.08158,-4.610439 2.017801,-9.356639 5.925065,-11.938363 3.643979,-2.503204 8.531797,-2.933708 12.607581,-1.267142 4.402687,1.66278 7.795941,5.172596 10.427732,8.969843 1.08958,1.476978 2.14068,2.995922 3.286881,4.425502 1.366776,-0.50811 2.045035,-1.948681 2.90895,-3.030423 2.724287,-3.846165 5.776046,-7.754963 10.137916,-9.821855 2.0414,-0.967953 4.2886,-1.52326 6.55079,-1.555925 z" />
                     <path
                        id="path223"
                        style="stroke-width:0;stroke-linecap:square"
                        d="m 1.0488281,29.748047 c 2.6204427,2.805338 5.2408854,5.610677 7.8613281,8.416015 2.4591468,-2.293445 4.9166128,-4.588694 7.3769528,-6.880859 0.03949,11.677897 -0.129001,23.360219 0.177551,35.034633 1.021621,8.47774 8.687703,15.740777 17.288254,15.935601 6.040867,0.245862 12.087419,0.0011 18.13068,0.100079 2.62539,0 5.250781,0 7.876172,0 0,-3.843099 0,-7.686198 0,-11.529297 -8.882085,-0.06538 -17.773259,0.165844 -26.648438,-0.208985 -3.490281,-0.837546 -5.781748,-4.606741 -5.318021,-8.098046 0.04783,-10.413221 0.02426,-20.82656 0.0231,-31.239844 2.459718,2.296135 4.919261,4.592458 7.378906,6.888672 2.619792,-2.80599 5.239584,-5.61198 7.859376,-8.417969 C 36.053385,23.210286 29.052083,16.672526 22.050781,10.134766 15.05013,16.672526 8.0494792,23.210286 1.0488281,29.748047 Z M 66.755859,11.201172 c -6.175118,-0.01248 -12.350261,-0.0028 -18.52539,-0.0059 0,3.84375 0,7.687501 0,11.53125 8.886471,0.06797 17.783515,-0.172076 26.662109,0.212891 3.490048,0.855081 5.78,4.63837 5.289037,8.135156 -0.0025,10.400261 -0.0058,20.800521 -0.0078,31.200782 -2.457345,-2.298584 -4.916784,-4.594927 -7.375,-6.892579 -2.621094,2.806641 -5.242187,5.613282 -7.863281,8.419922 7.001302,6.537761 14.002604,13.075521 21.003906,19.613282 7.001302,-6.537761 14.002604,-13.075521 21.003907,-19.613282 -2.62044,-2.805989 -5.24089,-5.611979 -7.861329,-8.417968 -2.458992,2.295564 -4.917903,4.591216 -7.376953,6.886718 C 91.663154,50.551971 91.843641,38.827361 91.505462,27.111932 90.429623,18.564057 82.592436,11.346996 73.927885,11.25578 c -2.388826,-0.10139 -4.781739,-0.06089 -7.172026,-0.05461 z" />
                   </g>
                 </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
        </div>`;
            },
            deleteButton: function (isBigArticle, isMe) {
                return TUICData.visibleButtons.buttonHTML._base(
                    "deleteButton",
                    `<path d="M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07zM9 17v-6h2v6H9zm4 0v-6h2v6h-2z" class="TUIC_DeleteButton"></path>`,
                    isBigArticle,
                    !isMe,
                    true,
                );
            },
            sendDM: function (isBigArticle, cannotShare) {
                return TUICData.visibleButtons.buttonHTML._base(
                    "sendDM",
                    `<path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z" class="TUIC_sendDM"></path>`,
                    isBigArticle,
                    cannotShare,
                );
            },
        },
        buttonFunction: {
            _cancelButton: function (elem) {
                elem.click();
            },
            boolkmark: function (e) {
                for (let i = 0; i <= 2; i++) {
                    const urlCopyButton = document.querySelector(
                        `[d="M23.074 3.35H20.65V.927c0-.414-.337-.75-.75-.75s-.75.336-.75.75V3.35h-2.426c-.414 0-.75.337-.75.75s.336.75.75.75h2.425v2.426c0 .414.335.75.75.75s.75-.336.75-.75V4.85h2.424c.414 0 .75-.335.75-.75s-.336-.75-.75-.75zM19.9 10.744c-.415 0-.75.336-.75.75v9.782l-6.71-4.883c-.13-.095-.285-.143-.44-.143s-.31.048-.44.144l-6.71 4.883V5.6c0-.412.337-.75.75-.75h6.902c.414 0 .75-.335.75-.75s-.336-.75-.75-.75h-6.9c-1.242 0-2.25 1.01-2.25 2.25v17.15c0 .282.157.54.41.668.25.13.553.104.78-.062L12 17.928l7.458 5.43c.13.094.286.143.44.143.117 0 .234-.026.34-.08.252-.13.41-.387.41-.67V11.495c0-.414-.335-.75-.75-.75z"]:not(.TUIC_BOOKMARK),
                  [d="M17 3V0h2v3h3v2h-3v3h-2V5h-3V3h3zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z"]:not(.TUIC_BOOKMARK),
                  [d="M19.9 10.744c-.415 0-.75.336-.75.75v9.782l-6.71-4.883c-.13-.095-.285-.143-.44-.143s-.31.048-.44.144l-6.71 4.883V5.6c0-.412.337-.75.75-.75h6.902c.414 0 .75-.335.75-.75s-.336-.75-.75-.75h-6.9c-1.242 0-2.25 1.01-2.25 2.25v17.15c0 .282.157.54.41.668.25.13.553.104.78-.062L12 17.928l7.458 5.43c.13.094.286.143.44.143.117 0 .234-.026.34-.08.252-.13.41-.387.41-.67V11.495c0-.414-.335-.75-.75-.75z"]:not(.TUIC_BOOKMARK),
                  [d="M16.586 4l-2.043-2.04L15.957.54 18 2.59 20.043.54l1.414 1.42L19.414 4l2.043 2.04-1.414 1.42L18 5.41l-2.043 2.05-1.414-1.42L16.586 4zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z"]:not(.TUIC_BOOKMARK)`,
                    );
                    if (urlCopyButton == null) {
                        e.click();
                    } else {
                        urlCopyButton.parentNode.parentNode.parentNode.parentNode.click();
                        break;
                    }
                }
            },
            sendDM: function (e) {
                for (let i = 0; i <= 2; i++) {
                    const urlCopyButton = document.querySelector(
                        `[role="menu"] [role="menuitem"] [d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"]:not(.TUIC_sendDM)`,
                    );
                    if (urlCopyButton == null) {
                        e.click();
                    } else {
                        urlCopyButton.parentNode.parentNode.parentNode.parentNode.click();
                        break;
                    }
                }
            },
            "url-copy": function (e) {
                for (let i = 0; i <= 2; i++) {
                    const urlCopyButton =
                        document.querySelector(`[role="menuitem"] :is([d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"],
                [d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"]):not(.TUIC_URL)`);
                    if (urlCopyButton == null) {
                        e.click();
                    } else {
                        urlCopyButton.parentNode.parentNode.parentNode.parentNode.click();
                        break;
                    }
                }
            },
            "url-copy-cannotCopy": function (elem) {
                TUICData.visibleButtons.buttonFunction["url-copy-base"](elem.href.replace(/(twitter\.com|x\.com)/, TUICData["tweetDisplaySetting.linkCopyURL"].url[TUICPref.get("tweetDisplaySetting.linkCopyURL")]));
            },
            "url-copy-inShare": function (elem) {
                TUICData.visibleButtons.buttonFunction["url-copy-base"](elem.href.replace(/(twitter\.com|x\.com)/, TUICData["tweetDisplaySetting.linkCopyURL"].url[TUICPref.get("tweetDisplaySetting.linkShareCopyURL").replace("Share", "")]));

                //if ((await navigator.clipboard.readText()).split("?")[0] != copyLink) {

                //}
            },
            "url-copy-base": (url) => {
                navigator.clipboard.writeText(url);
                const baseElem = document.querySelector(`#layers`);
                if (baseElem != null) {
                    /* eslint-disable indent */
                    const layerElem = TUICLibrary.HTMLParse(
                        `<div class="css-1dbjc4n r-aqfbo4 r-1p0dtai r-1d2f490 r-12vffkv r-1xcajam r-zchlnj TUICURLCopyLayer">
                    <div class="css-1dbjc4n r-12vffkv">
                      <div class="css-1dbjc4n r-12vffkv">
                        <div class="css-1dbjc4n r-1jgb5lz r-1ye8kvj r-633pao r-13qz1uu">
                          <div role="alert" class="css-1dbjc4n r-1awozwy r-1kihuf0 r-l5o3uw r-z2wwpe r-18u37iz r-1wtj0ep r-105ug2t r-dkhcqf r-axxi2z r-18jm5s1 ${TUICLibrary.fontSizeClass("r-1vxqurs", "r-1yflyrw", "r-zd98yo", "r-1v456y7", "r-sr82au")}  ${TUICLibrary.fontSizeClass(
                              "r-q81ovl",
                              "r-q81ovl",
                              "r-xyw6el",
                              "r-kq9wsh",
                              "r-1slz7xr",
                          )}" data-testid="toast" style="transform: translate3d(0px, 0px, 0px) translateY(0px);">
                            <div dir="ltr" class="css-901oao r-jwli3a r-1wbh5a2 r-1tl8opc r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-1e081e0 r-qvutc0 ${TUICLibrary.fontSizeClass("r-1b43r93", "r-1b43r93", "r-a023e6", "r-1inkyih", "r-1i10wst")} ${TUICLibrary.fontSizeClass(
                                "r-1qfz7tf",
                                "r-1qfz7tf",
                                "r-1e081e0",
                                "r-1orpq53",
                                "r-779j7e",
                            )}"><span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0">${TUICI18N.get("bottomTweetButtons-urlCopy-layer")}</span></div>
                            <div aria-hidden="true" class="css-1dbjc4n r-18u37iz"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>`,
                    ).item(0);
                    /* eslint-enable indent */
                    baseElem.appendChild(layerElem);
                    window.setTimeout(() => {
                        layerElem.remove();
                    }, 3000);
                }
            },
            userBlock: async function (article) {
                for (let i = 0; i <= 2; i++) {
                    const blockButton = document.querySelector(`[data-testid="block"][role="menuitem"]`);
                    if (blockButton == null) {
                        article.querySelector(`[data-testid="caret"]`).click();
                    } else {
                        blockButton.click();
                        await TUICLibrary.waitForElement(`[data-testid="confirmationSheetConfirm"]`);
                        if (TUICPref.get("tweetDisplaySetting.noModalbottomTweetButtons")) {
                            document.querySelector(`[data-testid="confirmationSheetConfirm"]`).click();
                        } else {
                            document.querySelector(`[data-testid="confirmationSheetCancel"]`).addEventListener("click", (e) => {
                                this._cancelButton(article.querySelector(`[data-testid="caret"]`));
                            });
                            document.querySelector(`[data-testid="mask"]`).addEventListener("click", (e) => {
                                this._cancelButton(article.querySelector(`[data-testid="caret"]`));
                            });
                        }
                        break;
                    }
                }
            },
            deleteButton: function (article) {
                for (let i = 0; i <= 2; i++) {
                    const deleteButtonButton = document.querySelector(
                        `[role="menuitem"] [d="M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07zM9 17v-6h2v6H9zm4 0v-6h2v6h-2z"]`,
                    );
                    if (deleteButtonButton == null) {
                        article.querySelector(`[data-testid="caret"]`).click();
                    } else {
                        deleteButtonButton.parentElement.parentElement.parentElement.parentElement.click();
                        if (TUICPref.get("tweetDisplaySetting.noModalbottomTweetButtons")) {
                            document.querySelector(`[data-testid="confirmationSheetConfirm"]`).click();
                        } else {
                            document.querySelector(`[data-testid="confirmationSheetCancel"]`).addEventListener("click", (e) => {
                                this._cancelButton(article.querySelector(`[data-testid="caret"]`));
                            });
                            document.querySelector(`[data-testid="mask"]`).addEventListener("click", (e) => {
                                this._cancelButton(article.querySelector(`[data-testid="caret"]`));
                            });
                        }
                        break;
                    }
                }
            },
            userMute: function (article) {
                for (let i = 0; i <= 2; i++) {
                    const blockButton = document.querySelector(
                        `[role="menuitem"] [d="M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z"]`,
                    );
                    if (blockButton == null) {
                        article.querySelector(`[data-testid="caret"]`).click();
                    } else {
                        blockButton.parentElement.parentElement.parentElement.parentElement.click();
                        break;
                    }
                }
            },
            quoteTweet: function (retButton) {
                for (let i = 0; i <= 2; i++) {
                    const quoteButton = document.querySelector(`[role="menuitem"]:is([data-testid="unretweetConfirm"],[data-testid="retweetConfirm"])+[role="menuitem"]`);
                    if (quoteButton == null) {
                        retButton.click();
                    } else {
                        quoteButton.click();
                        break;
                    }
                }
            },
            likeAndRT: function (retButton, likeButton) {
                likeButton.click();
                if (TUICPref.get("tweetDisplaySetting.RTNotQuote")) {
                    retButton.click();
                } else {
                    for (let i = 0; i <= 2; i++) {
                        const quoteButton = document.querySelector(`[role="menuitem"]:is([data-testid="unretweetConfirm"],[data-testid="retweetConfirm"])`);
                        if (quoteButton == null) {
                            retButton.click();
                        } else {
                            quoteButton.click();
                            break;
                        }
                    }
                }
            },
            "retweet-button": function () {
                if (TUICPref.get("tweetDisplaySetting.RTNotQuote")) {
                    window.setTimeout(() => {
                        TUICData.sidebarButtons.waitSetElement(`[role="menuitem"]:is([data-testid="retweetConfirm"],[data-testid="unretweetConfirm"])`);
                    }, 100);
                }
            },
            "share-button": function (elem) {
                window.setTimeout(async () => {
                    await TUICLibrary.waitForElement(
                        `[role="menuitem"] path[d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"]`,
                    );
                    document
                        .querySelector(
                            `[role="menuitem"] path[d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"]`,
                        )
                        .parentElement.parentElement.parentElement.parentElement.addEventListener("click", (e) => {
                            e.stopImmediatePropagation();
                            TUICData.visibleButtons.buttonFunction["url-copy-inShare"](elem);
                            document.querySelector(`#layers > div+div > div > div > div > div+div > div > div`).click();
                        });
                }, 100);
            },
        },
        buttonElement: {
            _handleEvent: function (elem, eventFunc, twitterButton) {
                (twitterButton ? elem.children[0].children[0] : elem.children[0]).addEventListener("keydown", (e) => {
                    if (e.keyCode === 13) {
                        eventFunc();
                    }
                });
                elem.children[0].addEventListener("click", (e) => {
                    eventFunc();
                });
            },
            boolkmark: function (val) {
                const elem = TUICLibrary.HTMLParse(TUICData.visibleButtons.buttonHTML["boolkmark"](val.option.isBigArticle)).item(0);
                TUICData.visibleButtons.buttonElement._handleEvent(elem, () => {
                    TUICData.visibleButtons.buttonFunction["boolkmark"](val.elements.buttonBarBase.querySelector(TUICData.visibleButtons.selectors["share-button"]));
                });
                return elem;
            },
            sendDM: function (val) {
                const elem = TUICLibrary.HTMLParse(TUICData.visibleButtons.buttonHTML["sendDM"](val.option.isBigArticle, val.option.cannotRT || val.option.cannotShare || val.option.isLockedAccount)).item(0);
                if (!(val.option.cannotRT || val.option.cannotShare || val.option.isLockedAccount)) {
                    TUICData.visibleButtons.buttonElement._handleEvent(elem, () => {
                        TUICData.visibleButtons.buttonFunction["sendDM"](val.elements.buttonBarBase.querySelector(TUICData.visibleButtons.selectors["share-button"]));
                    });
                }
                return elem;
            },
            "url-copy": function (val) {
                const elem = TUICLibrary.HTMLParse(TUICData.visibleButtons.buttonHTML["url-copy"](val.option.isBigArticle)).item(0);
                //if (val.option.isLockedAccount || val.option.cannotRT) {
                if (val.elements.statusButton != null) {
                    TUICData.visibleButtons.buttonElement._handleEvent(elem, () => {
                        TUICData.visibleButtons.buttonFunction["url-copy-cannotCopy"](val.elements.statusButton);
                    });
                }
                /*} else {
                    TUICData.visibleButtons.buttonElement._handleEvent(elem, () => {
                        TUICData.visibleButtons.buttonFunction["url-copy"](val.elements.buttonBarBase.querySelector(TUICData.visibleButtons.selectors["share-button"]));
                    });
                }*/
                return elem;
            },
            userBlock: function (val) {
                const elem = TUICLibrary.HTMLParse(TUICData.visibleButtons.buttonHTML["userBlock"](val.option.isBigArticle, val.option.isMe)).item(0);
                TUICData.visibleButtons.buttonElement._handleEvent(elem, () => {
                    TUICData.visibleButtons.buttonFunction["userBlock"](val.elements.article);
                });
                return elem;
            },
            userMute: function (val) {
                const elem = TUICLibrary.HTMLParse(TUICData.visibleButtons.buttonHTML["userMute"](val.option.isBigArticle, val.option.isMe)).item(0);
                TUICData.visibleButtons.buttonElement._handleEvent(elem, () => {
                    TUICData.visibleButtons.buttonFunction["userMute"](val.elements.article);
                });
                return elem;
            },
            deleteButton: function (val) {
                const elem = TUICLibrary.HTMLParse(TUICData.visibleButtons.buttonHTML["deleteButton"](val.option.isBigArticle, val.option.isMe)).item(0);
                if (val.option.isMe) {
                    TUICData.visibleButtons.buttonElement._handleEvent(elem, () => {
                        TUICData.visibleButtons.buttonFunction["deleteButton"](val.elements.article);
                    });
                }
                return elem;
            },
            quoteTweet: function (val) {
                const elem = TUICLibrary.HTMLParse(TUICData.visibleButtons.buttonHTML["quoteTweet"](val.option.isBigArticle, val.option.cannotRT)).item(0);
                if (!val.option.cannotRT)
                    TUICData.visibleButtons.buttonElement._handleEvent(elem, () => {
                        TUICData.visibleButtons.buttonFunction["quoteTweet"](val.elements.buttonBarBase.querySelector(TUICData.visibleButtons.selectors["retweet-button"]));
                    });
                return elem;
            },
            likeAndRT: function (val) {
                const elem = TUICLibrary.HTMLParse(TUICData.visibleButtons.buttonHTML["likeAndRT"](val.option.isBigArticle, val.option.cannotRT)).item(0);
                if (!val.option.cannotRT)
                    TUICData.visibleButtons.buttonElement._handleEvent(elem, () => {
                        TUICData.visibleButtons.buttonFunction["likeAndRT"](val.elements.buttonBarBase.querySelector(TUICData.visibleButtons.selectors["retweet-button"]), val.elements.buttonBarBase.querySelector(TUICData.visibleButtons.selectors["like-button"]));
                    });
                return elem;
            },
        },
        emptyElement: function () {
            return TUICLibrary.HTMLParse(
                `<div class="css-1dbjc4n r-xoduu5 r-1udh08x"><span data-testid="app-text-transition-container" style="transition-property: transform; transition-duration: 0.3s; transform: translate3d(0px, 0px, 0px);"><span class="css-901oao css-16my406 r-1tl8opc r-qvutc0 ${TUICLibrary.fontSizeClass(
                    "r-1enofrn r-1f529hi r-cxdvbh r-1qfz7tf",
                    "r-1enofrn r-fxxt2n r-cxdvbh r-1qfz7tf",
                    "r-n6v787 r-1cwl3u0 r-1k6nrdp r-1e081e0",
                    "r-1b43r93 r-14yzgew r-1buqboj r-1orpq53",
                    "r-ubezar r-hjklzo r-e157gu r-779j7e",
                )}"></span></span></div>`,
                "text/html",
            ).item(0);
        },
        fixEngagements: {
            engagementsBox: () => {
                return TUICLibrary.HTMLParse(`<div class="TUICEngagementsBox css-1dbjc4n r-1awozwy r-1efd50x r-5kkj8d r-18u37iz ${TUICLibrary.backgroundColorClass("r-2sztyj", "r-1kfrmmb", "r-1dgieki")}"></div>`, "text/html").item(0);
            },
            links: (id, article, isShort) => {
                const returnELem = TUICLibrary.HTMLParse(
                    `<div dir="ltr" class="css-901oao r-1tl8opc r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0 ${TUICLibrary.fontSizeClass("r-23eiwj", "r-9qu9m4", "r-1yzf0co", "r-w0qc3r", "r-18scu15")}" style="cursor: pointer;margin-right:1em;">
                           <span class="css-901oao css-16my406 r-1tl8opc r-1cwl3u0 r-bcqeeo r-qvutc0 ${TUICLibrary.fontSizeClass("r-1b43r93", "r-1b43r93", "r-a023e6", "r-1inkyih", "r-1i10wst")} ${TUICLibrary.backgroundColorClass("r-1bwzh9t", "r-115tad6", "r-14j79pv")}">
                             <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0">${TUICI18N.get("bottomTweetButtons-setting-placeEngagementsLink-" + id + (isShort ? "-short" : ""))}</span>
                           </span>
                         </div>`.replace(/( |\n|\r)( |\n|\r)+/g, ""),
                    "text/html",
                ).item(0);
                returnELem.addEventListener("click", async () => {
                    article.querySelector(`[data-testid="caret"]`).click();
                    await TUICLibrary.waitForElement(`[data-testid="tweetEngagements"]`);
                    document.querySelector(`[data-testid="tweetEngagements"]`).click();
                    await TUICLibrary.waitForElement(`[role="tab"][href$="/${id}"]`);
                    document.querySelector(`[role="tab"][href$="/${id}"]`).click();
                });
                return returnELem;
            },
        },
    },
    showLinkCardInfo: (link, domain, title, description) => {
        return TUICLibrary.HTMLParse(
            `<div class="css-1dbjc4n r-16y2uox r-1wbh5a2 r-1777fci TUIC_LinkCardInfo">
                <a href="${link}" rel="noopener noreferrer nofollow" target="_blank" role="link" class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1loqt21 r-18u37iz r-16y2uox r-1wtj0ep r-1ny4l3l r-o7ynqc r-6416eg">
                    <div class="css-1dbjc4n r-16y2uox r-1wbh5a2 r-z5qs1h r-1777fci ${TUICLibrary.fontSizeClass(
                        "r-1t982j2 r-1qfz7tf r-1b3ntt7",
                        "r-1t982j2 r-1qfz7tf r-1b3ntt7",
                        "r-kzbkwu r-1e081e0 r-ttdzmv",
                        "r-ig955 r-1orpq53 r-19urhcx",
                        "r-i03k3n r-779j7e r-5t7p9m",
                    )}" id="id__7fpkgwkoke8" data-testid="card.layoutSmall.detail">
                        <div dir="auto" class="css-901oao css-1hf3ou5 ${TUICLibrary.backgroundColorClass("r-1bwzh9t", "r-115tad6", "r-14j79pv")} r-37j5jr ${TUICLibrary.fontSizeClass(
                            "r-1b43r93 r-14yzgew",
                            "r-1b43r93 r-hjklzo",
                            "r-a023e6 r-rjixqe",
                            "r-1inkyih r-hbpseb",
                            "r-1i10wst r-135wba7",
                        )} r-16dba41 r-bcqeeo r-qvutc0">
                            <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0">
                                <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0">${domain}</span>
                            </span>
                        </div>
                        <div dir="auto" class="css-901oao css-1hf3ou5 ${TUICLibrary.backgroundColorClass("r-1nao33i", "r-vlxjld", "r-18jsvk2")} r-37j5jr ${TUICLibrary.fontSizeClass(
                            "r-1b43r93 r-14yzgew",
                            "r-1b43r93 r-hjklzo",
                            "r-a023e6 r-rjixqe",
                            "r-1inkyih r-hbpseb",
                            "r-1i10wst r-135wba7",
                        )} r-16dba41 r-bcqeeo r-qvutc0">
                            <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0">
                                <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0">${title}</span>
                            </span>
                        </div>
                        <div dir="auto" class="css-901oao css-cens5h ${TUICLibrary.backgroundColorClass("r-1bwzh9t", "r-115tad6", "r-14j79pv")} r-37j5jr ${TUICLibrary.fontSizeClass(
                            "r-1b43r93 r-14yzgew",
                            "r-1b43r93 r-hjklzo",
                            "r-a023e6 r-rjixqe",
                            "r-1inkyih r-hbpseb",
                            "r-1i10wst r-135wba7",
                        )} r-16dba41 r-bcqeeo r-qvutc0" style="-webkit-line-clamp: 2; white-space: normal;">
                            <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0">
                                <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0">${description}</span>
                            </span>
                        </div>
                    </div>
                </a>
            </div>`,
        ).item(0);
    },
    sidebarButtons: {
        selectors: {
            home: `[href="/home"]`,
            explore: `[href="/explore"]`,
            communities: `[href$="/communities"],#TUICSidebar_communities`,
            notifications: `[href*="/notifications"]`,
            messages: `[href^="/messages"]`,
            bookmarks: `[href="/i/bookmarks"],#TUICSidebar_bookmarks`,
            "twiter-blue": `[href="/i/twitter_blue_sign_up"]`,
            profile: `[data-testid="AppTabBar_Profile_Link"]`,
            moremenu: `[data-testid="AppTabBar_More_Menu"]`,
            topics: `#TUICSidebar_topics`,
            lists: `#TUICSidebar_lists,[href$="/lists"]`,
            circles: `#TUICSidebar_circles`,
            drafts: "#TUICSidebar_drafts",
            connect: "#TUICSidebar_connect",
            communitynotes: `[href="/i/communitynotes"]`,
            "verified-choose": `[href="/i/verified-choose"]`,
            display: "#TUICSidebar_display",
            muteAndBlock: "#TUICSidebar_muteAndBlock",
        },
        html: {
            __base: (id, svg) => {
                /* eslint-disable indent */
                return `
        <a id="TUICSidebar_${id}" href="${TUICLibrary.getPrimitiveOrFunction(
            TUICData.sidebarButtons.tuicButtonGoToUrl[id],
        )}" role="link" tabindex="0" class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1habvwh r-1loqt21 r-6koalj r-eqz5dr r-16y2uox r-1ny4l3l r-oyd9sg r-13qz1uu TUICOriginalContent TUICSidebarButton ${location.pathname.endsWith("/topics") ? "TUICSidebarSelected" : ""}">
          <div class="css-1dbjc4n r-1awozwy r-sdzlij r-18u37iz r-1777fci r-dnmrzs r-o7ynqc r-6416eg ${TUICLibrary.fontSizeClass("r-q81ovl", "r-q81ovl", "r-xyw6el", "r-kq9wsh", "r-1slz7xr")}">
            <div class="css-1dbjc4n">
              <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e ${TUICLibrary.backgroundColorCheck() == "light" ? "r-18jsvk2" : "r-vlxjld r-1nao33i"}">
                <g>${svg}</g>
              </svg>
            </div>
            <div dir="ltr" class="css-901oao css-1hf3ou5 r-1tl8opc ${TUICLibrary.fontSizeClass(
                "r-1i10wst r-16dba41 r-hbpseb r-1uvorsx r-1oa8saw",
                "r-1b6yd1w r-16dba41 r-7ptqe7 r-j240cv r-y3t9qe",
                "r-adyw6z r-135wba7 r-1joea0r r-88pszg",
                "r-evnaw r-16dba41 r-eaezby r-uzqwk8 r-12e0a8i",
                "r-1x35g6 r-16dba41 r-1h1c4di r-6uxfom r-le9fof",
            )} r-bcqeeo r-qvutc0 ${TUICLibrary.backgroundColorCheck() == "light" ? "r-18jsvk2" : "r-vlxjld r-1nao33i"}" style="${document.querySelector(TUICData.sidebarButtons.selectors.moremenu).children[0].childNodes.length == 2 ? "" : "none"}" >
              <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0">${TUICI18N.get("sidebarButtons-" + id)}</span>
            </div>
          </div>
        </a>`;
                /* eslint-enable indent */
            },
            topics: function () {
                return TUICData.sidebarButtons.html.__base("topics", `<path d="${SIDEBAR_BUTTON_ICON.topics.unselected}"></path>`);
            } /*
      "lists": function () {
        return TUICData.sidebarButtons.html.__base("lists",`<path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"></path>`)
      },*/,
            circles: function () {
                return TUICData.sidebarButtons.html.__base("circles", `<path d="${SIDEBAR_BUTTON_ICON.circles.unselected}"></path>`);
            } /*
      "communities": function () {
        return TUICData.sidebarButtons.html.__base("communities",`<path d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"></path>`)
      },*/,
            drafts: function () {
                return TUICData.sidebarButtons.html.__base("drafts", `<path d="${SIDEBAR_BUTTON_ICON.drafts.unselected}">`);
            },
            connect: function () {
                return TUICData.sidebarButtons.html.__base("connect", `<path d="${SIDEBAR_BUTTON_ICON.connect.unselected}"></path>`);
            },
            display: function () {
                return TUICData.sidebarButtons.html.__base(
                    "display",
                    `<path d="${SIDEBAR_BUTTON_ICON.display.unselected}"></path>
        <path d="M14 12c0-1.1-.9-2-2-2-1.11 0-2 .9-2 2v2h2c1.1 0 2-.9 2-2z" class="r-1cvl2hr"></path>`,
                );
            },
            muteAndBlock: function () {
                return TUICData.sidebarButtons.html.__base("muteAndBlock", `<path d="${SIDEBAR_BUTTON_ICON.muteAndBlock.unselected}"></path>`);
            },
            bookmarks: function () {
                return TUICData.sidebarButtons.html.__base("bookmarks", `<path d="${SIDEBAR_BUTTON_ICON.bookmarks.unselected}"></path>`);
            },
        },
        buttonClickInMoreMenu: async (e, selector) => {
            await TUICData.sidebarButtons.waitSetElement(`[data-testid="AppTabBar_More_Menu"] > div > div`);
            const foundElem = await TUICData.sidebarButtons.waitSetElement(`:is([role="group"],[data-testid="Dropdown"]) ${selector}`);
            if (!foundElem) {
                await TUICData.sidebarButtons.waitSetElement(`[data-testid="AppTabBar_More_Menu"] > div > div`);
                return false;
            }
            return true;
        },
        waitSetElement: async (selector) => {
            for (let i = 0; i <= 25; i++) {
                const re = await new Promise((resolve2) => {
                    const elem = document.querySelector(selector);
                    if (elem != null) {
                        elem.click();
                        resolve2("ok");
                    }
                    resolve2("bb");
                });
                if (re == "ok") return true;
                await new Promise((resolve2) => {
                    window.setTimeout(() => {
                        resolve2("");
                    }, 100);
                });
            }
            return false;
        },
        buttonFunctions: {
            topics: async function (e) {
                e?.preventDefault?.();
                if (!location.pathname.endsWith("/topics")) {
                    const moreMenu = document.querySelector(`[data-testid="AppTabBar_More_Menu"] > div > div`);
                    if (document.querySelector(`[role="menu"]`) == null) moreMenu.click();
                    setTimeout(async () => {
                        document.querySelector(`:is([role="group"],[data-testid="Dropdown"]) [data-testid="settingsAndSupport"]`).click();
                        document.querySelector(`[href="/settings"]`)?.click();
                        await TUICData.sidebarButtons.waitSetElement(`[href="/settings/privacy_and_safety"]`);
                        await TUICData.sidebarButtons.waitSetElement(`[href="/settings/content_you_see"]`);
                        await TUICData.sidebarButtons.waitSetElement(`main [href$="/topics"]`);
                    }, 150);
                }
            },
            lists: function (e) {
                e?.preventDefault?.();
                TUICData.sidebarButtons.buttonClickInMoreMenu(e, `[href$="/lists"]`);
            },
            circles: async function (e) {
                e?.preventDefault?.();
                document.querySelector(`[href="/compose/tweet"]`).click();
                await TUICData.sidebarButtons.waitSetElement(`[data-viewportview="true"] [role="button"][aria-haspopup="menu"]`);
                await TUICData.sidebarButtons.waitSetElement(`span+[role="button"]`);
            } /*
      "communities": function (e) {
        TUICData.sidebarButtons.buttonClickInMoreMenu(e, `[href$="/communities"]`)
      },*/,
            drafts: async function (e) {
                e?.preventDefault?.();
                //TUICData.sidebarButtons.buttonClickInMoreMenu(e, `[href="/compose/tweet/unsent/drafts"]`);
                document.querySelector(`[href="/compose/tweet"]`).click();
                await TUICData.sidebarButtons.waitSetElement(`[data-testid="unsentButton"]`);
            },
            connect: function (e) {
                e?.preventDefault?.();
                TUICData.sidebarButtons.buttonClickInMoreMenu(e, `[href="/i/connect_people"]`);
            },
            display: async function (e) {
                e?.preventDefault?.();
                if (TUICData.sidebarButtons.buttonClickInMoreMenu(e, `:is([role="group"],[data-testid="Dropdown"]) [data-testid="settingsAndSupport"]`)) {
                    await TUICData.sidebarButtons.waitSetElement(`[href="/i/display"]`);
                }
            },
            muteAndBlock: async function (e) {
                e?.preventDefault?.();
                if (!location.pathname.endsWith("/settings/privacy_and_safety")) {
                    const moreMenu = document.querySelector(`[data-testid="AppTabBar_More_Menu"] > div > div`);
                    if (document.querySelector(`[role="menu"]`) == null) moreMenu.click();
                    setTimeout(async () => {
                        document.querySelector(`:is([role="group"],[data-testid="Dropdown"]) [data-testid="settingsAndSupport"]`).click();
                        document.querySelector(`[href="/settings"]`)?.click();
                        await TUICData.sidebarButtons.waitSetElement(`[href="/settings/privacy_and_safety"]`);
                        await TUICData.sidebarButtons.waitSetElement(`[href="/settings/mute_and_block"]`);
                    }, 150);
                }
            },
            bookmarks: function (e) {
                e?.preventDefault?.();
                TUICData.sidebarButtons.buttonClickInMoreMenu(e, `[href="/i/bookmarks"]`);
            },
        },
        tuicButtonUrl: {
            topics: `/topics`,
            lists: `/lists`,
            circles: `/i/circles/`,
            communities: "/communities",
            connect: "/i/connect_people",
            drafts: "/compose/tweet/unsent/",
            display: "/i/display",
            muteAndBlock: "/settings/mute_and_block",
            bookmarks: "/i/bookmarks",
        },
        tuicButtonGoToUrl: {
            __setURL: (id, selector, setURLWay) => {
                const elem = document.querySelector(selector);
                if (elem) {
                    return setURLWay(elem);
                } else {
                    TUICData.sidebarButtons.tuicButtonGoToUrl.__setURLWait(id, selector, setURLWay);
                    return "";
                }
            },
            __setURLWait: async (id, selector, setURLWay) => {
                await TUICLibrary.waitForElement(selector);
                const elem = document.querySelector(`#TUICSidebar_${id}`);
                if (elem) {
                    elem.href = setURLWay(document.querySelector(selector));
                }
            },
            topics: () => {
                return TUICData.sidebarButtons.tuicButtonGoToUrl.__setURL("topics", `[data-testid="SideNav_AccountSwitcher_Button"] [data-testid^="UserAvatar-Container-"]`, (elem) => {
                    return `https://twitter.com/${elem.getAttribute("data-testid").replace(`UserAvatar-Container-`, "")}/topics`;
                });
            },
            lists: () => {
                return TUICData.sidebarButtons.tuicButtonGoToUrl.__setURL("lists", `[data-testid="SideNav_AccountSwitcher_Button"] [data-testid^="UserAvatar-Container-"]`, (elem) => {
                    return `https://twitter.com/${elem.getAttribute("data-testid").replace(`UserAvatar-Container-`, "")}/lists`;
                });
            },
            communities: () => {
                return TUICData.sidebarButtons.tuicButtonGoToUrl.__setURL("communities", `[data-testid="SideNav_AccountSwitcher_Button"] [data-testid^="UserAvatar-Container-"]`, (elem) => {
                    return `https://twitter.com/${elem.getAttribute("data-testid").replace(`UserAvatar-Container-`, "")}/communities`;
                });
            },
            circles: "https://twitter.com/i/circles/",
            connect: "https://twitter.com/i/connect_people",
            drafts: "https://twitter.com/compose/tweet/unsent/drafts",
            display: "https://twitter.com/i/display",
            muteAndBlock: "https://twitter.com/settings/mute_and_block",
            bookmarks: "https://twitter.com/i/bookmarks",
        },
    },
    invisibleItems: {
        all: ["config-premium", "hideBelowDM", "verifiedNotifications"],
        i18n: {
            "config-premium": "invisibleItems-configPremium",
            hideBelowDM: "invisibleItems-hideBelowDM",
            verifiedNotifications: "invisibleItems-verifiedNotifications",
        },
    },
    "profileSetting.invisible": {
        all: ["subscribe-profile", "profileHighlights", "profileAffiliates", "verifiedFollowerTab"],
        i18n: {
            "subscribe-profile": "invisibleItems-subscribeProfile",
            profileHighlights: "invisibleItems-profileHighlights",
            profileAffiliates: "invisibleItems-profileAffiliates",
            verifiedFollowerTab: "invisibleItems-verifiedFollowerTab",
        },
    },
    "profileSetting.tabs": {
        all: ["pinnedTab"],
        i18n: {
            pinnedTab: "profileSetting-tabs-pinnedTab",
        },
    },
    tweetDisplaySetting: {
        all: ["bottomSpace", "twitter-pro-promotion-btn", "subscribe-tweets"],
        i18n: {
            bottomSpace: "bottomTweetButtons-setting-removeSpaceBottomTweet-v2",
            "twitter-pro-promotion-btn": "invisibleItems-twitterProPromotionBtn",
            "subscribe-tweets": "invisibleItems-subscribeTweets",
        },
    },
    rightSidebar: {
        all: ["searchBox", "verified", "space", "relevantPeople", "trend", "osusumeUser", "links"],
        i18n: {
            verified: "rightSidebar-rightSidebarVerified",
            trend: "rightSidebar-trend",
            osusumeUser: "rightSidebar-osusumeUser",
            links: "rightSidebar-links",
            searchBox: "rightSidebar-searchBox",
            space: "rightSidebar-space",
            relevantPeople: "rightSidebar-relevantPeople",
        },
    },
    XToTwitter: {
        all: ["XToTwitter", "PostToTweet"],
        i18n: { XToTwitter: "XtoTwitter-XtoTwitter", PostToTweet: "XtoTwitter-PostToTweet" },
    },
    timeline: {
        all: ["osusume-user-timeline", "hideOhterRTTL", "accountStart"],
        i18n: {
            "osusume-user-timeline": "timeline-osusumeUsersOnTL",
            hideOhterRTTL: "timeline-hideOhterRTTL",
            accountStart: "timeline-accountStart",
        },
    },
    "timeline-discoverMore": {
        all: ["discoverMore_nomal", "discoverMore_detailOpen", "discoverMore_detailClose", "discoverMore_invisible"],
        i18n: {
            discoverMore_nomal: "timeline-discoverMore-nomal",
            discoverMore_detailOpen: "timeline-discoverMore-detailOpen",
            discoverMore_detailClose: "timeline-discoverMore-detailClose",
            discoverMore_invisible: "timeline-discoverMore-invisible",
        },
    },
    "tweetDisplaySetting.linkCopyURL": {
        all: ["linkCopyURL_twitter", "linkCopyURL_X", "linkCopyURL_vxTwitter"],
        i18n: {
            linkCopyURL_twitter: "bottomTweetButtons-setting-linkCopyURL-twitter",
            linkCopyURL_X: "bottomTweetButtons-setting-linkCopyURL-X",
            linkCopyURL_vxTwitter: "bottomTweetButtons-setting-linkCopyURL-vxTwitter",
        },
        url: {
            linkCopyURL_twitter: "twitter.com",
            linkCopyURL_X: "x.com",
            linkCopyURL_vxTwitter: "vxtwitter.com",
        },
    },
    "tweetDisplaySetting.linkShareCopyURL": {
        all: ["linkShareCopyURL_twitter", "linkShareCopyURL_X", "linkShareCopyURL_vxTwitter"],
        i18n: {
            linkShareCopyURL_twitter: "bottomTweetButtons-setting-linkCopyURL-twitter",
            linkShareCopyURL_X: "bottomTweetButtons-setting-linkCopyURL-X",
            linkShareCopyURL_vxTwitter: "bottomTweetButtons-setting-linkCopyURL-vxTwitter",
        },
    },
    styleColor: {
        light: {
            textColor: "rgba(0,0,0,1)",
            containerBackground: "rgb(247, 249, 249)",
            containerBackground2: "rgb(237, 239, 239)",
            colorHover: "#00000040",
            detailBorder: "rgba(0,0,0,0.08)",
        },
        blue: {
            textColor: "rgba(255,255,255,1)",
            containerBackground: "rgb(30, 39, 50)",
            containerBackground2: "rgb(40, 49, 60)",
            colorHover: "#ffffff30",
            detailBorder: "rgba(255,255,255,0.08)",
        },
        dark: {
            textColor: "rgba(255,255,255,1)",
            containerBackground: "rgb(22, 24, 28)",
            containerBackground2: "rgb(28, 34, 38)",
            colorHover: "#ffffff40",
            detailBorder: "rgba(255,255,255,0.16)",
        },
    },
    twitterIcon: {
        all: ["nomal", "invisible", "dog", "twitter", "twitterIcon-X", "custom"],
        i18n: {
            nomal: "twitterIcon-normal",
            invisible: "twitterIcon-invisible",
            dog: "twitterIcon-dog",
            twitter: "twitterIcon-twitter",
            "twitterIcon-X": "twitterIcon-X",
            custom: "twitterIcon-custom",
        },
    },
};
