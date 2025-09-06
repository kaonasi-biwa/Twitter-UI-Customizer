import { TUICI18N } from "../i18n";
import { getPref } from "../pref";

let TimeFormat: Intl.DateTimeFormat;
let DateFormat: Intl.DateTimeFormat;
let language = "";

let second: boolean;
let hour12: boolean;

function getIntlFormat(){
    const [prefSecond, prefHour12] = [getPref("dateAndTime.options.second"), getPref("dateAndTime.options.hour12")];
    const changedLang = language !== document.querySelector("html").lang
    if(changedLang){
        language = document.querySelector("html").lang;
        DateFormat = Intl.DateTimeFormat(language, { month: "short", day: "numeric" });
    }
    if(changedLang || !TimeFormat || prefHour12 !== hour12 || prefSecond !== second){
        [hour12, second] = [prefHour12, prefSecond];
        TimeFormat = new Intl.DateTimeFormat(language, { timeStyle: second ? "medium" : "short", hour12: hour12 });
    }
}

export function formatTimeText(dateTime: string): string {
    getIntlFormat();
    return TimeFormat.format(new Date(dateTime));
}

export function getAbsolutelyTime(dateTime: string): string {
    getIntlFormat()
    const date = new Date(dateTime);
    const nowDate = new Date();
    if (date.getDate() < nowDate.getDate()) {
        return DateFormat.format(date);
    } else {
        return TimeFormat.format(date);
    }
}

export function isRelativeTime(dateText: string): boolean {
    const timeTempleteText: string = TUICI18N.get("dateAndTime.options.absolutelyTime.ago");
    const timeTempleteReg = new RegExp(`^${timeTempleteText.replace("{0}", ".*")}$`, "i");
    const timeTempleteReg2 = new RegExp(`^${timeTempleteText.replaceAll("{", "\\{").replaceAll("}", "\\}")}`, "i");
    return timeTempleteReg.test(dateText) || timeTempleteReg2.test(dateText);
}
