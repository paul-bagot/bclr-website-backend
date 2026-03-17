import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateMovieDto } from "./dto";
import { Movie } from "@prisma/client";

@Injectable()
export class MovieService {
    constructor(private prisma : PrismaService) {}

    async findAll() : Promise<String> {
        const movies = await this.prisma.movie.findMany({});
        return JSON.stringify(movies, null, 2);
    }

    async createOne(dto : CreateMovieDto) {
        const data = {
            title: dto.title,
            yearRelease: dto.yearRelease,
            imdbId: dto.imdbId,
            runtime: dto.runtime,
            overview: dto.overview,
            genre: dto.genre,
            director: dto.director,
            poster: dto.poster,
            backdrop: dto.backdrop,
            metascoreRating: dto.metascoreRating,
            imdbRating: dto.imdbRating
        };
        const movie = await this.prisma.movie.create({ data });
        return movie;
    }
}