import { ProductDto }  from '../../common/models/dto/productDto';

export interface CartState {
 loaded: boolean;
 products : ProductDto[];

}