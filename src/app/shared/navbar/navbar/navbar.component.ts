import { ModalComponent } from './../modal/modal.component';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'blog-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit(): void {

  }

  openLoginModal() {
    this.dialog.open(ModalComponent);
  }

  gotToAboutPage(){
    this.router.navigate(['/about']);
  }

}
