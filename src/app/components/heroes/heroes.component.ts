import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService} from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',

})
export class HeroesComponent implements OnInit {
  heroes: any = {};
  constructor(private variable_actived: ActivatedRoute,
              private _serviceHero: HeroService) {
    this.variable_actived.params.subscribe( params =>{
      this.heroes = this._serviceHero.getHeroe(params['id']);
      console.log(this.heroes);
        })
   }

  ngOnInit() {
  }

}
