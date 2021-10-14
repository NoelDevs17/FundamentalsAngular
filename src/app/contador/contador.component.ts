import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `<h1>{{ titulo }}</h1>



    <button (click)="calcular(base)">+5</button>

    <span>{{ numero }}</span>
    
    <button (click)="calcular(-base)">-5</button>`
})



export class ContadorComponer {
    titulo: string = 'Contador App';
    numero: number = 10; 
  
    base: number = 5;
  
   calcular(valor: number){
     this.numero += valor;
   }
}