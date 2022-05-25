import { Component, OnInit } from '@angular/core';
import { JsoncallService } from '../jsoncall.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  nav:any
  constructor(private api:JsoncallService) { 

    this.api.getData().subscribe((data) => {
      console.log(data)
      this.nav = data;
    })
  }

  

  ngOnInit(): void {
  }

}
