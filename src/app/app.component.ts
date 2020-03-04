import { Component } from '@angular/core';
// import { AlertService } from './_alert';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // constructor(protected alterService: AlertService) { }

  title = 'todoList';

   todos = []
   todo;

  add(todo){

    let id = this.todos.length;
    this.todos.push({id:++id, name: this.todo, isDone: false})
    this.todo = '';

  }
  remove(id){
    this.todos = this.todos.filter(function(el){
      return el.id !== id;
    })
  }


  check(id){
    console.log('hi');
    console.log(id);

    for(const todo of this.todos){
      console.log(todo.id);

      if(todo.id == id){
        todo.isDone = !todo.isDone
      }
    }
  }

}
