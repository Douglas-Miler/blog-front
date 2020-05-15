import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toDate'
})
export class ToDatePipe implements PipeTransform{
    
    transform(articleUpdateUnixTime: number) {
        const date: Date = new Date(articleUpdateUnixTime*1000);
        const day: number = date.getUTCDate();
        const month: number = date.getUTCMonth();
        const year: number = date.getUTCFullYear();

        return day + '/' + month + '/' + year;
    }

}