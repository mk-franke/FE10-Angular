import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCityTileComponent } from './add-city-tile.component';

describe('AddCityTileComponent', () => {
  let component: AddCityTileComponent;
  let fixture: ComponentFixture<AddCityTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCityTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCityTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
