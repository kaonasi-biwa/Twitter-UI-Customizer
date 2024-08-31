// Objectの中身はこれに従ってください
type TUICSetting =
    /* eslint-disable style/indent, style/indent-binary-ops, style/no-multi-spaces */
    | {
          type: "color"; // 色設定
          i18n: string;
          default?: number; // 0は変更なし、1はTwitter時代の色、3はカスタム、4はライトとダークのカスタム。デフォルトは0。実際の設定のcolorTypeに相当
          values: { type: "background" | "border" | "color" }[]; //色の種類の順番。実際には配列の中身のtypeがそのままkeyになる (unsent-tweetのcolorならunsent-tweet.colorでアクセス)
      }
    | {
          type: "colorTemplate"; // 色設定 type:"color"でvaluesを[{type: "background"},{type: "border"},{type: "color"}]としたときと同じ
          i18n: string;
          default?: number;
      };
/* eslint-enable style/indent, style/indent-binary-ops, style/no-multi-spaces */
export const TUICColorSettings = {
    "unsent-tweet": {
        type: "colorTemplate",
        i18n: "settingColors-editUnsetTweet",
        values: [],
    },
    "not-following": {
        type: "colorTemplate",
        i18n: "settingColors-notFollowingButton",
        values: [],
    },
    willFollow: {
        type: "colorTemplate",
        i18n: "settingColors-willFollowButton",
        values: [],
    },
    following: {
        type: "colorTemplate",
        i18n: "settingColors-followingButton",
        values: [],
    },
    "un-following": {
        type: "colorTemplate",
        i18n: "settingColors-unfollowButton",
        values: [],
    },
    blocking: {
        type: "colorTemplate",
        i18n: "settingColors-blocking",
        values: [],
    },
    "blocking-unlock": {
        type: "colorTemplate",
        i18n: "settingColors-blockingUnlock",
        values: [],
    },
    profile: {
        type: "colorTemplate",
        i18n: "settingColors-editProfile",
        values: [],
    },
    "profile-save": {
        type: "colorTemplate",
        i18n: "settingColors-saveProfile",
        values: [],
    },
    birthday: {
        type: "colorTemplate",
        i18n: "settingColors-finalDecideButton",
        values: [],
    },
    twitterIcon: {
        type: "color",
        i18n: "settingColors-twitterIcon",
        default: 1,
        rejectColorType: [0],
        values: [{ type: "sidebar" }, { type: "favicon" }],
    },
};
