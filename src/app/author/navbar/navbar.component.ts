import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ngxLoadingAnimationTypes } from 'ngx-loading';

import { TokenService } from '../../core/token/token.service';

const PRIMARY_COLOR = '#ffffff';
const SECONDARY_COLOR = '#3f51b5';

@Component({
  selector: 'blog-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  primaryColour = PRIMARY_COLOR;
  secondaryColour = SECONDARY_COLOR;
  ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  config = {
              animationType: ngxLoadingAnimationTypes.circle, 
              primaryColour: this.primaryColour, 
              secondaryColour: this.secondaryColour, 
              backdropBorderRadius: '3px',
              backdropBackgroundColour: 'rgba(255,255,255,0)'
          }
  loading = false;

  constructor(
    private tokenService: TokenService,
    private router: Router) { }

  logout(){
    this.loading = true; 
    this.tokenService.removeToken();
    this.router.navigate(['']);
  }
}
