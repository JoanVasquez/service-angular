import { Component, OnInit } from '@angular/core';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.readTodo().subscribe(
      resp => console.log(resp)
    );
  }
}
