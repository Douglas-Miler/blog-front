import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'blog-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  marginTop: string;

  constructor() { }

  ngOnInit(): void {
    
  }

}
