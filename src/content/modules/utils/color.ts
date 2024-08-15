import { ColorData } from "@shared/sharedData";
import { getPref } from "../pref";

/**
 * RGB配列を#XXXXXX表記に変換します。
 *
 * @param {[number, number, number]} rgb RGBの色を表す配列
 * @return {string} #XXXXXX表記
 */
export function rgb2hex(rgb: [number, number, number]) {
    return `#${rgb.map((value) => ("0" + value.toString(16)).slice(-2)).join("")}`;
}

/**
 * #XXXXXX表記をRGB配列に変換します。
 *
 * @param {[number, number, number]} hex #XXXXXX表記
 * @return {string} rgbの色を表す配列
 */
export function hex2rgb(hex: string): [number, number, number] {
    if (hex.slice(0, 1) == "#") hex = hex.slice(1);
    return [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)].map((str) => {
        return parseInt(str, 16);
    }) as [number, number, number];
}

/**
 * TUICのPrefから色を取得します。
 * 色の指定がされていない場合は、ColorDataにあるデフォルト値を参照します。
 * modeが指定されていない場合は、実際に使われている背景色を取得します。
 * modeがlight/darkの場合でも、指定されていない場合はnormalとして色を取得します。
 * normalは設定画面上の「ベース」です。
 *
 * @param {string} name 色の設定ID
 * @param {string} type 色の種類(基本的にはbackground,border,color)
 * @return {"normal" | "light" | "dark" | null} 色の取得に使用する背景色
 */
export function getColorFromPref(name: string, type: string, mode: "normal" | "light" | "dark" | null, isSetting?: boolean) {
    const colorPref = getPref(`changeButtonsColor.${name}`);
    let _mode = "";
    _mode = mode ? mode : backgroundColorCheck() == "light" ? "light" : "dark";
    if (colorPref.colorType === 3 || isSetting) {
        return getPref(`changeButtonsColor.${name}.${type}.${_mode}`) ?? ColorData.defaultTUICColor.colors[name][type]?.[_mode] ?? getPref(`changeButtonsColor.${name}.${type}.normal`) ?? ColorData.defaultTUICColor.colors[name][type]["normal"];
    } else if (colorPref.colorType === 0 || colorPref.colorType === 1) {
        return ColorData.defaultTUICColor.colors[name][type]?.[_mode] ?? ColorData.defaultTUICColor.colors[name][type]["normal"];
    } else if (colorPref.colorType === 2) {
        return getPref(`changeButtonsColor.${name}.${type}.normal`) ?? ColorData.defaultTUICColor.colors[name][type]["normal"];
    }
}

/**
 * 現在の画面での背景色を取得します。
 *
 * @return {"dark" | "blue" | "light" } 背景色
 */
export function backgroundColorCheck(): "dark" | "blue" | "light" {
    const bodyStyle = document.querySelector("body").style.backgroundColor.toString();
    if (bodyStyle == "rgb(0, 0, 0)") {
        return "dark";
    } else if (bodyStyle == "rgb(21, 32, 43)") {
        return "blue";
    } else {
        return "light";
    }
}

/**
 * 現在の画面での背景色を用いて、与えられた値から返り値を選びます。
 *
 * @param {unknwon} dark 背景色が「ブラック」のときに返す値
 * @param {unknwon} blue 背景色が「ダークブルー」のときに返す値
 * @param {unknwon} white 背景色が「デフォルト」のときに返す値
 */
export function backgroundColorClass<T extends number | string>(dark: T, blue: T, white: T) {
    const backgroundType = backgroundColorCheck();
    if (backgroundType == "dark") {
        return dark;
    } else if (backgroundType == "blue") {
        return blue;
    } else {
        return white;
    }
}
