import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})


export class AuthPage implements OnInit {

  isLoading = false;
  isLogin = true;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onLogin(){
    this.isLoading = true;
    this.authService.login();
    setTimeout( ()=> { 
      this.isLoading = false;
      this.router.navigateByUrl('/home/tabs/reminders')
    }, 1500);
  }

  onSwitchAuthMode(){ 
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: NgForm) {
    if(!form.valid){
      return;
    }

    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password);
    if(this.isLogin){

    }
    else { 

    }

  }

}
