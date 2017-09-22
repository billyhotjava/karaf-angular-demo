import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from './task';
import { TaskService } from './task.service';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css'],
    providers: [TaskService]
})
export class TasksComponent implements OnInit {
    tasks: Task[];
    selectedTask: Task;

    constructor(
        private router: Router,
        private taskService: TaskService
    ) { }

    getTasks(){
        console.log("start to do get all tasks from task component=====")
        this.taskService.getTasks().subscribe(
            (tasks) => {
                this.tasks = tasks;
            }
        );
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

    deleteTask(task){
        if (confirm("Are you sure you want to delete " + task.name + "?")) {
            var index = this.tasks.indexOf(task);
            this.tasks.splice(index, 1);

            this.taskService.deleteTask(task.id)
                .subscribe(null,
                    err => {
                        alert("Could not delete task.");
                        // Revert the view back to its original state
                        this.tasks.splice(index, 0, task);
                    });
        }
    }

}
