import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrderComponent } from './components/order/order.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { OrderConfirmComponent } from './components/order-confirm/order-confirm.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from '././components/register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    OrderComponent,
    DetailProductComponent,
    OrderConfirmComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [provideClientHydration()],
  bootstrap: [
    //HomeComponent,
    //DetailProductComponent,
    //OrderComponent,
    // OrderConfirmComponent,
    LoginComponent,
    //RegisterComponent,
  ],
})
export class AppModule {}
