import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { CardService } from '../card-service/card.service';
import { Card } from '../card-service/card';

@Component({
  selector: 'blog-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit, OnChanges {

  @Input() cards: Card[] = [];
  hasMore: boolean = true;
  currentPage: number = 0;
  private _searchKeyWord: string = '';

  constructor(
    private activatedRoute: ActivatedRoute, 
    private cardService: CardService,
    private toastr: ToastrService
  ) {}
  
  ngOnInit(): void {
    this.cards = this.activatedRoute.snapshot.data['cards'];
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    changes.cards && console.log("mudou");
  }

  setSearchKeyWord(searchKeyWord: string){
    this._searchKeyWord = searchKeyWord;
  }

  loadMore(){
    if(this._searchKeyWord){
      this.cardService.listSearchedCardsPaginated(
        this.currentPage+1, this._searchKeyWord
      ).subscribe(cards => {
        this.loadMoreLogic(cards);
      });
    }
    else{
      this.cardService.listCardsPaginated(this.currentPage+1).subscribe(cards => {
        this.loadMoreLogic(cards);
      });
    }
  }

  loadLess(){
    if(this.currentPage >= 1){
      if(this._searchKeyWord){
        this.cardService.listSearchedCardsPaginated(
          this.currentPage-1, this._searchKeyWord
        ).subscribe(cards => {
          this.loadLessLogic(cards);
        });
      }
      else{
        this.cardService.listCardsPaginated(this.currentPage-1)
          .subscribe(cards => {
            this.loadLessLogic(cards);
          }
        );
      }
    }
  }

  private loadMoreLogic(cards: Card[]){
    if(cards.length){
      this.cards = cards;
      this.currentPage++;
    }else{
      this.hasMore = false;
      this.toastr.warning('Você chegou ao fim', 'Atenção!', {timeOut: 2000});
    }
  }

  private loadLessLogic(cards: Card[]){
    if(cards.length){
      this.cards = cards;
      this.currentPage--;
    }else{
      this.hasMore = false;
    }
  }
}
