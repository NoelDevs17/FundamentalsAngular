import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: `heroe.component.html`

})

 
export class HeroeComponent{
Nombre: string = 'Thor';
edad: number = 40;

get nombreCapitalizado(){
    return this.Nombre.toUpperCase();
}
obtenerNombre(): string{
    return `${this.Nombre} - ${this.edad}`; 
} 

cambiarNombre(){
    this.Nombre = 'Spiderman';
}

cambiarEdad(){
    this.edad = 25;
}
}