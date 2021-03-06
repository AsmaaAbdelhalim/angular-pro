import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  product: any = {
    id: 0,
      title: "",
      link: "",
      keywords: [""],
      creator: [""],
      description: "",
      full_description: "",
      pubDate: "",
      image_url: "",
      country: [""],
      category: [""],
      language: ""
    }
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

}
