import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  //
  loading$ = new BehaviorSubject(true);

  //
  unsubscribe$ = new Subject<void>();

  //
  constructor() {}

  //
  ngOnInit(): void {
    this.loading$.pipe(map((value) => of(value))).subscribe((val) => {
      console.log(val);
    });

    const arr = ['a', 'b', 'c'];
    const sum = arr.reduce((accumulator, current) => {
      return accumulator + current;
    }, '');

    console.log(sum);

    // this.loading$.pipe(t);

    setTimeout(() => {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
    }, 100);

    setTimeout(() => {
      this.loading$.next(false);
    }, 200);

    setTimeout(() => {
      this.loading$.next(false);
    }, 5000);
  }

  //
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
