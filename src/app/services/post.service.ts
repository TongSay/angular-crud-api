import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
 

  API_EP = "https://jsonplaceholder.typicode.com/";

  constructor(private http:HttpClient) { }

  get(path:String):Observable<any[]>{

    return this.http.get<any[]>(this.API_EP+path);

  }

  getById(path:String,id:Number):Observable<object>{

    return this.http.get<object>(this.API_EP+path+id);

  }

  update(path:String,id:Number,body:any):Observable<any[]>{
    return this.http.put<any[]>(this.API_EP+path+id,body);
  }

  delete(path:String,id:Number):Observable<any[]>{

    return this.http.delete<any[]>(this.API_EP+path+id);

  }

  create(path:String, body:any):Observable<any[]>{
    return this.http.post<any[]>(this.API_EP+path,body);
  }
}
