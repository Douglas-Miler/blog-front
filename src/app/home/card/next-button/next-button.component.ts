import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'blog-next-button',
  templateUrl: './next-button.component.html',
  styleUrls: ['./next-button.component.css']
})
export class NextButtonComponent implements OnInit {

  @Input() hasMore: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
