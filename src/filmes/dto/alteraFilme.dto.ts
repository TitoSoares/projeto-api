import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class AlteraFilmesDTO{
    @IsString()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    @IsOptional()
    nome:string;
    
    @IsString()
    @IsOptional()
    duracao: string;

    @IsString()
    @IsOptional()
    ano: string;

    @IsString()
    @IsOptional()
    genero: string;
}