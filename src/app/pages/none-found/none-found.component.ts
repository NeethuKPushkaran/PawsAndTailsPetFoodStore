import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-none-found',
  templateUrl: './none-found.component.html',
  styleUrls: ['./none-found.component.css']
})
export class NoneFoundComponent {
  @Input() visible: boolean = false;
  @Input() notFoundMessage: string = "Nothing Found!!";
  @Input() resetLinkText: string = "Reset";
  @Input() resetLinkRoute: string ="/";
}
