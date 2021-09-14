import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { AlertasService } from '../service/alertas.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css'],
})
export class TemaComponent implements OnInit {
  temaCad: Tema = new Tema();
  listaTema: Tema[];

  constructor(private router: Router, 
    private temaService: TemaService,
    private alerta: AlertasService) {}

  ngOnInit() {
    window.scroll(0, 0);
    if (environment.token == '') {
      this.alerta.showAlertDanger('Sua seção expirou, faça o login novamente');
      this.router.navigate(['/entrar']);
    }

    //trazer todos os temas
    this.findAllTemas();
  }

  //buscando os campos na tabela
  findAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTema = resp;
    });
  }

  cadastrarTema() {
    this.temaService.postTema(this.temaCad).subscribe((resp: Tema) => {
      this.temaCad = resp;
      this.alerta.showAlertSuccess('Tema cadastrado, com sucesso!');

      //limpando os campos após  cadastro
      this.temaCad = new Tema();

      //depois atualize a nossa lista de temas
      this.findAllTemas();
    });
  }
}
