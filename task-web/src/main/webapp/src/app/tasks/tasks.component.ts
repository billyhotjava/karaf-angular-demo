import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from './task';
import { TaskService } from './task.service';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
    tasks: Task[];
    selectedTask: Task;

    constructor(
        private router: Router,
        private taskService: TaskService
    ) { }

    getTasks(){
        this.taskService.getTasks().then(tasks => this.tasks = tasks);
    }

    ngOnInit() {
        this.getTasks();
    }

    onSelect(task: Task) {
        this.selectedTask = task;
    }

    gotoDetail(): void {
        this.router.navigate(['/task', this.selectedTask.id]);
    }

}
