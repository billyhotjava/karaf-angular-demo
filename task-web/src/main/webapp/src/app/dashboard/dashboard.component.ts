import { Component, OnInit } from '@angular/core';
import {Task} from '../tasks/task';
import {TaskService} from '../tasks/task.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    tasks: Task[] = [];

    constructor(private taskService: TaskService) { }

    ngOnInit(): void {
        this.taskService.getTasks()
            .then(tasks => this.tasks = tasks.slice(1, 5));
    }

}
