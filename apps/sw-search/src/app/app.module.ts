import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Task4FeatureHeroesModule } from '@myorg/task4/feature-heroes';
import { Task4DataAccessHeroesModule } from '@myorg/task4/data-access-heroes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    Task4FeatureHeroesModule,
    Task4DataAccessHeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
