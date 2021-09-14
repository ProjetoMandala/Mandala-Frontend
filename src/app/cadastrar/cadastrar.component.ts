import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class CadastrarComponent implements OnInit {

  usuarioCad: Usuario = new Usuario
  confirmeSenha: string
  gen: string
  tipoUsuario: string
  

  constructor(
    private authService: AuthService, 
    private router: Router,
    private alertas: AlertasService ) {}

  ngOnInit(){
    window.scroll(0,0)
  
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

  confirmarSenha(event: any){
    this.confirmeSenha = event.target.value
  }

  genero(event: any){
    this.gen = event.target.value
  }

  tipoUser(event: any){

    this.tipoUsuario = event.target.value

  }

  cadastrar(){

    this.usuarioCad.genero = this.gen;

    this.usuarioCad.tipo = this.tipoUsuario

    if (this.usuarioCad.senha != this.confirmeSenha) {

      this.alertas.showAlertDanger("As senhas estão diferentes.");
      
    } else {
      console.log(this.usuarioCad)
      this.authService.cadastrar(this.usuarioCad).subscribe((resp: Usuario) =>{

        this.usuarioCad = resp;
        this.router.navigate(["/entrar"])
        this.alertas.showAlertSuccess("Usuário cadastrado com sucesso!")
      })
    }

  }


}
