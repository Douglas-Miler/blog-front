import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } 
from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TokenService } from './../token/token.service';

@Injectable({
    providedIn: 'root'
})
export class AuthorGuard implements CanActivate{

    constructor(private tokenService: TokenService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
        boolean | 
        UrlTree | 
        Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
            
        if(!this.tokenService.hasToken()){
            this.router.navigate(['']);
            return false;
        }

        return true;
    }

}