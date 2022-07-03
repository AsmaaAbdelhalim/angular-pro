import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements 
OnInit {

  @Input() productItem: any = {
    id: 0,
      title: "",
      link: "",
      keywords: [""],
      creator: [""],
      description: "",
      full_description: "",
      pubDate: "",
      image: "",
      country: [""],
      category: [""],
      language: ""
    }
  
  constructor(private router: Router) {

 
  }
  ngOnInit(): void {
   
    
  }
 // this.productItemByID = this.product.filterSelection(
    //   Item => Item.product_id === this.product.id)
}
