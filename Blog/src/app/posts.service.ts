import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl: string;
  oneUrl: string;


  post: any;

  constructor(private httpClient: HttpClient) {
    this.post = '';
    this.baseUrl = 'https://fakeblog.bel4.com/api/posts';
    this.oneUrl = `https://fakeblog.bel4.com/api/posts/${this.post.id}/show`;



  }


  getPosts() {
    return this.httpClient.get(this.baseUrl).toPromise();

  }



  getOnePost(pId) {
    return this.httpClient.get(`https://fakeblog.bel4.com/api/posts/${pId}/show`).toPromise();

  }


}
