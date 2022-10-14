import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WeekDayModel} from "../../models/week-day-model";

@Component({
  selector: 'app-days-of-the-week-component',
  templateUrl: './days-of-the-week-component.component.html',
  styleUrls: ['./days-of-the-week-component.component.scss']
})
export class DaysOfTheWeekComponentComponent {
  @Input() week: WeekDayModel = {days_name: ''}
  @Output() removeWeekDay = new EventEmitter<void>()

  onDeleteWeekDay(){
    this.removeWeekDay.emit()
  }
}
