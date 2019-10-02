import { Component, OnInit } from '@angular/core';
import { SWapiService } from '../../Services/swapi.service';
import { StorageServiceService } from '../../Services/storage-service.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  // ng-pagination properties
  private page = 1; // load first page by default
  private pageSize;
  private totalPlanets;
  private isLoading = false;
  private planets = [];

  constructor(private apiService: SWapiService, private storageService: StorageServiceService) {
    // load properties of pagination
    this.setPagination();

  }
// defualt number of columns in wide screen
  breakpoint = 5;

  ngOnInit() {
    // load current page
    this.loadPage(this.page);
    // set breakpoint to make grid responsive
    const width = window.innerWidth;
    if (width > 800) {
      this.breakpoint = 5;
    } else if (width > 400) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 1;
    }
  }
  // set breakpoint to make grid responsive
  onResize(event) {

    const width = event.target.innerWidth;
    if (width > 800) {
      this.breakpoint = 5;
    } else if (width > 400) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 1;
    }


  }
  /**
   * 
   * @param searchValue handle input search field
   */
  onSearchChange(searchValue: string): void {
    if (searchValue.length > 0) {
      this.searchPlanets(searchValue);
    } else {
      this.setPagination();

    }
  }
/**
 * 
 * @param title search planet by title using api service
 */
  searchPlanets(title) {

    this.apiService.searchPlanets(title).then((result: any) => {
      // get total count
      if (result.count) {
        this.totalPlanets = result.count;
      }
      // num of pages set to 1 if no more pages else calculate
      this.pageSize = result.results.length;
      this.planets = [];
      this.planets = result.results;
      this.setFavorite();

    });
  }
/**
 * sets properties of ng-pagination
 */
  setPagination() {
    this.isLoading = true;
    this.apiService.getPlanets().then((result: any) => {
      // get total count
      if (result.count) {
        this.totalPlanets = result.count;
      }
      // num of pages set to 1 if no more pages else calculate

      this.pageSize = result.results.length;
      this.loadPage(this.page);
    });

  }


  // load each page for pagination
  loadPage(pageNo) {
    this.apiService.getPlanetsByPage(pageNo).then((result: any) => {
      if (result.results) {
        this.planets = [];
        this.planets = result.results;
        this.setFavorite();
      }
    });
  }

  /**
   * Matches planets from the api request with the one in favorite list
   */
  setFavorite() {
    this.planets.map(
      planet => {
        if (this.storageService.isSavedPlanet(planet.name)) {
          planet.isFavorite = true;
        } else {
          planet.isFavorite = false;
        }
      }
    );
  }

}
