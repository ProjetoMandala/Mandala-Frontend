import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from 'src/app/model/Tema';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-delete',
  templateUrl: './tema-delete.component.html',
  styleUrls: ['./tema-delete.component.css']
})
export class TemaDeleteComponent implements OnInit {

  temaDelet: Tema = new Tema();
  idTema:number

  constructor(
    private temaService: TemaService, 
    private router: Router, 
    private route: ActivatedRoute,
    private authService: AuthService,
    private alertas: AlertasService 
  ) { }

ngOnInit(){
    //verificando se o usuario está logado
    if (environment.token == '') {
      // alert("Sua seção expirou, faça o login novamente.");
      this.router.navigate(['/entrar'])
    }

//forçando altenticação
 this.authService.refreshToken()//

    //pegando o parametro da rota
    this.idTema= this.route.snapshot.params['id']
    this.findByIdTema( this.idTema)

    

}

findByIdTema(id: number){
  this.temaService.getByIdTema(id).subscribe((resp: Tema)=>{  
    this.temaDelet = resp  
  })  
}

apagar(){
  this.temaService.deleteTema( this.idTema).subscribe(()=>{
    this.alertas.showAlertSuccess('Tema apagado com sucesso')
    this.router.navigate(['/tema'])
  })
}


}
