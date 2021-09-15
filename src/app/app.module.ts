import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LandDetailsComponent } from './land-details/land-details.component';
import { LandService } from './land.service';
import { LandenComponent } from './landen/landen.component';
import {RouterModule} from '@angular/router';
import { TopInwondersComponent } from './top-inwonders/top-inwonders.component'
@NgModule({
declarations: [
AppComponent,
LandDetailsComponent,
LandenComponent,
TopInwondersComponent
],
imports: [ BrowserModule,FormsModule,
  RouterModule.forRoot([
  {
  path: 'landen',
  component:LandenComponent
  },
  {
    path:"top",
    component:TopInwondersComponent
  },
  {
    path:"",
    redirectTo:"/top",
    pathMatch:'full'
    }
  ])
  ],
providers: [LandService],
bootstrap: [AppComponent]
})
export class AppModule { }
