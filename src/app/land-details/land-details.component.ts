import { Component, Input, Output, } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {Land} from '../model/land';

@Component({
  selector: 'app-land-details',
  templateUrl: './land-details.component.html',
  styleUrls: ['./land-details.component.css']
})

export class LandDetailsComponent{
  @Input() land:Land;
  @Output() valueChange = new EventEmitter();
  votes = 0;
  onClick(){
    this.votes++;
    this.valueChange.emit(this.votes);
  }
}


