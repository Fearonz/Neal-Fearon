import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoachingComponent } from './coaching/coaching.component';
import { SalesComponent } from './sales/sales.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'about',            component: AboutComponent },
    { path: 'coaching',         component: CoachingComponent },
    { path: 'sales',            component: SalesComponent},
    { path: 'gallery',          component: GalleryComponent},
    { path: 'contact',          component: ContactComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
