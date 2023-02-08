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
    const cardNumber = this.paymentDetails.cardNumber;
    const expirationDate = this.paymentDetails.expirationDate;
    const cvv = this.paymentDetails.cvv;

    return this.paymentDetails.cardName.length > 0 &&
           /^\d+$/.test(cardNumber) && cardNumber.length === 16 &&
           /^\d{2}\/\d{2}$/.test(expirationDate) &&
           /^\d+$/.test(this.paymentDetails.cvv) && this.paymentDetails.cvv.length === 3;
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
   isCardNumberValid(): boolean {
    const cardNumber = this.paymentDetails.cardNumber;
    // Check if the card number only contains numbers
    return /^\d+$/.test(cardNumber);
  }

  isExpirationDateValid(): boolean {
    const expirationDate = this.paymentDetails.expirationDate;
    // Check if the expiration date is in a valid date format
    return !isNaN(Date.parse(expirationDate));


}
iscvvValid(): boolean{
  return /^\d+$/.test(this.paymentDetails.cvv);
}
}
