import { Component, Input } from '@angular/core';

@Component({
    selector: 'blog-carousel-item',
    templateUrl: './carousel-item.component.html',
    styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent {

    @Input() src: string = '';
    @Input() description: string = '';

}