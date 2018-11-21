
//our root app component
import { Component, OnInit } from '@angular/core';
import { cartService } from './cart/cartService';
import { ProductDto } from './../common/models/dto/productDto';
import { LoaderService } from './loader/loader-service'
@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  Products: ProductDto[]
  public itemsToShow;
  private noOfItemsToShowInitially: number = 9;
  // itemsToLoad - number of new items to be displayed
  private itemsToLoad: number = 15;
  constructor(private cart_Service: cartService, private loaderService: LoaderService) {

  }
  ngOnInit() {
    this.cart_Service.getAllProducts().subscribe(data => {
      if (!data) {
        return;
      }

      this.Products = data;
      this.itemsToShow = this.Products.slice(0, this.noOfItemsToShowInitially);
    })



  }


  public isFullListDisplayed: boolean = false;

  onScroll() {
    this.loaderService.show();
    if (this.noOfItemsToShowInitially <= this.Products.length) {
      // Update ending position to select more items from the array
      this.noOfItemsToShowInitially += this.itemsToLoad;
      this.itemsToShow = this.Products.slice(0, this.noOfItemsToShowInitially);
      console.log("scrolled");


    } else {

      this.isFullListDisplayed = true;

    }
    setTimeout(() => {

      this.loaderService.hide();
    }, 5);
  }


}