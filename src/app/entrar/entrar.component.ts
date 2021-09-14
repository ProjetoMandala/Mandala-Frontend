import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css'],
})
export class EntrarComponent implements OnInit {
  usuarioLogin: UsuarioLogin = new UsuarioLogin()

  constructor(
    private auth: AuthService,
    private router: Router,
    private alertas: AlertasService 
  ) {}

  ngOnInit(){
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
      this.usuarioLogin = resp

      environment.token = this.usuarioLogin.token
      environment.nome = this.usuarioLogin.nome
      environment.imagem_perfil = this.usuarioLogin.imagem_perfil
      environment.usuario = this.usuarioLogin.usuario
      environment.id = this.usuarioLogin.id  
      environment.tipo = this.usuarioLogin.tipo    

      this.usuarioLogin.imagem_perfil


      this.router.navigate(['/inicio'])
    

    },erro => {
      if(erro.status == 401){
        this.alertas.showAlertDanger('Usuário ou senha inválido')
      }
    })
  }

  validatePreenchido() {
    let usuario = <HTMLInputElement>document.getElementById('usuario');
    if (usuario?.value != '') {
      usuario.classList.add('preenchido');
      if (usuario.checkValidity()) {
        usuario.classList.add('valid');
        usuario.classList.remove('invalid');
        usuario.classList.remove('preenchido');
      } else {
        usuario.classList.remove('valid');
        usuario.classList.add('invalid');
      }
    } else {
      usuario.classList.remove('valid');
      usuario.classList.remove('preenchido');
    }
  }
}
