let TimeFormat: Intl.DateTimeFormat;

let prefSecond: boolean;
let prefHour12: boolean;
export function getTimeFormat(second: boolean, hour12: boolean): Intl.DateTimeFormat{
    if(!TimeFormat || prefHour12 !== hour12 || prefSecond !== prefSecond){
        TimeFormat = new Intl.DateTimeFormat(undefined,  {"timeStyle": second ? "medium" : "short", "hour12": hour12});
        prefHour12 = hour12;
        prefSecond = second;
    }
    return TimeFormat;
}