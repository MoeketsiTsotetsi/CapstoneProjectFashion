import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  product:Product = new Product();

  constructor(private _http:HttpClient,private _router:Router) { }

  ngOnInit(): void {
  }

  publish(){
    if(this.product.name != ""  && this.product.price !=0 && this.product.quantity !=0 &&
    this.product.image != "" ){

      this._http.post(`http://localhost:3000/products`,this.product).subscribe(result =>{
        alert("You have added a new product ");
        this._router.navigate(['/products']);
      },error =>{ console.log(error);
      })

      
    }else{
      alert("Please Fill out the whole form");
    }

  }

}
