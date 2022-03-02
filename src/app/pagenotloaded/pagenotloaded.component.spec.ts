import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotloadedComponent } from './pagenotloaded.component';

describe('PagenotloadedComponent', () => {
  let component: PagenotloadedComponent;
  let fixture: ComponentFixture<PagenotloadedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagenotloadedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenotloadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
