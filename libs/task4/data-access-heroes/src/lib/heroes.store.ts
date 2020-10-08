import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface HeroesState extends EntityState<Hero> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'heroes', idKey: 'name', resettable: true })
export class HeroesStore extends EntityStore<HeroesState> {
  constructor() {
    super();
  }
}
