import { Body, Controller, Get, Post } from "@nestjs/common";
import { criaFilmesDTO } from "./dto/filmes.dto";
import { ListaFilmesDTO } from "./dto/listaFilmes.dto";
import { FilmesArmazenados } from "./filmes.dm";
import { FilmesEntity } from "./filmes.entity";
import {v4  as uuid} from 'uuid'
import { Delete, Param, Put } from "@nestjs/common/decorators/http";
import { AlteraFilmesDTO } from "./dto/alteraFilme.dto";
import { get } from "http";
import { identity } from "rxjs";


@Controller('/filmes')
export class FilmeController{    
    constructor(private clsFilmesArmazenados: FilmesArmazenados){
        
    }
//=====Consultar========================================================
    @Get()
    async RetornoFilmes(){
        const filmesListados = await this.clsFilmesArmazenados.Filmes;
        const listaRetorno = filmesListados.map(
            filme => new ListaFilmesDTO(
                filme.id,
                filme.nome,
                filme.duracao,
                filme.ano,
                filme.genero,
            )
        );
        
        return listaRetorno;
    }

//=====Deletar========================================================
    @Delete('/:id')
    async removeFilmes(@Param('id') id: string){
        const FilmeRemovido = await this.clsFilmesArmazenados.removeFilme(id)

        return{
            filme: FilmeRemovido,
            message: 'Filme removido'
        }
    }

//=====Adicionar========================================================
    @Post()
    async criaFilme(@Body() dadosfilme: criaFilmesDTO){
        var filme = new FilmesEntity(uuid(),dadosfilme.nome,dadosfilme.duracao,dadosfilme.ano,dadosfilme.genero)
        
            
        this.clsFilmesArmazenados.AdicionarFilmes(filme);        
        var retorno={
            id: filme.id,
            message:'Filme Criado'
        }
        
        return retorno
    }

//=====Alterar========================================================

      @Put('/:id')
    async filmeUsuario(@Param('id') id: string, @Body() novosDados: AlteraFilmesDTO){
        const filmeAlterado = await this.clsFilmesArmazenados.atualizaFilme(id, novosDados)

        return{
            usuario: filmeAlterado,
            message: 'Filme Alterado'
        }
    }

//=====Compartilhar========================================================    
    
    @Get('/compartilhar/:id')
    async compartilharFilme(@Param('id') id:string){
        const filme = await this.clsFilmesArmazenados.compartilharFilme(id)

        return{
            message: 'Estou assistindo o filme ' + filme.nome + ', foi lançado em ' + filme.ano + ' e tem duração de '+ filme.duracao + 
            'minutos. Assista também!!'
        }
    }
}

