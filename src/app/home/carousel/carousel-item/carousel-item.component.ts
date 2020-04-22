import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'blog-carousel-item',
    templateUrl: './carousel-item.component.html',
    styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent implements OnInit{

    @Input() src: string = '';
    @Input() description: string = '';

    ngOnInit(): void {

    }

}