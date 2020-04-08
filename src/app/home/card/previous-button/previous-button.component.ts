import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'blog-previous-button',
  templateUrl: './previous-button.component.html',
  styleUrls: ['./previous-button.component.css']
})
export class PreviousButtonComponent implements OnInit {

  @Input() hasMore: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
