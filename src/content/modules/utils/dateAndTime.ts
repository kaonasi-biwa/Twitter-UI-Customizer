import { TUICI18N } from "../i18n";
import { getPref } from "../pref";

let TimeFormat: Intl.DateTimeFormat;
let language = "";

let prefSecond: boolean;
let prefHour12: boolean;
export function getTimeFormat(changedLang = false): Intl.DateTimeFormat {
    const [second, hour12] = [getPref("dateAndTime.options.second"), getPref("dateAndTime.options.hour12")];
    if (changedLang || !TimeFormat || prefHour12 !== hour12 || prefSecond !== second) {
        TimeFormat = new Intl.DateTimeFormat(language, { timeStyle: second ? "medium" : "short", hour12: hour12 });
        [prefHour12, prefSecond] = [hour12, second];
    }
    return TimeFormat;
}

let DateFormat: Intl.DateTimeFormat;

export function getAbsolutelyTime(dateTime: string): string {
    if (language !== document.querySelector("html").lang) {
        language = document.querySelector("html").lang;
        DateFormat = Intl.DateTimeFormat(language, { month: "short", day: "numeric" });
        getTimeFormat(true);
    }
    const date = new Date(dateTime);
    const nowDate = new Date();
    if (date.getDate() < nowDate.getDate()) {
        return DateFormat.format(date);
    } else {
        return getTimeFormat().format(date);
    }
}

export function isRelativeTime(dateText: string): boolean {
    const timeTempleteText: string = TUICI18N.get("dateAndTime.options.absolutelyTime.ago");
    const timeTempleteReg = new RegExp(`^${timeTempleteText.replace("{0}",".*")}$`,"i");
    const timeTempleteReg2 = new RegExp(`^${timeTempleteText}`,"i");
    return timeTempleteReg.test(dateText) || timeTempleteReg2.test(dateText);
}