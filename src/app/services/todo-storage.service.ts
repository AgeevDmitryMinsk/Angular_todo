import { Injectable } from '@angular/core';
import {TodoModel} from "../models/todo-model";
import {WeekDayModel} from "../models/week-day-model";

@Injectable({
  providedIn: 'root'
})
export class TodoStorageService {

  todoItems: TodoModel[] = [
    {title: 'angular introducing'},
    {title: 'angular interface'},
  ];

  days_of_the_week: WeekDayModel[] = [
    {days_name: 'Monday'},
    {days_name: 'Tuesday'},
    {days_name: 'Wednesday'},
    {days_name: 'Thursday'},
    {days_name: 'Friday'},
    {days_name: 'Saturday'},
    {days_name: 'Sunday'},
  ]

  constructor() { }

  addTodo(title:string){
    this.todoItems.push({title: title})
    // this.days_of_the_week.push({days_name: title})
  }

  addNewDay(day:string){
    this.days_of_the_week.push({days_name: day})
  }

  removeTodo(todoItemIndex: number){
    // изменяет содержимое массива, удаляя 1 элемент по индексу todoItemIndex
    this.todoItems.splice(todoItemIndex, 1)
  }

  removeWeekDayStorage(weekDayIndex: number){
    this.days_of_the_week.splice(weekDayIndex, 1)
  }


}
