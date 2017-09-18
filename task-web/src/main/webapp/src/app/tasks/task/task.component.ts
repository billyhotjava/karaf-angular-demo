import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Task } from '../task';
import { TaskService} from '../task.service';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
    task: Task;

    constructor(
        private taskService: TaskService,
        private location: Location,
        private activeRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.activeRoute.paramMap
            .switchMap((params: ParamMap) => this.taskService.getTask(+params.get('id')))
            .subscribe(task => this.task = task);
    }

    goBack(): void{
        this.location.back();
    }
}
