import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entitiy';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesServices: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesServices.getAll();
  }

  @Get(':id')
  getOne(@Param('id') movieId: string): Movie {
    return this.moviesServices.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesServices.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return this.moviesServices.deleteOne(movieId);
  }

  @Patch(':id')
  update(@Param('id') movieId: string, @Body() updatedData) {
    return this.moviesServices.update(movieId, updatedData);
  }
}
