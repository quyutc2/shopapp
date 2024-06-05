import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginDTO } from '../dtos/user/login.dto';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm!: NgForm;

  phoneNumber: string = '';
  password: string = '';
  constructor(private router: Router, private userService: UserService) {}
  onPhoneNumberChange() {
    console.log(`Phone typed: ${this.phoneNumber}`);
  }
  login() {
    const message = `phone: ${this.phoneNumber}` + `password: ${this.password}`;

    const loginDTO: LoginDTO = {
      phone_number: this.phoneNumber,
      password: this.password,
    };
    this.userService.login(loginDTO).subscribe({
      next: (response: any) => {
        debugger;
        // this.router.navigate(['/login']);

        // Xử lý kqua trả về khi đăng ký thành công
        if (response && (response.status === 200 || response.status === 201)) {
          // dky thành coong chuyển qua màn login
        } else {
        }
      },
      complete: () => {
        debugger;
      },
      error: (error: any) => {
        alert(`Cannot login, error: ${error.error}`);
      },
    });
  }
}
