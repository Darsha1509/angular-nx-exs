import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Hero } from './hero.model';

@Injectable({ providedIn: 'root' })
export class HeroesApiService {
  constructor(private http: HttpClient) {}

  getPage(page: string, search: string) {
    return this.http
      .get<{ results: Hero[]; count: number }>(
        `https://swapi.dev/api/people/?page=${page}&search=${search}`
      )
      .pipe(
        map((res) => {
          return {
            heroes: res.results,
            count: res.count,
          };
        })
      );
  }
}
