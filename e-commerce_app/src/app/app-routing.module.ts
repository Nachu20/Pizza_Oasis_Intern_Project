import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
const routes: Routes = [
  { path:"signup",component:SignupComponent},
  { path:"signin",component:SigninComponent},
  { path:'cart',component:CartComponent},
  { path:'home',component:ProductPageComponent},
  { path:'contactUs',component:ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
