import { Module } from '@nestjs/common';
import { MovieModule } from './movie/movie.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    MovieModule,
    PrismaModule
  ],
})
export class AppModule {}
