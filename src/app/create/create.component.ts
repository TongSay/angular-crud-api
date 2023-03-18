import { Component, OnInit } from '@angular/core';
import { Post } from '../Model/post.model';

import { HttpClient } from '@angular/common/http';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  // baseUrl = "http://localhost:3000/";

  posts:Post = new Post();

  constructor(private http:HttpClient, private postService:PostService) {

   }
 
  ngOnInit(){
   
  }

  fechPost(){
    this.postService.create("posts",this.posts).subscribe((res:any)=>{});
    // this.http.post(this.baseUrl+"posts",this.posts).subscribe((res:any)=>{
    // });
  }

}
