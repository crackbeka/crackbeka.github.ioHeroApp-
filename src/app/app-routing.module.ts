import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HerodetailsComponent } from './herodetails/herodetails.component';
import { HeroesComponent } from './heroes/heroes.component';
import { PagenotloadedComponent } from './pagenotloaded/pagenotloaded.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },

  {
    path: 'herodetails/:id',
    component: HerodetailsComponent,
  },

  {
    path: 'heroes',
    component: HeroesComponent,
  },

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },

  {
    path: '**',
    component: PagenotloadedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
