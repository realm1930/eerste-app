import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { LandDetailsComponent } from './land-details/land-details.component';
import { LandService } from './land.service';
import { LandenComponent } from './landen/landen.component';
import { TopInwondersComponent } from './top-inwonders/top-inwonders.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandZoekComponent } from './land-zoek/land-zoek.component';

@NgModule({
declarations: [
AppComponent,
LandDetailsComponent,
LandenComponent,
TopInwondersComponent,
LandZoekComponent
],
imports: [
BrowserModule, FormsModule, AppRoutingModule, HttpClientModule,
HttpClientInMemoryWebApiModule.forRoot(
InMemoryDataService
),
FontAwesomeModule],

providers: [LandService],
bootstrap: [AppComponent]
})
export class AppModule { }