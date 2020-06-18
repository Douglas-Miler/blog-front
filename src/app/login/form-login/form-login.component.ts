import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ngxLoadingAnimationTypes } from 'ngx-loading';

import { AuthService } from './../../core/authentication/auth.service';

const PRIMARY_COLOR = '#ffffff';
const SECONDARY_COLOR = '#3f51b5';

@Component({
    selector:'blog-form-login',
    templateUrl:'./form-login.component.html'
    
})
export class FormLoginComponent implements OnInit {

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
  loginForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [
                  Validators.required, 
                  Validators.email
                ]
              ],
      password: ['', Validators.required]
    });
  }

  login() {
    this.loading = true;
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    this.authService
        .authenticate(email, password)
        .subscribe(
          () => {
            this.loading = false;
            this.router.navigate(['/author']);
          },
          err => {
            this.loading = false;
            console.log(err);
            alert('Email e/ou senhas inválidos');
            this.loginForm.reset();
            this.emailInput.nativeElement.focus();
          }
        );
  }

}