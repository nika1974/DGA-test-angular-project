import {Component} from '@angular/core';
import {ImdbService} from '../../services/imdb.service';
import {Movie, MovieInterface} from '../../imdb.interfaces';
import {take} from 'rxjs';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-imdb',
  templateUrl: './imdb.component.html',
  styleUrls: ['./imdb.component.scss']
})
export class ImdbComponent {
  movies: Movie[];
  searchControl = new FormControl('');
  searching = false;

  dummyArray = new Array(20);

  constructor(
    private _imdbService: ImdbService,
  ) { }

  handleSearch(): void {
    if (this.searchControl.value) {
      this.searching = true;
      this._imdbService.getMovie(this.searchControl.value).pipe(
        take(1)
      ).subscribe((result: MovieInterface) => {
        this.movies = result.results || [];
        this.searching = false;
      });
    }
  }
}
