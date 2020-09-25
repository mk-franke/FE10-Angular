import { Component, OnInit } from '@angular/core';
import {CityDto} from '../dto/CityDto';

@Component({
  selector: 'app-add-city-tile',
  templateUrl: './add-city-tile.component.html',
  styleUrls: ['./add-city-tile.component.scss']
})
export class AddCityTileComponent implements OnInit {

  city: CityDto = {
    name: 'Add new city',
    imageUrl: 'assets/img/plus.png',
    id: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
