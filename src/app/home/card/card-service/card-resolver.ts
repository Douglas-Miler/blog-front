import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CardService } from './card.service';
import { Card } from './card';

@Injectable({
    providedIn: 'root'
})
export class CardResolver implements Resolve<Observable<Card[]>>{
    
    constructor(private service: CardService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Card[]> {
        return this.service.listCardsPaginated(0);
    }
}