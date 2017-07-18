import {Component, Input, OnInit} from '@angular/core';
import {WeatherItem} from "../weather-item.model";

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss']
})
export class WeatherItemComponent implements OnInit {
  @Input() weatherItem: WeatherItem

  constructor() {}

  ngOnInit() {
  }

}
