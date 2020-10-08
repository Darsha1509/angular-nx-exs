import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { HeroesStore, HeroesState } from './heroes.store';

@Injectable({ providedIn: 'root' })
export class HeroesQuery extends QueryEntity<HeroesState> {
  constructor(protected store: HeroesStore) {
    super(store);
  }
}
