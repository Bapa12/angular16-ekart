import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  // name = "Ñañomaru";

  addToCart: number = 0;

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

  onNameChange(event: any) {
    // this.name = event.target.value;
  }

  decrementCartValue() {
    if(this.addToCart > 0) {
      this.addToCart--;
    }
  }

  incrementCartValue() {
    if(this.addToCart < this.product.inStock) {
      this.addToCart++;
    }
  }
}
