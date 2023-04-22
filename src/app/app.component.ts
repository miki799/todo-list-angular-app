import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedTask = {};

  receiveSelectedTask(taskNum: object) {
    console.log("task received")
    this.selectedTask = taskNum;
  }

  closeTask() {
    this.selectedTask = {};
  }
}
