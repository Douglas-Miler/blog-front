import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'blog-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  @Input() description='';
  @Input() url='';
  @Input() title='';

  constructor() { }

  ngOnInit(): void {
  }

}
