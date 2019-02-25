import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { from, Observable } from "rxjs";
import { Todo } from "../models/Todo";

const htttpOptions ={
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}
@Injectable({
  providedIn: "root"
})
export class TodoService {
  todosURL: string = "https://jsonplaceholder.typicode.com/todos";
  todosLimit = "?_limit=5";

  constructor(private http: HttpClient) {}
  
  //Get Todos
  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosURL}${this.todosLimit}`);
  }

  //Update Todos
  toggleCompleted(todo):Observable<any>{
    const url = `${this.todosURL}/${todo.id}`
    return this.http.put(url, todo, htttpOptions)
  }

  //delete todos
  deleteTodo(todo):Observable<Todo>{
    const url = `${this.todosURL}/${todo.id}`
    return this.http.delete<Todo>(url, htttpOptions)

  }

  addTodo(todo):Observable<Todo>{
    return this.http.post<Todo>(this.todosURL, todo, htttpOptions)
  }
}
