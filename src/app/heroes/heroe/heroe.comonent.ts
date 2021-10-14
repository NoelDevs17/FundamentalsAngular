import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: `heroe.component.html`

}) 

export class HeroeComponent{
Nombre: string = 'Thor';
edad: number = 40;

obtenerNombre(): string{
    return `${this.Nombre} - ${this.edad}`; 
}

}