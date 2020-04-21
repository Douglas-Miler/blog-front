import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

import { AuthService } from './../../../core/auth.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    public dialogRef: MatDialogRef<ModalComponent>) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.dialogRef.updateSize('500px');
    this.dialogRef.updatePosition({top:'200px'});
  }

  login() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    console.log(email, password);

    this.authService
        .authenticate(email, password)
        .subscribe(
          () => {
            this.dialogRef.close();
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
