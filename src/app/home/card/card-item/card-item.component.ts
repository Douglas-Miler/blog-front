import { environment } from './../../../core/environments/environment';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

const CLOUD = environment.apiUrl;

@Component({
  selector: 'blog-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  @Input() id="";
  @Input() introduction='';
  @Input() imageDescription='';
  @Input() image='';
  @Input() title='';
  @Input() userName='';
  @Input() userPosition='';

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  seeArticle(id: string){
    this.router.navigate(['/article/'+id]);
  }
}
