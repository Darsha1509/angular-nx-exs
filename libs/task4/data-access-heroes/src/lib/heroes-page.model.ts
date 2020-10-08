import { Hero } from './hero.model';

export interface HeroPage {
  perPage: number;
  lastPage: number;
  currentPage: number;
  total: number;
  data: Hero[];
}
