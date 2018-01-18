import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-hero-team',
  templateUrl: './hero-team.component.html',
  styleUrls: ['./hero-team.component.css']
})
export class HeroTeamComponent implements OnInit {
  heroes: Hero[];
  available: Hero[];

  constructor(
    private heroService: HeroService,
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
        this.available = this.heroes.concat();
      });
  }

  add(hero): void {
    this.teamService.add(hero);
    this.updateAvailavle();
  }

  delete(hero): void {
    this.teamService.delete(hero);
    this.updateAvailavle();
  }

  updateAvailavle(): void {
    let team = this.teamService.getIdMap();
    this.available = this.heroes.filter(hero => !team[hero.id])
  }

}
