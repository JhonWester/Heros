import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {
  heroe: any[] = [];
  constructor(private _conexion: ActivatedRoute, private _serviceHero: HeroService,
              private ruta: Router) { }

  ngOnInit() {
    this._conexion.params.subscribe(params =>{
      this.heroe = this._serviceHero.buscarHeroes(params['name']);
      console.log(this.heroe);
    })
  }

  regresar(){
    this.ruta.navigate(['/home']);
  }

}
