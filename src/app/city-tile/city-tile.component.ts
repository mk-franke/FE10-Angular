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

  constructor() { }

  ngOnInit(): void {
  }

}
