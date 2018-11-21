import {cartService} from './cartService';
import {Component, Input} from '@angular/core';
import { ProductDto }  from '../../common/models/dto/productDto';
@Component({selector: 'shopping-cart-item', templateUrl: './shopping-cart-item.html'})

export class shoppingCartItem {
    @Input() product : ProductDto;
    constructor(private _cartService : cartService) {}
    AddProduct(_product : ProductDto) {
        _product.added = true;
        this
            ._cartService
            .addProduct(_product);
    }
    RemoveProduct(_product : ProductDto) {
        _product.added = false;
        this
            ._cartService
            .removeProduct(_product.id);
    }

}
