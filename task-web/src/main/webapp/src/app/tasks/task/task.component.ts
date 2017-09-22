import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/switchMap';

import { Task } from '../task';
import { TaskService} from '../task.service';
import { BasicValidators} from "../../share/basic-validators";

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
    task: Task;
    form: FormGroup;
    title: string;

    constructor(
        formBuilder: FormBuilder,
        private taskService: TaskService,
        private location: Location,
        private router: Router,
        private activeRoute: ActivatedRoute,
    ) {
        this.form = formBuilder.group({
            name: ['', [
                Validators.required,
                Validators.minLength(3)
            ]],
            status: ['', [
                Validators.required,
            ]]
        });
    }


    ngOnInit() {
        this.activeRoute.paramMap
            .switchMap((params: ParamMap) => this.taskService.getTask(+params.get('id')))
            .subscribe(task => this.task = task);

        var id = this.activeRoute.params.subscribe(params => {
            var id = params['id'];

            this.title = id ? 'Edit User' : 'New User';

            if (!id)
                return;

            this.taskService.getTask(id)
                .subscribe(
                    task => this.task = task,
                    response => {
                        if (response.status == 404) {
                            this.router.navigate(['NotFound']);
                        }
                    });
        });
    }

    goBack(): void{
        this.location.back();
    }

    save() {
        var result,
            taskValue = this.form.value;

        console.log("form value:" + taskValue);
        taskValue.id = this.task.id;
        console.log("update id:" + taskValue.id);
        if (taskValue.id){
            result = this.taskService.updateTask(taskValue);
        } else {
            result = this.taskService.addTask(taskValue);
        }

        result.subscribe(data => this.router.navigate(['tasks']));
    }
}
