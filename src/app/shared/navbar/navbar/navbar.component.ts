import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ModalComponent } from '../modal/modal/modal.component';

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
