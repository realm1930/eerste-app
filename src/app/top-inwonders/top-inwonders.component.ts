import { Component, OnInit } from '@angular/core';
import { LandService } from '../land.service';
import { Land } from '../model/land'

@Component({
  selector: 'app-top-inwonders',
  templateUrl: './top-inwonders.component.html',
  styleUrls: ['./top-inwonders.component.css']
})
export class TopInwondersComponent implements OnInit {
  landen: Land[];

  constructor(private landService:LandService) { }

  ngOnInit() {
    this.landService.getTopLanden(3).subscribe(toplanden => this.landen = toplanden);
  }

}
