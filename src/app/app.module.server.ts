import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { HomeComponent } from './home/home.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { OrderComponent } from './order/order.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [AppModule, ServerModule],
  bootstrap: [
    //HomeComponent
    //DetailProductComponent
    //OrderComponent
    //OrderConfirmComponent,
    // LoginComponent,
    RegisterComponent,
  ],
})
export class AppServerModule {}
