import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysOfTheWeekComponentComponent } from './days-of-the-week-component.component';

describe('DaysOfTheWeekComponentComponent', () => {
  let component: DaysOfTheWeekComponentComponent;
  let fixture: ComponentFixture<DaysOfTheWeekComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaysOfTheWeekComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaysOfTheWeekComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
