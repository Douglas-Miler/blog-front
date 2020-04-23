import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { NewUserComponent } from './../modal/new-user/new-user.component';
import { UserService } from './../../../core/user/user.service';

@Component({
  selector: 'blog-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private modal: MatDialog) { }

  ngOnInit(): void {

  }

  openModal() {
    this.modal.open(NewUserComponent);
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['']);
  }
}
