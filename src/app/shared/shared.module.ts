import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { SharedComponent } from './shared/shared.component';

@NgModule({
    declarations:[
      SharedComponent
    ],
    imports:[
      CommonModule,
      NavbarModule,
      FooterModule
    ],
    exports:[
      SharedComponent
    ]
})
export class SharedModule{

}