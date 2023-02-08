import { NgModule,OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';
import { Router } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { FproductComponent } from './fproduct/fproduct.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ReviewComponent } from './review/review.component';
import { LoginComponent } from './login/login.component';
import { AddressComponent } from './address/address.component';
import { RegisterComponent } from './register/register.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ProductService } from './product.service';
import { KproductsComponent } from './kproducts/kproducts.component';




const routes: Routes = [

  {
    path: '', component: ProductComponent
  },
  {
    path: 'contact', component:ContactComponent
  },
  {
    path: 'about', component:AboutComponent
  },
  {
    path: 'fproduct', component:FproductComponent
  },
   {
     path: 'shopping-cart', component:ShoppingCartComponent
   },
   {
    path: 'review', component: ReviewComponent
   },
   {
    path: 'address', component: AddressComponent
   },
   {
    path: 'login', component: LoginComponent
   },
   {
    path: 'register', component:RegisterComponent
   },
   {
    path: 'payment', component:PaymentComponent
   },
   {
    path: 'confirmation', component:ConfirmationComponent
   },

   {
    path: 'product', component:ProductComponent
   },
   {
    path: 'kproducts', component: KproductsComponent
   },
   { path: 'fproduct/:id', component: FproductComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ProductComponent,
    ContactComponent,
    AboutComponent,
    FproductComponent,
    ShoppingCartComponent,
    ReviewComponent,
    LoginComponent,
    AddressComponent,
    RegisterComponent,
    PaymentComponent,
    ConfirmationComponent,
    KproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    // RouterModule.forRoot([
    //   { path: 'product', component: ProductComponent }
    // ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})

export class AppModule { }
