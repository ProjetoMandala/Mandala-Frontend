import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css'],
})
export class EntrarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.validatePreenchido();
  }

  validatePreenchido() {
    let usuario = <HTMLInputElement>document.getElementById('usuario');
    if (usuario?.value != '') {
      usuario.classList.add('preenchido');
    } else {
      usuario.classList.remove('preenchido');
    }
  }
}
