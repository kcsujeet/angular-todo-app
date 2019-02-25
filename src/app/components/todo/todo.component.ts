import { Component, OnInit } from "@angular/core";
import { Todo } from "../../models/Todo";
import { typeWithParameters } from "@angular/compiler/src/render3/util";
import {TodoService} from '../../services/todo.service'
@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  todo: Todo[];
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodo().subscribe(todos => {
      this.todo = todos
    })
  }
  deleteTodo(todo){
    //delete from ui
    this.todo = this.todo.filter(t => t.id !== todo.id)
    //delete from server
    this.todoService.deleteTodo(todo).subscribe()
  }
  addTodo(todo){
    this.todoService.addTodo(todo).subscribe(todo => 
      this.todo.push(todo))
  }
}
