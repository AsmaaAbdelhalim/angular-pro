import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  cats : any[];
  catsOriginal : any[];

  constructor(public http: HttpClient,private activatedRoute: ActivatedRoute) {
    this.cats = [];
    this.catsOriginal = [];
    
    const activeID = this.activatedRoute.snapshot.params["id"];
    this.http.get("http://localhost:5000/category/"+ activeID).subscribe(
      (data:any) => {
         this.cats = data;
         this.catsOriginal = data;
      },
      error => {
          console.log("Error", error);
      }
    );

   }

ngOnInit(): void {
}
search(){

  var searchBar = document.getElementById("searchBar") as HTMLInputElement;
  if(searchBar.value == ""){
    this.cats = this.catsOriginal;
    return;   
  }
 this.cats =  this.cats.filter(cat => String(cat.name).toLowerCase().startsWith(searchBar.value)  );
 console.log(this.cats);
}
}

//   @Input() blogItem: any = {
//     id: 0,
//       title: "",
//       link: "",
//       keywords: [""],
//       creator: [""],
//       description: "",
//       full_description: "",
//       pubDate: "",
//       image_url: "",
//       country: [""],
//       category: [""],
//       language: ""
//     }
  
//   constructor(private router: Router) { }

 

//   ngOnInit(): void {
//   }

// }
