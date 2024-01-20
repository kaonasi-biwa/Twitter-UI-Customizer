# <img width="32" height="32" src="./icon/newIcon_TUIC_C_Blue.svg"> Twitter UI Customizer

![Header Image](./icon/header.png)
[![Github Actions](https://github.com/kaonasi-biwa/Twitter-UI-Customizer/workflows/Build/badge.svg)](https://github.com/kaonasi-biwa/Twitter-UI-Customizer/actions/workflows/packaging.yml)
[![Lint](https://github.com/kaonasi-biwa/Twitter-UI-Customizer/actions/workflows/lint.yml/badge.svg)](https://github.com/kaonasi-biwa/Twitter-UI-Customizer/actions/workflows/lint.yml)
[![Version](https://img.shields.io/github/v/release/kaonasi-biwa/Twitter-UI-Customizer?label=Version)](https://github.com/kaonasi-biwa/Twitter-UI-Customizer/releases/latest)
[![License](https://img.shields.io/github/license/kaonasi-biwa/Twitter-UI-Customizer?label=License&color=blue)](https://github.com/kaonasi-biwa/Twitter-UI-Customizer/blob/main/LICENSE)  
<a href="https://addons.mozilla.org/ja/firefox/addon/twitter-ui-customizer/"><img alt="Firefox Browser Add-ons" width="172" height="60" src="https://blog.mozilla.org/addons/files/2015/11/get-the-addon.png"></a>
<a href="https://chrome.google.com/webstore/detail/twitter-ui-customizer/hpmhdmlhnppmmipefebkhkbpdcjiidmh?hl=ja"><img alt="Chrome Web Store" width="191.8" height="58" src="https://storage.googleapis.com/web-dev-uploads/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/HRs9MPufa1J1h5glNhut.png"></a>
<a href="https://crowdin.com/project/twiter-ui-customizer"><img alt="crowdin" width="175" height="50" src="https://badges.crowdin.net/badge/light/crowdin-on-dark@2x.png"></a>

[Instructions for Installation Using CRX Files](https://gist.github.com/Hibi-10000/54d283e5e5deabc3c491ce16556b4390)

[Resource Hub for Information, Settings, and CSS Collection (Optimize your Twitter UI to closely resemble the official Twitter look!)](https://github.com/kaonasi-biwa/TUIC-Information-Prefs-and-CSSs/blob/main/README.md)

For Firefox users, we recommend utilizing Firefox Browser Add-ons for automatic updates of TUIC.

For Chromium users, you have several options:

-   Chrome WebStore: Provides automatic updates, though the process can be slow.
-   Zip files: Require manual updates, but the changes can be implemented instantly.
-   Crx files: These may require some initial setup, but they offer immediate automatic updates.

Please choose the one you prefer!

## For Contributors

For detailed guidelines, please refer to [CONTRIBUTING.md](./CONTRIBUTING.md).

**We've transitioned to using pnpm as our package manager!**  
If you've been using yarn, you'll need to install pnpm, remove the `node_modules` directory, and then execute  
`pnpm i --frozen-lockfile`.

**With the adoption of Vite as our build tool, the debugging process has been updated!**  
For information on our build and debugging procedures, please refer to [docs/vite_build](./docs/vite_build.md).

These changes have been in effect since September 2, 2023.

## Options

-   Customize the border, background, and text color for various buttons including "Edit Unsent Tweet", "Unfollowed Follow Button", "Following Follow Button", "Unfollow Button", "Hover Follow Button", "Blocked User Follow Button", "Unblock Button", "Profile Settings", and "Final Decision" (e.g., when logging out).
-   Reorder the buttons under a tweet.
-   Add options such as "Add to Bookmark", "Copy Tweet Link", "Quote Tweet", "Block User", "Mute User", "Delete Tweet", "Like and Retweet", "Send via DM" to the buttons under a tweet.
-   Retweet directly by pressing the retweet button, bypassing the menu.
-   "Delete Tweet" and "Block User" directly from the buttons under a tweet, without opening a modal.
-   Display a scrollbar when the buttons under a tweet overflow horizontally.
-   Reorder the sidebar.
-   Add "Topics", "Drafts", "Move", "Display", "Mute and Block" to the sidebar.
-   Reduce the vertical spacing of the sidebar if it's too large.
-   Hide the sidebar's scrollbar.
-   Hide "Search Bar", "Authenticate", "What's happening?", "Listen to ongoing Spaces", "Recommended Users", "Link Collection" in the right sidebar.
-   Choose the icon at the top left of Twitter and at startup from "Default", "Hide", "Dog", "Bird", "X", "Custom Icon" (you can upload an image).
-   For custom icons, choose between a circle or a square.
-   Change the favicon.
-   Change the color of the Twitter icon and X icon.
-   Hide recommended users on the timeline and the Twitter Pro promotion button.
-   Hide retweets on the timeline.
-   Hide the message at the bottom right of the screen.
-   Hide the "Find more" in the list of tweet replies.
-   Hide the occasional "Buy" at the top right of a tweet.
-   Hide the subscription button that occasionally appears on a profile.
-   Remove the "Highlights" tab from a profile.
-   Display client information.
-   Write custom CSS.
-   Export/import settings.

## Special Thanks (Not sure if this is used correctly)

GitHub:

-   @irhdevel (For the wonderful design)
-   @GrapeApple0 (For displaying the client name)
-   @Taka005 (For organizing the source code)
-   @Hibi-10000 (For translating to American English & CRX release)
-   @KotoneFami (For adding features and organizing the source code)
-   @nakasyou (For improving the design & adding features)
-   @surapunoyousei (For making debugging easier)
-   @typeling1578 (For refactoring)
-   @regularenthropy (For refactoring & performance improvement)
-   @GreenDotBlue99 (For the tab pinning feature)
-   @nyanrus (For translating to Korean and improving the settings screen)

Crowdin:

-   @nyanrus (For translating to Korean and English)
-   @loading_yt (For translating to Simplified Chinese and Traditional Chinese)
-   @hibi_10000 (For translating to English)
-   @enthropyreg (For translating to Russian and Ukrainian)
-   @teamolhuang (For translating to Traditional Chinese)
-   @rosalindsun12 (For translating to Simplified Chinese)
-   @truselya (For translating to Russian)
-   @gok7ug (For translating to Turkish)
-   @saturnsoot (For translating to German)
-   @yanniekwok314 (For translating to Traditional Chinese)
    その他:

-   @CutterKnife\_ / Twitter **(Icon & Logo Creator)**
-   @PianoCat1010 / Twitter **(Creator of the 'Like and Retweet' Icon)**

## Source of Icon Images

[System UIcons (Unlicense)](https://www.systemuicons.com/)
