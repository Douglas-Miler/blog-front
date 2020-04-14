import { Component, Input } from '@angular/core';

@Component({
    selector: 'blog-small-message',
    templateUrl: './small-message.component.html'
})
export class SmallMessageComponent{

    @Input() message: string = '';

}