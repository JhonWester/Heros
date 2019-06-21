import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
 })
export class NavbarComponent implements OnInit {
  

  constructor( private conexion: Router) {

  }

  ngOnInit() {
  }

  buscar(termino: string){
    this.conexion.navigate(['/busqueda', termino]);
  }
}
