import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ContadorComponer } from './contador.component';
import { ListadoComponent } from '../../heroes/listado/listado.component';


@NgModule({
    declarations: [
        ContadorComponer
    ],
    exports: [
        ContadorComponer
    ],
    imports: [
        CommonModule
    ]  
}) 

export class contadorModule  {
    
}

