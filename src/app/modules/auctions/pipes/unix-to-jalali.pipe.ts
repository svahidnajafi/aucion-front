import {Pipe, PipeTransform} from '@angular/core';
import {convertUnixToJalali} from '../../../shared/functions/date-helpers';
@Pipe({
    name: 'unixJalali'
})
export class UnixToJalaliPipe implements PipeTransform {
    transform(value: number): any {
        if (value) {
            return convertUnixToJalali(value);
        } else {
            return value;
        }
    }
    
}
