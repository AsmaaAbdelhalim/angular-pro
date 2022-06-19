import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
   cats : any[];

  constructor(public http: HttpClient) {
    this.cats = [];
    this.http.get("http://localhost:5000/product").subscribe(
      (data:any) => {
         this.cats = data;
      },
      error => {
          console.log("Error", error);
      }
    );

   }
   //let cats: any[];

   
  ngOnInit(): void {
  }


}
