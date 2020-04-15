import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { CardService } from './card.service';
import { Card } from './card';

@Component({
  selector: 'blog-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  cards: Card[] = [];
  hasMore: boolean = true;
  currentPage: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private cardService: CardService,
    private toastr: ToastrService
  ) {}
  
  ngOnInit(): void {
    this.cards = this.activatedRoute.snapshot.data['cards'];
  }

  loadMore(){
    this.cardService.listCardsPaginated(this.currentPage+1).subscribe(cards => {
      if(cards.length){
        this.cards = cards;
        this.currentPage++;
      }else{
        this.hasMore = false;
        this.toastr.warning('Você chegou ao fim', 'Atenção!', {timeOut: 2000});
      }
    });
  }

  loadLess(){
    if(this.currentPage >= 1){
      this.cardService.listCardsPaginated(this.currentPage-1).subscribe(cards => {
        if(cards.length){
          this.cards = cards;
          this.currentPage--;
        }else{
          this.hasMore = false;
        }
      });
    }
  }

}
