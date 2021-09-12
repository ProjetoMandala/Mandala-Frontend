import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

usuarioEdit: Usuario = new Usuario();
idUsuario: number;
confirmarSenha: string;
tipoUsu: string;
gen: string


  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private authService: AuthService
  ) { }

  ngOnInit() {

    window.scroll(0,0)
    //verificando se o usuario está logado
    if (environment.token == '') {
      // alert("Sua seção expirou, faça o login novamente.");
      this.router.navigate(['/entrar'])
    }
    this.authService.refreshToken()
   
this.idUsuario= this.route.snapshot.params['id']
    this.findByIdUsuario(this.idUsuario)

  }

  findByIdUsuario(id: number){

    this.authService.getBiIdUser(id).subscribe((resp: Usuario)=>{
      this.usuarioEdit = resp
    })
  }

  ///tratamento d campo email
  validatePreenchido() {
    let usuario = <HTMLInputElement>document.getElementById('email');
    if (usuario?.value != '') {
      usuario.classList.add('preenchido');
    } else {
      usuario.classList.remove('preenchido');
    }
  }
  
  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  
  }
  
  genero(event: any){
    this.gen = event.target.value
  }

  tipoUsuario(event: any){
  
    this.tipoUsu = event.target.value
  }


  atualizar(){

    this.usuarioEdit.genero = this.gen;

    this.usuarioEdit.tipo= this.tipoUsu;

   
      if (this.usuarioEdit.senha.length < 5) {
      
        alert("A senha deve conter no minimo 5 caracteres.");
    
      } else {
    
        if (this.usuarioEdit.senha != this.confirmarSenha) {
    
          alert("As senhas estão diferentes.");
          
        } else {
          
          console.log(this.usuarioEdit)
          this.authService.putUsuario(this.usuarioEdit).subscribe((resp: Usuario) =>{
    
            this.usuarioEdit = resp

            

            this.router.navigate(["/inicio"])
            alert("Usuário editado com sucesso! Faça seu login")
           
            environment.token=''
            environment.nome = ''
            environment.imagem_perfil = ''    
            environment.tipo=''
            environment.id = 0    
            this.router.navigate(['/entrar'])
    
          })
        }
        
      } 
    
  }





}
