import {
  Component,
  Input,
  OnInit
}

from '@angular/core';
import {
  ActivatedRoute,
  ParamMap
}

from '@angular/router';
import {
  Location
}

from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {
  Hero
}

from './hero';
import {
  HeroService
}

from './hero.service';
@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html'
  }

) export class HeroDetailComponent implements OnInit {
  ngOnInit(): void {
    this.route.paramMap.switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id'))).subscribe(hero => this.hero = hero);
  }
  constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) {};
  @Input() hero: Hero;
  goBack(): void {
    this.location.back();
  };
  save(): void {
    this.heroService.update(this.hero).then(() => this.goBack());
  };
  delete(): void {
    this.heroService.delete(this.hero).then(() => this.goBack());
  }
}
