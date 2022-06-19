import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  blogDetails: any;

  constructor(public http: HttpClient,private activatedRoute: ActivatedRoute) {
   
    const activeID = this.activatedRoute.snapshot.params["id"];
    this.http.get("http://localhost:5000/product/"+activeID).subscribe(
      (data:any) => {
         this.blogDetails = data;
      },
      error => {
          console.log("Error", error);
      }
    );

   }


  ngOnInit(): void {
  }

}
