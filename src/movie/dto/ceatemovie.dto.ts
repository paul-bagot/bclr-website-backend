import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
	@IsString()
	@IsNotEmpty()
	title: string;

	@IsNumber()
	@IsOptional()
	yearRelease?: number;

	@IsString()
	@IsOptional()
	imdbId?: string;

	@IsString()
	@IsOptional()
	runtime?: string;

	@IsString()
	@IsOptional()
	overview?: string;

	@IsString()
	@IsOptional()
	genre?: string;

	@IsString()
	@IsOptional()
	director?: string;

	@IsString()
	@IsOptional()
	poster?: string;

	@IsString()
	@IsOptional()
	backdrop?: string;

	@IsString()
	@IsOptional()
	metascoreRating?: string;

	@IsString()
	@IsOptional()
	imdbRating?: string;
}
