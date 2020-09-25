import {Injectable} from '@angular/core';
import {CityModel} from '../model/CityModel';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CityDto} from '../dto/CityDto';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  cityUrl = 'http://localhost:3000/cities';

  constructor(private httpClient: HttpClient) {
  }

  getCities(): Observable<CityDto[]> {
    return this.httpClient.get<CityDto[]>(this.cityUrl);
  }

  addCity(cityDto: CityDto): Observable<CityDto> {
    return this.httpClient.post<CityDto>(this.cityUrl, cityDto);
  }

  removeCity(id: string): Observable<CityDto> {
    return this.httpClient.delete<CityDto>(`${this.cityUrl}/${id}`);
  }
}
