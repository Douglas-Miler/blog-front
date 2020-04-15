import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from './../../../core/auth.service';

@Component({
  selector: 'blog-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  openLoginModal(content) {
    this.modalService.open(content);
  }

  gotToAboutPage(){
    this.router.navigate(['/about']);
  }

  login() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    console.log(email, password);

    this.authService
        .authenticate(email, password)
        .subscribe(
          () => {
            this.router.navigate(['not-found']);
            this.modalService.dismissAll();
          },
          err => {
            console.log(err);
            alert('Email e/ou senhas inválidos');
            this.loginForm.reset();
          }
        );
  }

}
