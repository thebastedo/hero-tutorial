import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable()
export class TeamService {
  team: Hero[] = [];

  add(hero: Hero) {
    this.team.push(hero);
  }

  delete(hero: Hero) {
    this.team = this.team.filter((h) => hero.id !== h.id);
  }

  getIdMap() {
    const ids = {};
    this.team.forEach((hero) => ids[hero.id] = true);
    return ids;
  }

  clear() {
    this.team = [];
  }

}
