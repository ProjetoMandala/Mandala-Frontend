import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
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
  //busca por titulo
  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  tituloPost: string


  constructor(
    private router: Router, 
    public authService: AuthService 
  ) { }

  ngOnInit() {
    //  //verificando se o usuario está logado
     //verificando se o usuario está logado
    //  if (environment.token == '') {
    //   // alert("Sua seção expirou, faça o login novamente.");
    //   this.router.navigate(['/entrar'])
    // }
//forçando altenticação
    // this.authService.refreshToken()    
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