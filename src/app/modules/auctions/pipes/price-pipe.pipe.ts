import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
        name: 'pricePipe'
})
export class PricePipe implements PipeTransform {

        transform(val): any {
                if (val) {
                        val = this.format_number(val, '');
                }
                return val;
        }


        format_number(num: number, prefix): any {
                // console.warn('number is: ' + number);
                const thousandSeparator = ',';
                const decimalSeparator = '.';
                const regex = new RegExp('[^' + decimalSeparator + '\\d]', 'g');
                const numberString = num.toString().replace(regex, '');
                const split = numberString.split(decimalSeparator);
                const rest = split[0].length % 3;
                let result = split[0].substr(0, rest);
                const thousands = split[0].substr(rest).match(/\d{3}/g);

                if (thousands) {
                        const separator = rest ? thousandSeparator : '';
                        result += separator + thousands.join(thousandSeparator);
                }
                result = split[1] !== undefined ? result + decimalSeparator + split[1] : result;
                return prefix === undefined ? result : (result ? prefix + result : '');
        }

}
