import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoaderComponent } from './loader/loader-component';
import { LoaderService } from './loader/loader-service';
import { HttpClient } from './services/http.service';

import { shoppingCartItem } from './cart/shopping-cart-item';
import { shoppingList } from './cart/shopping-list';
import { cartService } from './cart/cartService';


@NgModule({
  declarations: [AppComponent,
    LoaderComponent,
    shoppingCartItem,
    shoppingList],
  imports: [BrowserModule,
    FormsModule,
    HttpModule,
    InfiniteScrollModule],
  
  providers: [HttpClient, cartService, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
