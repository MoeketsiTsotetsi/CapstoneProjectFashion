import { Router } from '@angular/router';
import { AuthGuardService } from './../services/auth-guard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  strikeCheckout: any = null;

  constructor(private _authGuardService: AuthGuardService,
    private _router: Router) { }

  ngOnInit(): void {
    if (!this._authGuardService.isLoggedIn()) {
      this._router.navigate(['/login']);
    }
    this.stripePaymentGateway();
  }

  payNow() {
    const strikeCheckout = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51JQ8PrSAnZsMJ5UED3cwwbXjocsWC1uE61CemwGUS5P0kqkSEiIRfHiNk2cJYdl3AfeWnADf2Aus8WHFhLzVyTSB00egnxrRmj',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken)
        alert('Stripe token generated!');
      }
    });

    strikeCheckout.open({
      name: 'MakePayment',
      description: 'Payment widgets',
      amount: 500 * 100
    });

    this._router.navigate(['/invoice']);
  }

  stripePaymentGateway() {
    if (!window.document.getElementById('stripe-script')) {
      const scr = window.document.createElement("script");
      scr.id = "stripe-script";
      scr.type = "text/javascript";
      scr.src = "https://checkout.stripe.com/checkout.js";

      scr.onload = () => {
        this.strikeCheckout = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51JSJmzCKiEzVm3CXMJ0puyqXU96b4hx0rEb9gjqLj7H2vIOLi21Z2Ti1RL5QQrnGJ9shaq9GI2JSUEG1Ot6W67hi00S7zZGryX',
          locale: 'auto',
          token: function (token: any) {
            console.log(token)
            alert('Payment via stripe successfull!');
          }
        });
      }
      window.document.body.appendChild(scr);
    }
  }
}