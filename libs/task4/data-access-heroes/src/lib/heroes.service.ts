import { Injectable, Inject } from '@angular/core';
import { map, take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { HeroesApiService } from './heroes-api.service';
import { HeroPage } from './heroes-page.model';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  constructor(private api: HeroesApiService) {}

  getPage(page: string, search = ''): Observable<HeroPage> {
    return this.api.getPage(page, search).pipe(
      map((response) => {
        const heroes = response.heroes.map((hero) => {
          return {
            id: hero.name,
            name: hero.name,
            gender: hero.gender,
            birth_year: hero.birth_year,
          };
        });

        return {
          perPage: 10,
          lastPage: Math.ceil(response.count / 10),
          currentPage: +page,
          total: response.count,
          data: heroes,
        };
      }),
      take(1)
    );
  }
}
