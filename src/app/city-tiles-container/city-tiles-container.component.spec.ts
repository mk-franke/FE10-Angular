import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityTilesContainerComponent } from './city-tiles-container.component';

describe('CityTilesContainerComponent', () => {
  let component: CityTilesContainerComponent;
  let fixture: ComponentFixture<CityTilesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityTilesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityTilesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
