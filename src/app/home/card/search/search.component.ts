import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { CardService } from './../card-service/card.service';
import { Card } from './../card-service/card';

@Component({
    selector: 'blog-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit{

    @Output() onSubmit = new EventEmitter<any>();
    searchForm: FormGroup;
    @ViewChild('searchField') searchField: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private cardService: CardService){

    }

    ngOnInit(): void {
        this.searchForm = this.formBuilder.group({
            search:['',
                Validators.pattern(/(([a-zA-Zà-úÀ-Ú]|\d|\s)+$)/)
            ]
        });
    }

    search(){
        const searchedText = this.searchForm.get('search').value;
        this.searchForm.get('search').setValue('');
        this.cardService
            .listSearchedCardsPaginated(0, searchedText)
            .subscribe(cards => {
                if(cards.length != 0) this.onSubmit.emit({cards, searchedText});
            });
    }

}