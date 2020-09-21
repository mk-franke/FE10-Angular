import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CityService} from '../services/city.service';

@Component({
  selector: 'app-add-city-form',
  templateUrl: './add-city-form.component.html',
  styleUrls: ['./add-city-form.component.scss']
})
export class AddCityFormComponent implements OnInit {

  constructor(private cityService: CityService) { }

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      imageUrl: new FormControl(),
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
    this.cityService.addCity(this.form.value).subscribe(value => console.log(value));
  }

}
