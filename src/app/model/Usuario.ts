import { Postagem } from './Postagem';

export class Usuario {
  /*public biografia: string;*/
  public dtNascimento: Date;
  public genero: string;
  public id: number;
  public imagem_perfil: string;
  public nome: string;
  public postagem: Postagem[];
  public senha: string;
  public usuario: string;
  public tipo: string;
}
