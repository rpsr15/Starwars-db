import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SWapiService {
  // tslint:disable-next-line:variable-name
  private planets_url = 'https://swapi.co/api/planets/';
  private planetSearchURL = 'https://swapi.co/api/planets/?search=';
  private filmSearchURL = 'https://swapi.co/api/films/?search=';
  private films_url = 'https://swapi.co/api/films/';


  constructor(private http: HttpClient) {

  }
/**
 * return planets by page
 */
  getPlanets() {
    const promise = new Promise((resolve) => {
      this.http.get(this.planets_url).subscribe(
        (data) => {
          resolve(data);
        }
      );
    });
    return promise;
  }
/**
 * 
 * @param title returns mathcing planets by title/name
 */
  searchPlanets(title) {
    console.log('seaching palnet sersver');
    const url = this.planetSearchURL + title;
    console.log(url);
    const promise = new Promise((resolve) => {
      this.http.get(url).subscribe(
        (data) => {
          resolve(data);
        }
      );
    });
    return promise;
  }
/**
 * 
 * @param title returns mathcing movies by title
 */
  searchMovies(title) {
    const url = this.filmSearchURL + title;
    const promise = new Promise((resolve) => {
      this.http.get(url).subscribe(
        (data) => {
          resolve(data);
        }
      );
    });
    return promise;
  }
  /**
   * 
   * @param pageNo loads movie with the page number by http request
   */
  getPlanetsByPage(pageNo) {
    const promise = new Promise((resolve) => {
      this.http.get(this.planets_url + '?page=' + pageNo).subscribe(
        (data) => {
          resolve(data);
        }
      );
    });
    return promise;
  }
  /**
   * get request to get list of movies 
   */
  getMovies() {
    const promise = new Promise((resolve) => {
      this.http.get(this.films_url).subscribe(
        (data) => {
          resolve(data);
        }
      );
    });
    return promise;
  }
}
