import { Component, OnInit } from '@angular/core';
import {WeatherItem} from "../weather-item.model";
import {WeatherService} from "../weather.service";

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {
  weatherItems: WeatherItem[]
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherItems = this.weatherService.getItems()
  }

}
