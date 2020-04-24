import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

import { NewUserService } from './../../submit-model/new-user.service';
import { NewUser } from '../../submit-model/new-user';

@Component({
    selector: 'blog-new-user',
    templateUrl: './new-user.component.html'
})
export class NewUserComponent implements OnInit{

    public hide: boolean = true;
    public signUpForm: FormGroup;

    constructor(
        private dialog: MatDialogRef<NewUserComponent>,
        private formBuilder: FormBuilder,
        private newUserService: NewUserService,
        private router: Router){
    }

    ngOnInit(): void {
        this.dialog.updateSize('600px').updatePosition({top: '200px'});

        this.signUpForm = this.formBuilder.group({
            name: ['', [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40),
                    Validators.pattern(/^[a-z0-9_\-]+$/)
                ]
            ],
            email: ['', [
                    Validators.required,
                    Validators.email
                ]
            ],
            password: ['', [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
            ]
        });
    }

    submitForm(): void {
        this.newUserService
            .saveUser(
                this.signUpForm.getRawValue() as NewUser)
            .subscribe(
                () => this.router.navigate(['/author']),
                err => console.log(err)
            );
    }
}