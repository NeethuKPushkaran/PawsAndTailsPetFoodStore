import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = 'abc@gmail.com';
  password: string = '1234567';

    constructor(private authService: AuthService) { }

  onSubmit(): void {
    // Perform login and store user information
    this.authService.login(this.username, this.password);

    // Optionally, you can redirect the user to a different page after successful login
  }
}
