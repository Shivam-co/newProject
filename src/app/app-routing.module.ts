import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';

import { LoginComponent } from './login/login.component';
import { MumbaiiComponent } from './mumbaii/mumbaii.component';


import { UserComponent } from './user/user.component';


const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'user', component: UserComponent}, 
  { path: 'mumbaii', component: MumbaiiComponent},
  { path: 'gallery', component: GalleryComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
