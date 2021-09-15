import { Component,OnInit } from '@angular/core';
import { Land } from '../model/land';
import { LandService } from '../land.service';

@Component({
  selector: 'app-landen',
  templateUrl:'landen.component.html',
  styleUrls: ['./landen.component.css']
  
})
export class LandenComponent implements OnInit {
  land: Land = {
    id: 1,
    name: 'België',
    inwoners: 10000000
  };
  landen: Land[];
  selectedLand: Land;
  totalVotes: number;
  constructor(private landService: LandService){}
  onSelect(land:Land):void{
    this.selectedLand=land;
  }
  onValueChange(event: number) {
    this.totalVotes = event;
    }
  ngOnInit(): void {
    this.landService.getLanden().subscribe(landen=>this.landen=landen);
  }
}
