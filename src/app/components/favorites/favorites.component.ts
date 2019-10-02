import { Component, OnInit } from '@angular/core';
import { StorageServiceService } from '../../Services/storage-service.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  private movies = [];
  private planets = [];

  constructor(private storageService: StorageServiceService) { }

  ngOnInit() {
    this.loadData();
  }
/**
 * loads data from the local storage
 */
  loadData() {
    this.movies = this.storageService.getFavoriteMovies();
    this.planets = this.storageService.getFavoritePlanets();
  }

}
