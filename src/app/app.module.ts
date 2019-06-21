import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// servicios
import { HeroService } from './components/services/hero.service';

// rutas
import { AppRoutingModule} from './app.routes';  

// componentes
import { HomeComponent } from './components/home/home.component';
 
import { HerosComponent } from './components/heros/heros.component';
import { AboutComponent } from './components/about/about.component';
 
import { from } from 'rxjs';
import { HeroesComponent } from './components/heroes/heroes.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
 
 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
 
    HerosComponent,
    AboutComponent,
    HeroesComponent,
    BusquedaComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
