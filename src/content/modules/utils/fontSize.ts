/**
 * Twitterの「フォントサイズ」に基づいて値を返します。
 *
 * @param {unknwon} x1 フォントサイズが一番小さいときの返り値(設定画面では左端)
 * @param {unknwon} x2 フォントサイズが二番目に小さいときの返り値
 * @param {unknwon} x3 フォントサイズが三番目に小さいときの返り値
 * @param {unknwon} x4 フォントサイズが四番目に小さいときの返り値
 * @param {unknwon} x5 フォントサイズが五番目に小さいときの返り値
 * @return {unknwon} 返り値もしくはそのままの値
 */
export function fontSizeClass<T extends number | string>(x1: T, x2: T, x3: T, x4: T, x5: T) {
    const fontSize = document.querySelector("html").style.fontSize.toString();
    if (fontSize == "17px") {
        return x4;
    } else if (fontSize == "18px") {
        return x5;
    } else if (fontSize == "15px") {
        return x3;
    } else if (fontSize == "14px") {
        return document.querySelector(`h1[role="heading"] > a[href="/home"]`)?.className.includes("r-116um31") ? x1 : x2;
    }
}
