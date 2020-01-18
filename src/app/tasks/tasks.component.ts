import { Component, OnInit } from '@angular/core';
interface labelvalue {
  name: string,
  priority: string,
  status: string,
  startDate: number,
  dueDate: number,
  comments: string
}
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  value: labelvalue[] = [{
    name: 'Jason',
    priority: 'first',
    status: 'not completed',
    startDate: 20 - 11 - 2019,
    dueDate: 25 - 12 - 2019,
    comments: 'very bad'
  },
  {
    name: 'Jason',
    priority: 'first',
    status: 'not completed',
    startDate: 20 - 11 - 2019,
    dueDate: 25 - 12 - 2019,
    comments: 'very bad'
  }];


  constructor() { }

  ngOnInit() {

  }

}
