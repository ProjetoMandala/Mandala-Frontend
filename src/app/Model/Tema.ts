import { Postagem } from "./Postagem";

export class Tema{

    public descricao: string;
    public id: number;
    public imagem: string;
    public palavraChave: string;
    public postagem: Postagem[]; 
    public titulo: string;
    // [] várias postagens no mesmo tema por usuário

}