import { Component, Input, OnInit } from '@angular/core';
import { StorageServiceService } from '../../Services/storage-service.service';

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.css']
})
export class PlanetCardComponent implements OnInit {
  @Input() planetName;
  @Input() population;
  @Input() terrain;
  @Input() climate;
  @Input() isFavorite = false;

  constructor(private storageService: StorageServiceService) { }
/**
 * handle click on favorite button
 */
  onClick() {
    if (this.isFavorite) {
      this.isFavorite = false;
      this.storageService.removePlanet(this.planetName);
    } else {
      this.isFavorite = true;
      this.storageService.addPlanet(this.planetName);
    }

  }
  ngOnInit() {
  }

}
