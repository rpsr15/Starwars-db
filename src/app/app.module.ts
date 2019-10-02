import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { PlanetCardComponent } from './components/planet-card/planet-card.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilmsComponent } from './components/films/films.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { MatGridListModule, MatIconModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { SWapiService } from './Services/swapi.service';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StorageServiceService } from './Services/storage-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PlanetsComponent,
    PlanetCardComponent,
    FilmsComponent,
    FavoritesComponent
  ],
  imports: [
    MatProgressSpinnerModule,
    MatInputModule,
    MatGridListModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [SWapiService, StorageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
