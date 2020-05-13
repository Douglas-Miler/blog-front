import { Component, OnInit } from '@angular/core';
import { JWTPayload } from 'src/app/core/user/jwt-payload';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from './../../core/user/user.service';

@Component({
  selector: 'blog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user$: Observable<JWTPayload>;

  constructor(
    private userService: UserService) {

    this.user$ = userService.getuser();
   }

  ngOnInit(): void {

  }
}
