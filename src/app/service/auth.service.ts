import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  //variavel token
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };
  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>(
      'https://projetomandala.herokuapp.com/usuario/logar',
      usuarioLogin
    );
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(
      'https://projetomandala.herokuapp.com/usuario/cadastrar',
      usuario
    );
  }


      //metodo de cadastrar o usuario
putUsuario(usuario: Usuario): Observable<Usuario>{

  return this.http.put<Usuario>('https://projetomandala.herokuapp.com/usuario/alterar', usuario);

}



  logado() {
    let ok: boolean = false;

    if (environment.token != '') {
      ok = true;
    }

    return ok;
  }

  getBiIdUser(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(
      `https://projetomandala.herokuapp.com/usuario/${id}`,
      this.token
    );
  }

  adm() {
    let ok: boolean = false;

    if (environment.tipo == 'adm') {
      ok = true;
    }

    return ok;
  }





}
