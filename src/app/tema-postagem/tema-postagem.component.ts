import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema-postagem',
  templateUrl: './tema-postagem.component.html',
  styleUrls: ['./tema-postagem.component.css']
})
export class TemaPostagemComponent implements OnInit {


  
  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  //estrangeiras
  temaFK: Tema = new Tema()
  listaTema: Tema[]
  idTema:number

  usuarioFK: Usuario = new Usuario()
  idUser = environment.id

  imagem_perfil = environment.imagem_perfil
  nome=environment.nome


  //ordenar postagem
  key = 'data'
  reverse = true


  //busca por descrição tema
  temaTitulo: string
  constructor(
    private router: Router,
    public authService: AuthService,
    private temaService: TemaService, 
    private postagemService:PostagemService,
    private alertas: AlertasService 
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

//forçando altenticação
 this.authService.refreshToken()//

     //trazer todos os temas
     this.findAllTemas();
     this.getAllPostagens();

  }

   //buscando os campos na tabela
   findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) =>{  
        this.listaTema = resp  
    })
  }
  
  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{    
      this.temaFK = resp    
    })
  }


  
  //trazer todas as postagens
getAllPostagens(){
  this.postagemService.getAllPostagens().subscribe((resp: Postagem[])=>{
      this.listaPostagens = resp  
  })
}










  

}
