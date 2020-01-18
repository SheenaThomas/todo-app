import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHomeView=true;

  homeClick(){
    this.isHomeView=true;
  }
  tasksClick(){
    this.isHomeView=false;
  }
}