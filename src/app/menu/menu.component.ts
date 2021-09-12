import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome;
  imagem_perfil = environment.imagem_perfil;
  idUsu = environment.id;

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
  ) { }

  ngOnInit() {
    //  //verificando se o usuario está logado
    //  if (environment.token == '') {
    //   // alert("Sua seção expirou, faça o login novamente.");
    //   this.router.navigate(['/entrar'])
    // }
  }

  sair() {
        // this.router.navigate(['/entrar'])
        this.router.navigate(["/inicio"])
    environment.token=''
    environment.nome = ''
    environment.imagem_perfil = ''    
    environment.tipo=''
    environment.id = 0    
    this.router.navigate(['/entrar'])
  }

}
