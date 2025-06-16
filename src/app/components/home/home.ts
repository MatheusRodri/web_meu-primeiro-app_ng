import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  meuBoolean: Boolean = false;
  idButon = 'idBotao';
  deveExibir = false;

  atualizarBoolean(valor:Boolean) {
    this.meuBoolean = valor;
  }
  submit(event: any) {
    console.log(event);
  }

}
