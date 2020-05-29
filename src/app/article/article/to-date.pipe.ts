import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toDate'
})
export class ToDatePipe implements PipeTransform{
    
    transform(articleUpdateUnixTime: number) {
        const date: Date = new Date(articleUpdateUnixTime*1000);
        const day: number = date.getDate();
        const month: number = date.getMonth();
        const year: number = date.getFullYear();

        return day + '/' + month + '/' + year;
    }

}