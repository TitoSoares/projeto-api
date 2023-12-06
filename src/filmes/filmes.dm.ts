import { Injectable } from "@nestjs/common";
import { fileURLToPath } from "url";
import { FilmesEntity } from "./filmes.entity";

@Injectable()
export class FilmesArmazenados{
    #filmes: FilmesEntity[] = [];

//=============================================================
    AdicionarFilmes(filmes: FilmesEntity){
        this.#filmes.push(filmes)
    }

//=============================================================
    atualizaFilme(id: string, dadosAtualizacao: Partial<FilmesEntity>){
        const filme = this.buscaPorID(id);

        Object.entries(dadosAtualizacao).forEach(
            ([chave,valor]) => {
                if(chave === 'id'){
                    return
                }
                filme[chave] = valor;
            }
        )

        return filme;
    }


//=============================================================
    private buscaPorID(id: string){
        const possivelFilme = this.#filmes.find(
            filmeSalvo => filmeSalvo.id === id
        )

        if (!possivelFilme){
            throw new Error('Filme nao encontrado')
        }
        
        return possivelFilme;
    }

//=============================================================

    async removeFilme(id: string){
        const filme = this.buscaPorID(id);
    
        this.#filmes = this.#filmes.filter(
            filmeSalvo => filmeSalvo.id !== id
        )
    
        return filme;
    }
//=============================================================

    async compartilharFilme(id: string){
        const filme = this.buscaPorID(id);
        
        return filme;
    }


//=============================================================
    get Filmes(){        
        return this.#filmes;
    }    
}


