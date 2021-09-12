import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

    //variavel token
token = {
  headers: new HttpHeaders().set('Authorization', environment.token)
}


//metodo de cadastrar o postagens
postPostagem(postagensCadastro: Postagem): Observable<Postagem>{
  return this.http.post<Postagem>('https://projetomandala.herokuapp.com/postagem', postagensCadastro, this.token)
}

//trazer todos os postagens
getAllPostagens(): Observable<Postagem[]>{
  return this.http.get<Postagem[]>('https://projetomandala.herokuapp.com/postagem', this.token)  
}

//campo com o conteudo a ser editado
getByIdPostagens(id: number): Observable<Postagem>{
  return this.http.get<Postagem>(`https://projetomandala.herokuapp.com/postagem/${id}`, this.token)
}

//buscar por titulo
getByIdTituloPostagem(titulo: string): Observable<Postagem[]>{
  return this.http.get<Postagem[]>(`https://projetomandala.herokuapp.com/postagem/titulo/${titulo}`, this.token)
}

//metodo alterar postagens
putPostagens(postagensEdit: Postagem): Observable<Postagem>{
  return this.http.put<Postagem>('https://projetomandala.herokuapp.com/postagem', postagensEdit, this.token)
}

//metodo alterar delete postagens
deletePostagens(id: number){
  return this.http.delete(`https://projetomandala.herokuapp.com/postagem/${id}`, this.token)
}


}
