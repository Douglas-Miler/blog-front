import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/user/user';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from './../../core/user/user.service';

@Component({
  selector: 'blog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user$: Observable<User>;

  constructor(
    private userService: UserService) {

    this.user$ = userService.getuser();
   }

  ngOnInit(): void {

  }
}
