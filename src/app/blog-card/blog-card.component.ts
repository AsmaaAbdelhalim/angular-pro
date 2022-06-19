import { Component, Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {

@Input() blogItem: any = {
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

  goToDetails(id:any){
    this.router.navigate(["blogs/blog-details", id]);
  }
}