import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  // store the add to cart value


  public products : any = [];
  public grandTotal !: number;
  // injecting cartservice
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    // subscribe will return all the items stored

    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  // methods to remove and emptying cart
  
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

}
