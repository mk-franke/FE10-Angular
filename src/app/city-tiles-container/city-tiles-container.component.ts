import { Component, OnInit } from '@angular/core';
import {CityModel} from '../model/CityModel';

@Component({
  selector: 'app-city-tiles-container',
  templateUrl: './city-tiles-container.component.html',
  styleUrls: ['./city-tiles-container.component.scss']
})
export class CityTilesContainerComponent implements OnInit {

  cities: CityModel[] = [
    {
      city: 'Berlin',
      imageUrl: 'assets/img/berlin.jpg'
    },
    {
      city: 'Prague',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Charles_Bridge_-_Prague%2C_Czech_Republic_-_panoramio.jpg',
    },
    {
      city: 'new city',
      imageUrl: 'assets/img/add.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }



}
