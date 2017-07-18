import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {WeatherService} from "../weather.service";
import {WeatherItem} from "../weather-item.model";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})
export class WeatherSearchComponent implements OnInit {
  private searchStream = new Subject<string>()
  data: any = {}

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.searchStream
      .debounceTime(350)
      .distinctUntilChanged()
      .switchMap((input: string) => this.weatherService.searchWeatherData(input))
      .subscribe(
        data => this.data = data
      )
  }

  onSubmit(form: FormControl) {
            const weatherItem = new WeatherItem(this.data.name, this.data.weather[0].description, this.data.main.temp)
            this.weatherService.addItem(weatherItem)
        }

  onSearch(cityName: string) {
      this.searchStream
        .next(cityName)
  }
}
