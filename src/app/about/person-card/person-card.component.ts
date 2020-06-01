import { Component, Input } from '@angular/core';

@Component({
    selector: 'blog-person-card',
    templateUrl: './person-card.component.html'
})
export class PersonCardComponent {

    @Input() name: string;
    @Input() position: string;
    @Input() avatarSrc: string;
    @Input() avatarAlt: string;
    @Input() resume: string;
    @Input() linkedin: string;
}