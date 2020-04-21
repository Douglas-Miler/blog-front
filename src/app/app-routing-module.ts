import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardResolver } from './home/card/card-resolver';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';
import { AuthorComponent } from './author/author/author.component';

const routes: Routes = [
    {
        path: '', 
        component: HomeComponent, 
        resolve: {
            cards: CardResolver
        }
    },
    {
        path: 'about', 
        component: AboutComponent
    },
    {
        path: 'author', 
        component: AuthorComponent
    },
    {
        path: '**', 
        component: NotFoundComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}