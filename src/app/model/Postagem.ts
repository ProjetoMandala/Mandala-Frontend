import { Tema } from './Tema';
import { Usuario } from './Usuario';

export class Postagem {
  public curtida: number;
  public id: number;
  public imagem: string;
  public texto: string;
  public titulo: string;
  public video: string;
  public data: Date;


  //FK
  public tema: Tema;
  public usuario: Usuario;

}
