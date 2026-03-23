import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateMovieDto } from './dto';
import { MovieService } from './movie.service';
import { Movie } from '@prisma/client';

@Controller('movies')
export class MovieController {
	constructor(private movieService: MovieService) {}

	@Get('/all')
	async findAll() {
		return await this.movieService.findAll();
	}

	@Post('/create')
	async createOne(@Body() dto: CreateMovieDto) {
		return this.movieService.createOne(dto);
	}
}
