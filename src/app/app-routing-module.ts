import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInGuard } from './core/authentication/sign-in.guard';
import { AuthorGuard } from './core/authentication/author.guard';
import { CardResolver } from './home/card/card-service/card-resolver';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';
import { AuthorComponent } from './author/author/author.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { FormLoginComponent } from './login/form-login/form-login.component';
import { ArticlePageComponent } from './article/article-page/article-page.component';

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
        component: AuthorComponent,
        canActivate: [AuthorGuard],
    },
    {
        path: 'article/:id', 
        component: ArticlePageComponent
    },
    {
        path: 'signin', 
        component: LoginPageComponent,
        canActivate: [SignInGuard],
        children: [
            {
                path: '', 
                component: FormLoginComponent
            }
        ]
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