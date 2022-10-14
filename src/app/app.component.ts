import {Component, OnInit} from '@angular/core';
import {TodoModel} from "./models/todo-model";
import {WeekDayModel} from "./models/week-day-model";
import {TodoStorageService} from "./services/todo-storage.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'todo-app';
  dev_name = 'Ageev Dmitry';

  //пробрасываю данные из services в конструктор компонента AppComponent
  constructor(private todoStorage: TodoStorageService) {
  }

  //делаем инициализацию компонента
  ngOnInit() {
    this.todoItems = this.todoStorage.todoItems
    this.days_of_the_week = this.todoStorage.days_of_the_week

  }

  //перенес данные массива в todo-storage.service.ts, оставив пустой массив здесь
  todoItems: TodoModel[] = [];

  //перенес данные массива в todo-storage.service.ts, оставив пустой массив здесь
  days_of_the_week: WeekDayModel[] = [ ]

  // addTodo(title:string){
  //   this.todoItems.push({title: title})
  //   // this.days_of_the_week.push({days_name: title})
  // }

  //перенес логику добавления title в todo-storage.service.ts, оставив здесь ссылку на this.todoStorage.addTodo
  addTodo(title:string){
    //   this.todoItems.push({title: title})
    this.todoStorage.addTodo(title)
  }


//перенес логику добавления day в todo-storage.service.ts, оставив здесь ссылку на this.todoStorage.addTodo
  addNewDay(day:string){
    this.todoStorage.addNewDay(day)
    // this.days_of_the_week.push({days_name: day})
  }

  removeTodo(index: number) {
    this.todoStorage.removeTodo(index)
  }

  removeWeekDay(index: number){
    this.todoStorage.removeWeekDayStorage(index)
  }
  mixedArr = [this.todoItems, this.days_of_the_week]
}



