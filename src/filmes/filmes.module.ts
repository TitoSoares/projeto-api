import { Module } from "@nestjs/common";
import { FilmeController } from "./filmes.controller";
import { FilmesArmazenados } from "./filmes.dm";


@Module({
    controllers:[FilmeController],
    providers: [FilmesArmazenados]
})

export class FilmesModule{

}
    