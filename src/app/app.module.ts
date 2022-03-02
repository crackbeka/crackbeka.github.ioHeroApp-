import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { PagenotloadedComponent } from './pagenotloaded/pagenotloaded.component';
import { HerodetailsComponent } from './herodetails/herodetails.component';

@NgModule({
  declarations: [
    PagenotloadedComponent,
    HerodetailsComponent,
    DashboardComponent,
    HeroesComponent,
    AppComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
