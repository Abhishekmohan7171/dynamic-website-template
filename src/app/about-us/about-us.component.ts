import { Component, OnInit } from '@angular/core';
import { JsoncallService } from '../jsoncall.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {

  about:any
  constructor(private api: JsoncallService) {
    this.api.getData().subscribe((data) => {
      this.about = data;
    })
  }

  content =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec lacus at dolor pharetra molestie. Pellentesque efficitur congue libero, vel maximus ligula lobortis id. Proin facilisis aliquet mauris. Nullam iaculis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec lacus at dolor p aretra molestie. Pellentesque efficitur congue libero, vel maximus ligula lobortis id. Proin facilisis aliquet mauris. Nullam iaculis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec lacus at dolor ph      aretra molestie. Pellentesque efficitur congue libero, vel maximus ligula lobortis id. Proin f      acilisis aliquet mauris. Nullam iaculis.Lorem ipsum dolor sit amet, consectetur adipiscing eli      t. Ut nec lacus at dolor p aretra molestie. Pellentesque efficitur congue libero, vel maximus       ligula lobortis id. Proin facilisis aliquet mauris';

 
      lineone = 'Guduvanchery,';
      linetwo =  'Chennai, 603203';
      email =  'xyz@email.com';
      phone = '123456678';
  
  ngOnInit(): void {	}
}
