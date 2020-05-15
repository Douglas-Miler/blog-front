import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'blog-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit{

    searchForm: FormGroup;
    @ViewChild('searchField') searchField: ElementRef<HTMLInputElement>;

    constructor(private formBuilder: FormBuilder){

    }

    ngOnInit(): void {
        this.searchForm = this.formBuilder.group({
            search:['',
                Validators.pattern(/(([a-zA-Zà-úÀ-Ú]|\d|\s)+$)/)
            ]
        });
    }

    search(){
        console.log(this.searchForm.get('search').value);
        this.searchForm.get('search').setValue('')
    }

}