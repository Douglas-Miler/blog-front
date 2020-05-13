import { UserService } from './../user/user.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthorGuard implements CanActivate{

    constructor(private userService: UserService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
        boolean | 
        UrlTree | 
        Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
            
        if(!this.userService.isLogged()){
            this.router.navigate(['']);
            return false;
        }

        return true;
    }

}