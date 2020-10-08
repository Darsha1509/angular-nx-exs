import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwHeroesComponent } from './sw-heroes.component';

describe('SwHeroesComponent', () => {
  let component: SwHeroesComponent;
  let fixture: ComponentFixture<SwHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
