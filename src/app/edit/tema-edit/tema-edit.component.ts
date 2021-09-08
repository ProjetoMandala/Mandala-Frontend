import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from 'src/app/model/Tema';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css']
})
export class TemaEditComponent implements OnInit {

  temaTras: Tema = new Tema();
  

  constructor(
      private temaService: TemaService, 
      private router: Router, 
      private route: ActivatedRoute
  ) { }

  ngOnInit(){
    //verificando se o usuario está logado
    if (environment.token == '') {
      // alert("Sua seção expirou, faça o login novamente.");
      this.router.navigate(['/entrar'])
    }

    //pegando o parametro da rota
    let id = this.route.snapshot.params['id']
    this.findByIdTema(id)
  }

  findByIdTema(id: number){
    this.temaService.getByIdTema(id).subscribe((resp: Tema)=>{
  
      this.temaTras = resp
  
    })
  
    }

    atualizar(){

      this.temaService.putTema(this.temaTras).subscribe((resp: Tema)=>{
  
          this.temaTras= resp
          alert('Tema atualizado com sucesso😁')
          this.router.navigate(['/tema'])
      
      })
    
    }
  
    


}
