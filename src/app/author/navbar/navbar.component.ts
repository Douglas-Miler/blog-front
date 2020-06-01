import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TokenService } from '../../core/token/token.service';

@Component({
  selector: 'blog-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    private tokenService: TokenService,
    private router: Router) { }

  logout(){
    this.tokenService.removeToken();
    this.router.navigate(['']);
  }
}
