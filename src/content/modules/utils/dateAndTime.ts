import { getPref } from "../pref";

let TimeFormat: Intl.DateTimeFormat;

let prefSecond: boolean;
let prefHour12: boolean;
export function getTimeFormat(): Intl.DateTimeFormat{
    const [second, hour12] = [getPref("dateAndTime.options.second"), getPref("dateAndTime.options.hour12")];
    if(!TimeFormat || prefHour12 !== hour12 || prefSecond !== prefSecond){
        TimeFormat = new Intl.DateTimeFormat(undefined,  {"timeStyle": second ? "medium" : "short", "hour12": hour12});
        [prefHour12, prefSecond] = [hour12, second];
    }
    return TimeFormat;
}

const DateFormat = Intl.DateTimeFormat(undefined, { month: "short", day: "numeric" });

export function getAbsolutelyTime(dateTime: string): string {
    const date = new Date(dateTime);
    const nowDate = new Date()
    if(date.getDate() < nowDate.getDate()){
        return DateFormat.format(date)
    }else{
        return getTimeFormat().format(date);
    }
}