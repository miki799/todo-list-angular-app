import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task: any;
  @Output() close = new EventEmitter();

  showDetails: boolean = false;

  closeTask = () => {
    console.log("task closed")
    this.close.emit();
  }

  toggleDetails = () => {
    this.showDetails = !this.showDetails;
  }
}
