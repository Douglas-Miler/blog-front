import { NgModule } from '@angular/core';

import { ModalModule } from './modal/modal.module';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { SharedComponent } from './shared/shared.component';

@NgModule({
    declarations:[
        SharedComponent
    ],
    imports:[
      FooterModule,
      NavbarModule,
      ModalModule
    ],
    exports:[
      SharedComponent
    ]
})
export class SharedModule{

}