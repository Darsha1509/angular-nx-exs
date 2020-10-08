import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, map, debounceTime, startWith, tap } from 'rxjs/operators';
import { PaginatorPlugin, PaginationResponse } from '@datorama/akita';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { HeroesState } from '@myorg/task4/data-access-heroes';
import { HeroesService } from '@myorg/task4/data-access-heroes';
import { HEROES_PAGINATOR } from '@myorg/task4/data-access-heroes';
import { Hero } from '@myorg/task4/data-access-heroes';

@Component({
  selector: 'myorg-sw-heroes',
  templateUrl: './sw-heroes.component.html',
  styleUrls: ['./sw-heroes.component.css'],
})
export class SwHeroesComponent implements OnInit {
  input: FormControl;
  pagination$: Observable<PaginationResponse<Hero>>;
  currentPage: BehaviorSubject<number>;
  searchParam: string;

  constructor(
    @Inject(HEROES_PAGINATOR) public paginatorRef: PaginatorPlugin<HeroesState>,
    private heroesService: HeroesService,
    private route: ActivatedRoute,
    private router1: Router
  ) {}

  ngOnInit(): void {
    this.input = new FormControl('');
    this.currentPage = new BehaviorSubject(1);

    this.currentPage.subscribe((data) => {
      this.router1.navigate([], { queryParams: { page: data } });
    });

    this.input.valueChanges.pipe(debounceTime(500)).subscribe((val) => {
      if (val) {
        this.router1.navigate([], { queryParams: { page: 1, search: val } });
      } else {
        this.router1.navigate([], {
          queryParams: { page: this.currentPage.value },
        });
      }
    });

    this.pagination$ = this.route.queryParams.pipe(
      startWith({ page: '1', search: '' }),
      switchMap((queryData: { page: string; search: string }) => {
        const requestFn = () =>
          this.heroesService.getPage(queryData.page, queryData.search);
        return this.paginatorRef
          .getPage(requestFn)
          .pipe(tap(() => this.paginatorRef.setPage(+queryData.page)));
      })
    );
  }

  goPrevPage(): void {
    if (this.currentPage.value !== 1) {
      this.currentPage.next(this.currentPage.value - 1);
    }
  }

  goToPage(page: number): void {
    this.currentPage.next(page);
  }

  goNextPage(): void {
    if (this.currentPage.value !== 9) {
      this.currentPage.next(this.currentPage.value + 1);
    }
  }
}
