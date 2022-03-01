import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(dataForm:any) {
    this.authService.login(dataForm.username,dataForm.password)
    if(this.authService.isAuthentificate){
       this.router.navigateByUrl('');
    }
  }
}
