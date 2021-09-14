import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {



  /*Componente Nav Bar*/
   
  opened = false;
  toggleSidebar(){
    this.opened = !this.opened;
  }

  nome = environment.nome;
  imagem_perfil = environment.imagem_perfil;
  idUsu = environment.id;

  constructor(
    private router: Router, 
    private authService: AuthService 
  ) { }

  ngOnInit() {
    //  //verificando se o usuario está logado
     //verificando se o usuario está logado
     if (environment.token == '') {
      // alert("Sua seção expirou, faça o login novamente.");
      this.router.navigate(['/entrar'])
    }
    this.authService.refreshToken()
  }

  sair() {
    
    environment.token='';
    environment.nome = '';
    environment.imagem_perfil = '';  
    environment.tipo='';
    environment.id = 0 ;  
     
    this.router.navigate(['/entrar'])
  }

}
