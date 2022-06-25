import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
    
  }
  
}
// function search() {
//   searchBar.addEventListener("keyup", (e) => {
//       const searchString = e.target.value.toLowerCase();

//       const filteredProducts = products.filter((product) => {
//           return (
//               product.title.toLowerCase().includes(searchString) ||
//               product.category.toLowerCase().includes(searchString)
//           );
//       });
//       displayProducts(filteredProducts);
//   });
// }

// document.addEventListener("DOMContentLoaded", () => {
//   setupAPP();
//   loadProducts()
//       .then((products) => {
//           displayProducts(products);
//           saveProducts(products);
//           return products;
//       })
//       .then((products) => {
//           getBagButtons();
//           cartLogic();
//           category(btn);
//           search();
//           return products;
//       })
//       .then((products) => {});
// });