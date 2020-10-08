import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './task4-feature-heroes-routing.module';

import { SwHeroesComponent } from './sw-heroes/sw-heroes.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [SwHeroesComponent],
  exports: [SwHeroesComponent],
})
export class Task4FeatureHeroesModule {}
