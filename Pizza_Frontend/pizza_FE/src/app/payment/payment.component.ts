import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart-service.service';  // Import your CartService
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  amount: number = 0;
  handler: any = null;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.amount = this.cartService.calculateTotal();
      this.loadStripe();
      console.log('Stripe handler:', this.handler);
    }, 0);
  }
  pay() {
    if (this.handler) {
      this.handler.open({
        name: 'Pizza Delivery',
        description: 'Total amount to pay',
        amount: this.amount * 100
      });
    } else {
      console.error('Stripe handler is null.');
    }
  }
  

  loadStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
          locale: 'auto',
          token: (token: any) => {
            // Handle the token, e.g., send it to your server for processing
            console.log(token);
            alert('Payment Success!!');
            // Redirect to a success page or perform other actions
            this.router.navigate(['/home']);
          }
        });
      };
      window.document.body.appendChild(s);
    }
  }
}
