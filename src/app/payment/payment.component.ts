import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  paymentDetails = {
    cardName: '',
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  };

  get formValid(): boolean {
    return this.paymentDetails.cardName.length > 0 &&
           this.paymentDetails.cardNumber.length > 0 &&
           this.paymentDetails.expirationDate.length > 0 &&
           this.paymentDetails.cvv.length > 0 ;
  }
onSubmit(): void {
    if (this.formValid) {
      const paymentDetails = this.paymentDetails;
      // Perform payment processing logic here
      // For example, using a payment gateway API to charge the customer's card
      // You can make HTTP requests using the Angular HttpClient module
      // After successful payment, you can navigate to a success page or show a success message
    } else {
      // Show an error message or highlight the invalid form fields
    }
  }

}
