import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-posts',
  templateUrl: './detalle-posts.component.html',
  styleUrls: ['./detalle-posts.component.css']
})
export class DetallePostsComponent implements OnInit {

  post: any;

  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.post = '';

  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(async params => {
      const id = parseInt(params.idPost);
      const resultado = await this.postsService.getOnePost(id);
      this.post = resultado;
      console.log(resultado['data']);

    });
  }




  /*
    obtenerIdPost() {
      this.activatedRoute.params.subscribe(async params => {
        const id = parseInt(params.idPost);
        this.post = await this.postsService.getOnePost(id);
        console.log(this.post)});
  
        // const resultado = await this.postsService.getOnePost(id);
        // this.post = resultado;
  
      });
    }
  */


}
