import { InjectionToken, inject } from '@angular/core';
import { PaginatorPlugin } from '@datorama/akita';

import { HeroesQuery } from './heroes.query';

export const HEROES_PAGINATOR = new InjectionToken('HEROES_PAGINATOR', {
  providedIn: 'root',
  factory: () => {
    const heroesQuery = inject(HeroesQuery);
    return new PaginatorPlugin(heroesQuery).withControls().withRange();
  },
});
