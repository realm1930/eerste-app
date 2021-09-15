import { Component } from '@angular/core';
import { Land } from './model/land';
import { LandService } from './land.service';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'Een lijstje van landen';
  land: Land = {
    id: 1,
    name: 'België'
  };
  landen: Land[];
  selectedLand: Land;
  totalVotes: number;
  constructor(private landService: LandService){}
  onSelect(land:Land):void{
    this.selectedLand=land;
  }
  onValueChange(event:number){
    this.totalVotes = event;
  }
  ngOnInit(): void {
    this.landService.getLanden().subscribe(landen=>this.landen=landen);
  }
}
