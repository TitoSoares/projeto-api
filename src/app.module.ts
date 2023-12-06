import { Module } from '@nestjs/common';
import { FilmesModule } from './filmes/filmes.module';
import { UsuarioModule } from './usuario/usuario.module';



@Module({
  imports: [UsuarioModule,FilmesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
