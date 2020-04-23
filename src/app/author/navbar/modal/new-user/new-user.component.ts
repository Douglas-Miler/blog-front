import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'blog-new-user',
    templateUrl: './new-user.component.html'
})
export class NewUserComponent implements OnInit{

    hide: boolean = true;

    constructor(private dialog: MatDialogRef<NewUserComponent>){

    }

    ngOnInit(): void {
        this.dialog.updateSize('600px').updatePosition({top: '200px'});
    }
}