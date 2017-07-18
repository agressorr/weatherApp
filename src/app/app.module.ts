import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherItemComponent } from './weather-item/weather-item.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import {WeatherService} from "./weather.service";
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { SidebarComponent } from './sidebar/sidebar.component';
import {ProfileService} from "./profile.service";

@NgModule({
  declarations: [
    AppComponent,
    WeatherItemComponent,
    WeatherListComponent,
    WeatherSearchComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    WeatherService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
