import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent implements OnInit {
  constructor() {}

  headline =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec lacus at dolor pharetra molestie. Pellentesque efficitur congue libero, vel maximus ligula lobortis id. Proin facilisis aliquet mauris. Nullam iaculis.';

  features = [
    {
      Image: './assets/qr.png',
      Heading: 'Feature 1',
      Content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      Image: './assets/qr.png',
      Heading: 'Feature 2',
      Content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      Image: './assets/qr.png',
      Heading: 'Feature 3',
      Content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  ngOnInit(): void {}
}
