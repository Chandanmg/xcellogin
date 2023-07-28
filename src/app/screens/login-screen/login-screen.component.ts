import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  login(form: NgForm){
    if(form.invalid){
      return;
    }
    // console.log(form.value.username)
    const apiUrl = 'http://65.0.155.254:5001/admin/auth/login';
    const credentials = {
      username: form.value.username,
      password: form.value.password
    };

    // const headers = { 'Content-Type': 'application/json' };
    this.http.post<any>(apiUrl, {"username":form.value.name,"password":form.value.password}).subscribe(
      (response: any) => {
        if (response.status === 200) {
          this.router.navigate(['/dashboard']);
        } else {
          console.log(response);
        }
      },
      (error: any) => {
        // Handle error responses from the API, if needed
      }
    );
  }
}
