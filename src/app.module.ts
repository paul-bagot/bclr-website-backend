import { Module } from '@nestjs/common';
import { MovieModule } from './movie/movie.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		MovieModule,
		PrismaModule,
	],
})
export class AppModule {}
