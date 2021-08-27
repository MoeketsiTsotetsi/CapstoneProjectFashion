import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:any = [];

  constructor(private _cartService:CartService,private _router:Router) { }

  ngOnInit(): void {
    this.cartItems = this._cartService.loadCartItems()
    console.log(this.cartItems);
    
  }

  cartEmpty(){
    this._cartService.clearCartItems();
    alert('Car items cleared...');
    this._router.navigate(['/product'])

  }

  removeCartItem(id:number){
    for (let i = 0; i < this.cartItems.length; i++) {
      let item = this.cartItems[i];
      
      if(item.id == id){
        this.cartItems.splice(i,1);
        
      }
      localStorage.setItem('cartItems',JSON.stringify(this.cartItems))
    }
    
  }


}
