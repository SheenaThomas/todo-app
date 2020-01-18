import { Component, OnInit } from '@angular/core';

interface LabeledValue {
  name: string;
  pendingTasks: number;
  completedTasks: number;
  totalTasks: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  value: LabeledValue = {
    name: 'Jibin',
    pendingTasks: 3,
    completedTasks: 2,
    totalTasks: 5
  }
  constructor() { }

  ngOnInit() {
  }

}
