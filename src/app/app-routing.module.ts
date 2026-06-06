import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Sudaroli Evening Parotta Stall | Fresh Hot Parottas' },
  { path: 'about', component: AboutComponent, title: 'About | Sudaroli Evening Parotta Stall' },
  { path: 'menu', component: MenuComponent, title: 'Menu | Sudaroli Evening Parotta Stall' },
  { path: 'gallery', component: GalleryComponent, title: 'Gallery | Sudaroli Evening Parotta Stall' },
  { path: 'contact', component: ContactComponent, title: 'Contact | Sudaroli Evening Parotta Stall' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
