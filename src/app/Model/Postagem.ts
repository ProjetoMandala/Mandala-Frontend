import { Usuario } from "./Usuario";


export class Postagem {
    public curtida: number;
    public id: number;
    public imagem: string;
    public tema: string;
    public texto: string;
    public titulo: string;
    public usuario: Usuario;
    public video: string;

}