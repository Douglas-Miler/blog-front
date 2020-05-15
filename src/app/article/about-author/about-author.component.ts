import { Component, Input } from '@angular/core';

@Component({
    selector: 'blog-about-author',
    templateUrl: './about-author.component.html'
})
export class AboutAuthorComponent{

    @Input() name: string;
    @Input() position: string;
    @Input() resume: string;
    @Input() linkedInURL: string;
    @Input() profileImage: string;

}