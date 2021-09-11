import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private authService: AuthService
  ) { }

  ngOnInit() {
    //  //verificando se o usuario está logado
    //  if (environment.token == '') {
    //   // alert("Sua seção expirou, faça o login novamente.");
    //   this.router.navigate(['/entrar'])
    // }
  }

}
