import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers: [MovieService]
})
export class MyHomeComponentComponent implements OnInit {
  constructor(public router: Router, private movies: MovieService) { }

  ngOnInit() {

  }

  piniculas: Array<any> = this.movies.getMovies();

}
