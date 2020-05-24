import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent implements OnInit {

  arrPost: any[];
  post: any;

  constructor(
    private postsService: PostsService,
    private userService: UserService) {

    this.arrPost = new Array();



  }

  ngOnInit(): void {
    this.getAllPosts();

  }


  async getAllPosts() {
    const resultado = await this.postsService.getPosts();
    this.arrPost = (resultado['data']);
    // console.log(resultado['data']);
  }

  logOut() {
    this.userService.logOutServicio();
  }



  /*
 [attr.data-id]="post?.id" (click)="cargarPost($event) en el html, para sacar el dataset, pero no es necesario
  async cargarPost($event) {
    const id = $event.target.dataset.id;
    this.post = await this.postsService.getOnePost(id);
    console.log(this.post);
 
  }*/

}
