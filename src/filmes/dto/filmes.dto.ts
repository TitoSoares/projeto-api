import { IsNotEmpty, IsString } from "class-validator";

export class criaFilmesDTO{
    @IsString()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    nome:string;
    
    @IsString()
    duracao: string;

    @IsString()
    ano: string;

    @IsString()
    genero: string;
}