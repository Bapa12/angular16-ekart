import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  name = "Loki";

  product = {
    name: "iPhone X",
    price: 789,
    color: "Black Titanium",
    discount: 8.5,
    inStock: 10,
    pImage: '/assets/images/iphone.png'
  }

  getDiscountedPrice() {
    return (this.product.price - (this.product.price * this.product.discount / 100)).toFixed(2);
  }
}
