import { Injectable } from '@angular/core';

export interface MoviesInterface {
  id: Number;
  title: String;
  poster: String;
  synopsis: String;
  genres: Array<String>;
  year: Number;
  director: String;
  actors: Array<String>;
  hours: Array<String>;
  room: Number;
}

@Injectable()
export class MovieService {

  movies: Array<MoviesInterface>;

  constructor() { }

  getMovies(){
    return this.movies;
  }

  getMovie(id){
    for(let i = 0; i < this.movies.length; i++){
      if(this.movies[i].id == id){
        return this.movies[i];
      }
    }
  }

}


