import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User = new User();
  constructor(private _router:Router,private _http:HttpClient) { }

  ngOnInit(): void {
  }


  register(){

    if(this.user.name != ""  && this.user.email !="" && this.user.password !="" &&
    this.user.type != "" && this.user.username !=""){

      this._http.post(`http://localhost:3000/users`,this.user).subscribe(result =>{
        alert("You have registered successfully ");
        this._router.navigate(['/login']);
      },error =>{ console.log(error);
      })

      
    }else{
      alert("Please Fill out the whole form");
    }
  
  }
}
