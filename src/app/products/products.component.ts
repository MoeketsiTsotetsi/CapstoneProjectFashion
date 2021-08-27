import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Array<Product> = [];
cartItems:Array<Product> = [];
  constructor(private _productService:ProductService,private _router:Router,private _cartService:CartService) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(result =>{
      console.log(result);
      this.products = result;
      
    },error =>{
      console.log(error);
    })
  }

  buyNow(product: Product){
    this.cartItems = this._cartService.loadCartItems();
    for (var i = 0; i < this.cartItems.length; i++) {
      if (product.id == this.cartItems[i].id) {
        alert('Product is already in cart.');
        return;
      }

    }
    this._cartService.addToCart(product);
    alert('Item added to cart!!');
    this._router.navigate(['/cart']);

  }

}
