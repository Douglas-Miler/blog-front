import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';
import { Card } from './card';

@Component({
  selector: 'blog-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cards: Card[] = [];

  constructor(private cardService: CardService) {}
  
  ngOnInit(): void {
    this.cardService.listCards().subscribe(cards => this.cards = cards);
  }

}
