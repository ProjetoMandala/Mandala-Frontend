import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  //estrangeiras
  temaFK: Tema = new Tema()
  listaTema: Tema[]
  idTema:number

  usuarioFK: Usuario = new Usuario()
  idUser = environment.id


  //ordenar postagem
  key = 'data'
  reverse = true

  //busca por titulo
  tituloPost: string

  //busca por descrição tema
  temaTitulo: string
  
  constructor(
    private router: Router,
    public authService: AuthService,
    private temaService: TemaService, 
    private postagemService:PostagemService
  
    ) {}

  ngOnInit() {
    window.scroll(0,0)
    if (environment.token == '') {
      alert('Sua seção expirou, faça o login novamente');
      this.router.navigate(['/entrar']);
    }
//forçando altenticação
    this.authService.refreshToken()

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
//buscar por titulo tema
  findByTemaTitulo(){

    if (this.temaTitulo == '') {
      this.getAllPostagens()
      
    } else {
      this.temaService.getByIdTemaTitulo(this.temaTitulo).subscribe((resp: Tema[])=>{
  
        this.listaTema = resp
      })
      
    }
  }

//usuario
findByIdUsu(){
this.authService.getBiIdUser(this.idUser).subscribe((resp: Usuario)=>{
  this.usuarioFK = resp

  console.log(this.usuarioFK)
})
}

//postagem
publicar(){
  //id do tema
    this.temaFK.id = this.idTema
    this.postagem.tema = this.temaFK
  
    //id do usuario
    this.usuarioFK.id = this.idUser
    this.postagem.usuario = this.usuarioFK
      
    //ai faz a postagem
    console.log(this.postagem)
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem = resp
      alert('Postagem cadastrada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })
  
  }

//trazer todas as postagens
getAllPostagens(){
  this.postagemService.getAllPostagens().subscribe((resp: Postagem[])=>{
      this.listaPostagens = resp  
  })
}

//busca por titulo
findByTituloPostagem(){

  if(this.tituloPost == ''){
    this.getAllPostagens()
  }
  else{
    this.postagemService.getByIdTituloPostagem(this.tituloPost).subscribe((resp: Postagem[])=>{
      this.listaPostagens = resp
    })

  }
}





}
