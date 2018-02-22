import { Injectable } from '@angular/core';
import movies from '../sample-movies'

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

  private listMovies: Array<any> = movies;

  constructor() { }

  getMovies(){
    return this.listMovies;
  }

  getMovie(id){
    for(let i = 0; i < this.listMovies.length; i++){
      if(this.listMovies[i].id == id){
        return this.listMovies[i];
      }
    }
  }

}


