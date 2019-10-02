import { Component, OnInit } from '@angular/core';
import { SWapiService } from '../../Services/swapi.service';
import { StorageServiceService } from '../../Services/storage-service.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  private movies = [];

  constructor(private apiService: SWapiService, private storageService: StorageServiceService) {
    this.setMovies();
  }

  ngOnInit() {
  }

/**
 * 
 * @param title Handles click event on like button, depednig on status, sets favorite status
 */
  onClick(title) {

    console.log(title);
    const movie = this.movies.filter(mov => mov.title === title)[0];
    if (movie) {
      if (movie.isFavorite) {
        movie.isFavorite = false;
        this.storageService.removeFilm(title);
      } else {
        movie.isFavorite = true;
        this.storageService.addFilm(title);
      }
    }


  }
/**
 * 
 * @param searchValue Handles search fileter and selected filetered movies
 */
  onSearchChange(searchValue: string): void {
    if (searchValue.length > 0) {
      this.searchMovies(searchValue);
    } else {
      this.setMovies();
    }
  }
/**
 * 
 * @param title serach movie by title
 */
  searchMovies(title) {
    this.apiService.searchMovies(title).then(
      (result: any) => {
        this.movies = result.results;
        this.setFavorite();
      }
    );
  }

/**
 * get movies from movie
 */
  setMovies() {
    this.apiService.getMovies().then((result: any) => {
      this.movies = result.results;
      this.setFavorite();
    });


  }

  /**
   * Matches planets from the api request with the one in favorite list
   */
  setFavorite() {
    this.movies.map(
      movie => {
        if (this.storageService.isSavedFilm(movie.title)) {
          movie.isFavorite = true;
        } else {
          movie.isFavorite = false;
        }
      }
    );
  }

}
