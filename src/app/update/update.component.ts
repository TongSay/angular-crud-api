import { Component, OnInit } from '@angular/core';
import { Post } from '../Model/post.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  posts:Post = new Post();
  
  //baseUrl = "http://localhost:3000/";
  constructor(private http:HttpClient ,private ActivatedRoute:ActivatedRoute, private Router:Router, private postService:PostService) { }
 

  ngOnInit(){

    this.ActivatedRoute.params.subscribe((res:any)=>{

      this.postService.getById("posts/",res.id).subscribe((res:any)=>{
        console.log(res);
         this.posts = res;
      });
      
      // this.http.get(this.baseUrl+"posts/"+res.id).subscribe((res:any)=>{
      //   console.log(res);
      //    this.posts = res;
      // });
     
    });

  }

  fechUpadate(){

    this.postService.update("posts/",this.posts.id,this.posts).subscribe((res:any)=>{console.log(res);});

    

    // this.http.put(this.baseUrl + "posts/" + this.posts.id, this.posts).subscribe((res:any)=>{
    //   
    // });

    this.Router.navigateByUrl("/home");
  }

}
