import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  standalone: true,
	imports: [NgbCarouselModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = ['../../assets/Images/Slide1.jpg', '../../assets/Images/Slide2.jpg', '../../assets/Images/Slide3.jpg', '../../assets/Images/Slide4.jpg', '../../assets/Images/Slide5.jpg', '../../assets/Images/Slide6.jpg', '../../assets/Images/home6.jpg', '../../assets/Images/Slide7.jpg' ];
}
