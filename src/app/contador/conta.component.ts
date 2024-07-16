import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: './conta.component.html',
    styleUrl: './conta.component.css'
})

export class ContadorComponent{
    numero: number =1; 
    decrementar_texto: string= "<-";
    incrementar_texto: string= "->";

    decrementar(){
        if (this.numero > 0)
            this.numero--;
    }

    incrementar(){
        if(this.numero<99)
            this.numero++;
    }
}