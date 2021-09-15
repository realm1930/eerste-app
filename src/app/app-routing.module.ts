import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandDetailsComponent } from './land-details/land-details.component';
import { LandenComponent } from './landen/landen.component';
import { TopInwondersComponent } from './top-inwonders/top-inwonders.component';
const routes: Routes = [
{path: 'landen', component: LandenComponent},
{path: 'top', component: TopInwondersComponent},
{path: '', redirectTo: '/top', pathMatch: 'full'},
{path: 'detail/:id', component: LandDetailsComponent}
];
@NgModule({
imports: [
RouterModule.forRoot(routes)
],
exports: [RouterModule]
})
export class AppRoutingModule { }
