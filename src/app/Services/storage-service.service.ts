import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  movieKey = 'favoriteMovies';
  planetsKey = 'favoritePlanets';

  favoriteMovies: string[] = [];
  favoritePlanets: string[] = [];

  constructor() {
    // load already favorited movies and planets
    this.loadFromStorage();

  }

  /**
   * loads stored movies and planets from the local storage
   */
  loadFromStorage() {
    const storedMovies = JSON.parse(localStorage.getItem(this.movieKey));

    if (storedMovies) {
      this.favoriteMovies = storedMovies;
    }
    const storedPlanets = JSON.parse(localStorage.getItem(this.planetsKey));

    if (storedPlanets) {
      this.favoritePlanets = storedPlanets;
    }
  }

  /**
   * loads stored movies
   */
  getFavoriteMovies() {
    const storedMovies = JSON.parse(localStorage.getItem(this.movieKey));

    if (storedMovies) {
      this.favoriteMovies = storedMovies;
    }
    return this.favoriteMovies;
  }

  /**
   * loads stored planets
   */
  getFavoritePlanets() {
    const storedPlanets = JSON.parse(localStorage.getItem(this.planetsKey));

    if (storedPlanets) {
      this.favoritePlanets = storedPlanets;
    }
    return storedPlanets;
  }


  /**
   * adds a film to the list of favorite and stores in localstorage
   * @param film: film object to add to the list
   */
  addFilm(film) {
    this.favoriteMovies.push(film);
    // save to local storage
    console.log(this.favoriteMovies);
    this.saveToStorage(this.movieKey, this.favoriteMovies);
  }

  /**
   * adds a planet to the list of favorite and stores in localstorage
   * @param planet: planet object to add to the list
   */
  addPlanet(planet) {
    this.favoritePlanets.push(planet);
    // save to local storage
    this.saveToStorage(this.planetsKey, this.favoritePlanets);
    // console.log(this.favoritePlanets);
  }

  /**
   * @param film : film to remove from favoritelist
   * removed film from list of favorite and then stores to local storage
   */
  removeFilm(film) {
    this.favoriteMovies = this.favoriteMovies.filter(name => name !== film);
    // save to local storage
    this.saveToStorage(this.movieKey, this.favoriteMovies);
  }

  /**
   * @param planet : planet to remove from favorite list
   */
  removePlanet(planet) {
    this.favoritePlanets = this.favoritePlanets.filter(name => name !== planet);
    // save to local storage
    this.saveToStorage(this.planetsKey, this.favoritePlanets);
  }

  /**
   * @param key : specifies key for local storage.
   * @param data: data to be stored in local storage
   */
  saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  /**
   * 
   * @param key looks for a planet iwth key in the local storage
   */
  isSavedPlanet(key) {
    const count = this.favoritePlanets.filter((planet) => planet === key).length;
    if (count > 0) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * 
   * @param key : looks for a file with title if it is saved in local storage
   */
  isSavedFilm(key) {
    const count = this.favoriteMovies.filter((movie) => movie === key).length;
    if (count > 0) {
      return true;
    } else {
      return false;
    }
  }


}
