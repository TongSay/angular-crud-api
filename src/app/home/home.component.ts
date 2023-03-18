import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../Model/post.model';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  //baseUrl = "http://localhost:3000/";

  posts:Post = new Post();

 

  constructor(private http:HttpClient,
    private ActivateRoute:ActivatedRoute, 
    private Router:Router, 
    private postService:PostService){
   
  }
  ngOnInit(){

   this.fechGetAPI();

   
  }
  
  fechGetAPI(){
    // this.http.get(this.baseUrl + "posts").subscribe((res:any) =>{
    //   console.log(res);
    //   this.posts = res;
    // });

    this.postService.get("posts").subscribe((res:any)=>{
     
      this.posts = res;
    });


  }
  fechDeleteAPI(id:Number){

    this.postService.delete("posts/",id).subscribe((res:any)=>{});

    this.Router.navigateByUrl("");
    // this.http.delete(this.baseUrl+"posts/"+id).subscribe((res:any) =>{
    //   console.log(res);
     
    // });
 
  }

}
