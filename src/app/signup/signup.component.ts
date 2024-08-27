import { Component, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent,RouterLink], // Add CommonModule here
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  constructor(private elementRef: ElementRef,private router:Router) { }

  ngAfterViewInit(): void {
    const loginButton = this.elementRef.nativeElement.querySelector('#login');
    const registerButton = this.elementRef.nativeElement.querySelector('#register');

    loginButton.addEventListener('click', () => {
      this.toggleContainer(false);
    });

    registerButton.addEventListener('click', () => {
      this.toggleContainer(true);
    });
  }

  toggleContainer(isRegister: boolean) {
    const container = this.elementRef.nativeElement.querySelector('#container');
    if (isRegister) {
      container.classList.add('active');
    } else {
      container.classList.remove('active');
    }
  }
  loginObj:any={
    userName:"",
    passWord:""
  }
  // constructor(private router:Router ){}
  
  onLogin(){
    if(this.loginObj.userName=='admin' && this.loginObj.passWord=='12345'){
      // alert("Login Success");
      this.router.navigateByUrl('admin')
    }
    else{
      alert("Wrong credentials")
    }
  }
}
