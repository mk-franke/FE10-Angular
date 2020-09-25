import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {CityDto} from '../dto/CityDto';

@Component({
  selector: 'app-city-tile',
  templateUrl: './city-tile.component.html',
  styleUrls: ['./city-tile.component.scss']
})
export class CityTileComponent implements OnInit {

  @Input()
  city: CityDto;

  @Input()
  path;

  @Input()
  temperature = 0;

  @Output()
  rightClick = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
    this.setPathIfNotEmpty();
  }

  setPathIfNotEmpty(): void {
    this.path = this.path ? this.path : 'name/' + this.city;
  }

  onRightClick(event): void {
    event.preventDefault();
    this.rightClick.emit(this.city.id);
  }

}
