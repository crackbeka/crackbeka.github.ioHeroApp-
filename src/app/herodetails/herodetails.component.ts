import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero.model';
import { HEROES } from '../mockheroes/heroes.mock';

@Component({
  selector: 'app-herodetails',
  templateUrl: './herodetails.component.html',
  styleUrls: ['./herodetails.component.scss'],
})
export class HerodetailsComponent implements OnInit {
  //
  @Input()
  hero?: Hero;

  //
  constructor(private route: ActivatedRoute) {}

  //
  ngOnInit(): void {
    const heroId = Number(this.route.snapshot.params.id);

    if (heroId) {
      this.hero = HEROES.find(({ id }) => id === heroId);
    }
  }
}
