import { Injectable } from '@angular/core';
import {WeatherItem} from "./weather-item.model";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {Http, Headers, RequestOptions, URLSearchParams} from "@angular/http";

@Injectable()
export class WeatherService {
  constructor(private http: Http) { }

  getItems() {
    return weatherItems
  }
  addItem(weatherItem: WeatherItem) {
    weatherItems.push(weatherItem)
  }

  searchWeatherData(cityName: string): Observable<any> {
    const ApiKey = '***'
    const units = 'metric'
    // Parameters obj-
    let params: URLSearchParams = new URLSearchParams();
    params.set('APPID', ApiKey);
    params.set('units', units);
    params.set('q', cityName);

    let requestOptions = new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})});
    requestOptions.params = params;

      return this.http.get('http://api.openweathermap.org/data/2.5/weather', requestOptions)
        .map(response => response.json())
  }
  clearWeatherItems() {
    weatherItems.slice(0)
  }
}

const weatherItems: WeatherItem[] = []
