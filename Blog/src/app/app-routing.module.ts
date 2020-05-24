import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPostsComponent } from './lista-posts/lista-posts.component';
import { DetallePostsComponent } from './detalle-posts/detalle-posts.component';
import { LoginsComponent } from './logins/logins.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginsComponent, },
  { path: 'posts', component: ListaPostsComponent, canActivate: [LoginGuard] },
  { path: 'posts/:idPost', component: DetallePostsComponent, canActivate: [LoginGuard] },

  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
