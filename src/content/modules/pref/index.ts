import { deleteRawPref, getRawPref, setRawPref } from "./prefController";
import { TUICSettings } from "./settings";

/**
 * TUICのPrefの値を取得します。
 *
 * @param {string} identifier 取得するPrefへのパス(ピリオド区切り)。
 * @param {object} source 使用するPrefのObject。
 * @return {unknown} 取得した値(identifierが空文字ならTUICのPref全体)
 */
export function getPref(identifier: string, source?) {
    return getRawPref(identifier,source);
}

/**
 * TUICのPrefの値を設定します。
 *
 * identifierが空文字ならTUICのPref全体が変更されます。
 * @param {string} identifier 取得するPrefへのパス(ピリオド区切り)。
 * @param {string} value 設定する値
 * @param {object} source 使用するPrefのObject。
 */
export function setPref(identifier: string, value: unknown, source?) {
    setRawPref(identifier,value,source)
}

/**
 * TUICのPrefの値を削除します。
 *
 * @param {string} identifier 取得するPrefへのパス(ピリオド区切り)。
 * @param {object} source 使用するPrefのObject。
 */
export function deletePref(identifier: string, source?) {
    deleteRawPref(identifier,source)
}

/**
 * 変更が加えられたTUICのPrefをlocalStorageへ保存します。
 */
export function savePref() {
    localStorage.setItem("TUIC", exportPref());
}

/**
 * TUICのPrefのすべての値を文字列として出力します。
 *
 * @return {string} TUICのPrefをJSON.stringify()で文字列にしたもの
 */
export function exportPref(): string {
    return JSON.stringify(getRawPref(""));
}

/**
 * `target` に `source` をマージします。 `target` オブジェクトは上書きされます。
 * @param {object} source マージ元
 * @param {object} target マージ先
 */
export function mergePref(source: object, target: object) {
    for (const i in source) {
        if (!(i in target)) {
            target[i] = source[i];
        } else if (typeof source[i] == "object" && !Array.isArray(source[i])) {
            mergePref(source[i], target[i]);
        }
    }
    return target;
}


let defaultData = null;

export function mergeDefaultPref(source) {
    if (defaultData == null) {
        defaultData = {};
        for (const elem in TUICSettings) {
            if (elem == "buttonColor") {
                defaultData.buttonColor = {};
                defaultData.buttonColorLight = {};
                defaultData.buttonColorDark = {};
            } else {
                const defaultReturn = getDefaultPref(elem);
                switch (defaultReturn.type) {
                    case "boolean": {
                        for (const data in defaultReturn.data) {
                            setRawPref(`${elem}.${data}`, defaultReturn.data[data], defaultData);
                        }
                        break;
                    }
                    case "select": {
                        setRawPref(elem, defaultReturn.data, defaultData);
                        break;
                    }
                    case "order": {
                        setRawPref(elem, structuredClone(defaultReturn.data), defaultData);
                        break;
                    }
                }
            }
        }
    }
    return mergePref(structuredClone(defaultData), structuredClone(source));
}

export function getDefaultPref(id: string) {
    const prefData = TUICSettings[id];
    switch (prefData.type) {
        case "boolean": {
            const returnObject = {};
            for (const elem of prefData.values) {
                returnObject[elem.id] = elem.default ?? false;
            }
            return { data: returnObject, type: prefData.type };
        }
        case "order": {
            return { data: structuredClone(prefData.default), type: prefData.type };
        }
        case "select": {
            return { data: prefData.default, type: prefData.type };
        }
    }
}
