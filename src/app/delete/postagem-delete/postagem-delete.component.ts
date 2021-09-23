import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-delete',
  templateUrl: './postagem-delete.component.html',
  styleUrls: ['./postagem-delete.component.css']
})
export class PostagemDeleteComponent implements OnInit {

  postagem: Postagem = new Postagem()
  idPost: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
    private authService: AuthService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {

    window.scroll(0,0)

    if (environment.token == ''){
      this.router.navigate(['/entrar'])
    }
//forçando altenticação
this.authService.refreshToken()

    this.idPost = this.route.snapshot.params['id']
    this.findPostagemById(this.idPost)
  }

  findPostagemById(id: number) {
    this.postagemService.getByIdPostagens(id).subscribe((resp: Postagem) => {
      this.postagem = resp
    })
  }

  apagar() {
   this.postagemService.deletePostagens(this.idPost).subscribe(()=>{
     this.alertas.showAlertSuccess('Postagem apagada com sucesso!')
     this.router.navigate(['/inicio'])
   })
  }

}
