import { Component, OnInit } from '@angular/core';
import { JsoncallService } from '../jsoncall.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home:any;

  constructor(private api: JsoncallService) { 
    this.api.getData().subscribe((data) => {
      this.home = data;
    })

  }


  ngOnInit(): void {
  }

}
