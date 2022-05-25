import { Component, OnInit } from '@angular/core';
import { JsoncallService } from '../jsoncall.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent implements OnInit {

  feature:any
  constructor(private api: JsoncallService) {

    this.api.getData().subscribe((data)=>{
      this.feature = data;
    })
  }

  

  ngOnInit(): void {}
}
