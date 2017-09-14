import {
  Component,
  OnInit
} from '@angular/core';

import {
  HeroDetailComponent
} from './hero-detail.component';
import {
  Hero
} from './hero';
import {
  HeroService
} from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./app.component.css']
})

export class HeroesComponent implements OnInit {
  ngOnInit(): void {
    this.getHeroes();;
  }
  title = 'Tour of Heroes';
  heroes = Hero[0];
  selectedHero: Hero;
  constructor(private heroService: HeroService) {};
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  };
  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  };
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };
}
