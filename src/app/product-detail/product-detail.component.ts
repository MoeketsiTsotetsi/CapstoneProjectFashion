import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 id:any ;
 product:Product = new Product();

  constructor(private _productService:ProductService,private _route:ActivatedRoute,private _httpClient:HttpClient) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
     this._httpClient.get('http://localhost:3000/products/'+this.id).subscribe(result =>{
    console.log(result);
    
     })
  }

}
