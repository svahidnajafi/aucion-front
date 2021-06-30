import * as moment from 'jalali-moment';

export function convertJalaliToUnix(date: any): number {
    const reformatedDate = moment.from(date, 'en').utc(true).toJSON();
    return +(new Date(reformatedDate));
}

export function convertUnixToJalali(timestamp: number): any {
    const normalizedDate = (new Date(timestamp))
        .toISOString().slice(0, 10)
        .replace('-', '/')
        .replace('-', '/');
    console.log(normalizedDate);
    return moment.from(normalizedDate, 'YYYY/MM/DD')
        .locale('fa')
        .format('YYYY/MM/DD');
}

export function convertUnixToJalaliDate(timestamp: number): any {
    const normalizedDate = (new Date(timestamp))
        .toISOString().slice(0, 10)
        .replace('-', '/')
        .replace('-', '/');
    console.log(normalizedDate);
    return moment.from(normalizedDate, 'YYYY/MM/DD')
        .locale('fa');
}
