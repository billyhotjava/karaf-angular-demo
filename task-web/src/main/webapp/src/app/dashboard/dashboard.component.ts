import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../tasks/task';
import {TaskService} from '../tasks/task.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [TaskService]
})
export class DashboardComponent implements OnInit {
    tasks: Task[];

    constructor(private taskService: TaskService) { }

    ngOnInit(): void {
        console.log("start to do get=====")
        this.taskService.getTasks().subscribe(
            (tasks) => {
                this.tasks = tasks;
                console.log("get all tasks:" + tasks)
            }
        );
    }

}
