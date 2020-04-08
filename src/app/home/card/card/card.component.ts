import { CardService } from './card.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { Card } from './card';

@Component({
  selector: 'blog-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cards: Card[] = [];
  hasMore: boolean = true;
  currentPage: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private cardService: CardService
  ) {}
  
  ngOnInit(): void {
    this.cards = this.activatedRoute.snapshot.data['cards'];
  }

  loadMore(){
    this.cardService.listCardsPaginated(this.currentPage+1).subscribe(cards => {
      console.log(this.currentPage);
      if(cards.length){
        this.cards = cards;
        this.currentPage++;
      }else{
        this.hasMore = false;
      }
    });
  }

  loadLess(){
    if(this.currentPage >= 1){
      this.cardService.listCardsPaginated(this.currentPage-1).subscribe(cards => {
        console.log(this.currentPage);
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
