import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityWeatherComponent} from './city-weather/city-weather.component';
import { CityTilesContainerComponent } from './city-tiles-container/city-tiles-container.component';
import { AddCityFormComponent } from './add-city-form/add-city-form.component';

const routes: Routes = [
  {
    path: '',
    component: CityTilesContainerComponent
  },
  {
    path: 'name/:name',
    component: CityWeatherComponent
  },
  {
    path: 'new-city',
    component: AddCityFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
