import { Component, Input } from '@angular/core';

@Component({
    selector: 'blog-article',
    templateUrl: './article.component.html'
})
export class ArticleComponent {

    @Input() title: string;
    @Input() secondaryTitle: string;
    @Input() category: string;
    @Input() introduction: string;
    @Input() content: string;
    @Input() articleUpdateUnixTime: number;

}