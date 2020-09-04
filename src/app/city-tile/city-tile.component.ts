import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-city-tile',
  templateUrl: './city-tile.component.html',
  styleUrls: ['./city-tile.component.scss']
})
export class CityTileComponent implements OnInit {

  @Input()
  city: string;

  @Input()
  imageUrl: string;

  @Input()
  path: string;

  constructor() { }

  ngOnInit(): void {
    this.setPathIfNotEmpty();
  }

  setPathIfNotEmpty(): void {
    this.path = this.path ? this.path : 'city/' + this.city;
  }

}
