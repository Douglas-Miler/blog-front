import { UserService } from '../user/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } 
from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SignInGuard implements CanActivate{

    constructor(
        private userService: UserService,
        private router: Router){

    }

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): 
        boolean | 
        UrlTree | 
        Observable<boolean | UrlTree> | 
        Promise<boolean | UrlTree> {

        if(this.userService.isLogged()){
            this.router.navigate(['/author']);
            return false;
        }

        return true;
    }



}