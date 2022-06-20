import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cats : any[];

  constructor(public http: HttpClient) {
    this.cats = [];
    this.http.get("http://localhost:5000/category").subscribe(
      (data:any) => {
         this.cats = data;
      },
      error => {
          console.log("Error", error);
      }
    );

   }


  ngOnInit(): void {
  }

}
