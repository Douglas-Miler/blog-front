import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { JWTPayloadService } from '../../core/jwt-payload/jwt-payload.service';
import { JWTPayload } from 'src/app/core/jwt-payload/jwt-payload';

@Component({
  selector: 'blog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  user$: Observable<JWTPayload>;

  constructor(private jwtPayloadService: JWTPayloadService) {
    this.user$ = jwtPayloadService.getJWTPayload();
  }

}
