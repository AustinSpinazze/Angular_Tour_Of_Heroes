import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice'},
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Batty Man'},
      { id: 14, name: 'Barnacle Boy'},
      { id: 15, name: 'Mermaid Man'},
      { id: 16, name: 'Raptor'},
      { id: 17, name: 'The Tornado'},
      { id: 18, name: 'Patrick Star'},
      { id: 19, name: 'Doggo McDoggyface'},
      { id: 20, name: 'Dr. Kumar'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
