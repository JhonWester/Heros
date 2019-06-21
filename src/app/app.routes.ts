import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HerosComponent } from './components/heros/heros.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

   
 

const routes: Routes = [
 
    { path: 'home', component: HomeComponent },
    { path: 'hero', component: HerosComponent},
    { path: 'about', component: AboutComponent},
    { path: 'heroes/:id', component: HeroesComponent},
    { path: 'busqueda/:name', component: BusquedaComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
