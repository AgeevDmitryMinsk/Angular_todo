import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  todoTitle: string = '';
  newDay: string = ''

  @Output() submit_from_todo_input = new EventEmitter<string>()
  @Output() submit_from_todo_input2 = new EventEmitter<string>()
  constructor() {
  }

  ngOnInit(): void {
  }

  submitTodo1(title: string) {
    this.todoTitle = title
  }

  submitTodo2() {
    this.submit_from_todo_input.emit(this.todoTitle)
    this.todoTitle = ``
  }

  submitTodo3(newDay:string){
    this.newDay = newDay
  }

  submitTodo4(){
    this.submit_from_todo_input2.emit(this.newDay)
    this.newDay = ''
  }

}
