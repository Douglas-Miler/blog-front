import { NgModule } from '@angular/core';

import { NavbarModule } from './navbar/navbar.module';
import { ModalModule } from './modal/modal.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
    declarations:[
        
    ],
    imports:[
        
    ],
    exports:[
        FooterModule,
        ModalModule,
        NavbarModule
    ]
})
export class SharedModule{

}