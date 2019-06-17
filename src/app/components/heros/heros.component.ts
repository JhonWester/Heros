import { Component, OnInit } from '@angular/core';
import { HeroService, Hero } from '../services/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
 
})
export class HerosComponent implements OnInit {
  
  hero:Hero []=[];

  constructor(private _heroService: HeroService, private route: Router) { }

  ngOnInit() {
    this.hero = this._heroService.getHero();
   // console.log(this.hero);
  }

  verHeroe(index: number){
    this.route.navigate(['/heroes', index]);
  }

}
