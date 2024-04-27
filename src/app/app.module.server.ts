import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { HomeComponent } from './home/home.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  imports: [AppModule, ServerModule],
  bootstrap: [
    //HomeComponent
    //DetailProductComponent
    OrderComponent,
  ],
})
export class AppServerModule {}
