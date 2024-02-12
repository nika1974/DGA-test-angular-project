import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {MovieInterface} from '../imdb.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {
  baseUrl = 'https://online-movie-database.p.rapidapi.com';

  constructor(
    private http: HttpClient
  ) { }

  getMovie(title: string): Observable<MovieInterface> {
    return this.http.get<MovieInterface>(`${this.baseUrl}/title/v2/find?title=${title}&limit=20&paginationKey=0&sortArg=moviemeter%2Casc`);
  }
}
