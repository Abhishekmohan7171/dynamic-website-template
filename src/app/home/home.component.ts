import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec lacus at dolor pharetra molestie. Pellentesque efficitur congue libero, vel maximus ligula lobortis id. Proin facilisis aliquet mauris. Nullam iaculis."

  heading = "Heading Title !";

  ngOnInit(): void {
  }

}
