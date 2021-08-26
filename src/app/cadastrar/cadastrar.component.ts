import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class CadastrarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.validatePreenchido();
  }

  validatePreenchido() {
    let usuario = <HTMLInputElement>document.getElementById('email');
    if (usuario?.value != '') {
      usuario.classList.add('preenchido');
    } else {
      usuario.classList.remove('preenchido');
    }
  }
}
