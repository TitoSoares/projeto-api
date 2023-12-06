export class FilmesEntity{
    id: string;
    nome: string;
    duracao: string;
    ano: string;
    genero: string;
    constructor(id: string,nome: string,duracao: string,ano: string,genero: string,){
        this.id = id;
        this.nome = nome;
        this.duracao = duracao;
        this.ano = ano;
        this.genero = genero;

    }
}