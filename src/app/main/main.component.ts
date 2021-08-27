import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _router:Router,private _AuthGuardService:AuthGuardService) { }

  ngOnInit(): void {
  }

  loginStatus(){
    if(this._AuthGuardService.isLoggedIn()){
      return true
    }else{
      return false;
    }
  }

  logout(){
    this._AuthGuardService.logout();
    alert("You are successfully logged out");
    this._router.navigate(['/home']);
  }

}
