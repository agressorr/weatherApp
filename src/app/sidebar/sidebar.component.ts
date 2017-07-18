import { Component, OnInit } from '@angular/core';
import {Profile} from "../../profile.model";
import {ProfileService} from "../profile.service";
import {WeatherService} from "../weather.service";
import {WeatherItem} from "../weather-item.model";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  profiles: Profile[]

  constructor(private profileService: ProfileService, private weatherService: WeatherService) { }

  ngOnInit() {
    this.profiles = this.profileService.getProfiles()
  }

  onSaveNew() {
    const cities = this.weatherService.getItems().map(function (element : WeatherItem) {
      return element.cityName
    })
    this.profileService.saveNewProfile(cities)
  }
  onLoadProfile(profile: Profile) {
    this.weatherService.clearWeatherItems()
    for(let i=0;i< profile.cities.length; i++) {
      this.weatherService.searchWeatherData(profile.cities[i])
        .retry()
        .subscribe(
          data => {
            const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp)
            this.weatherService.addItem(weatherItem)
          }
        )
    }
  }
  onDeleteProfile(event: Event, profile: Profile) {
    event.stopPropagation()
    this.profileService.deleteProfile(profile)
  }
}
