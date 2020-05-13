import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../core/authentication/auth.service';

@Component({
    selector:'blog-form-login',
    templateUrl:'./form-login.component.html',
    styleUrls: []
    
})
export class FormLoginComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    console.log(email, password);

    this.authService
        .authenticate(email, password)
        .subscribe(
          () => {
            this.router.navigate(['/author']);
          },
          err => {
            console.log(err);
            alert('Email e/ou senhas inválidos');
            this.loginForm.reset();
            this.emailInput.nativeElement.focus();
          }
        );
  }

}