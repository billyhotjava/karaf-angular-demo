import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
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
    task: Task = new Task();
    form: FormGroup;
    title: string;

    taskName: AbstractControl;
    taskStatus: AbstractControl;

    statusItems= [
        {value: 'true', viewValue: 'Finished'},
        {value: 'false', viewValue: 'On Progress'},
    ];

    constructor(
        formBuilder: FormBuilder,
        private taskService: TaskService,
        private location: Location,
        private router: Router,
        private route: ActivatedRoute,
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
        this.route.paramMap
            .switchMap((params: ParamMap) => this.taskService.getTask(+params.get('id')))
            .subscribe(task => this.task = task);



        var id = this.route.params.subscribe(params => {
            var id = params['id'];
            this.title = id ? 'Edit User' : 'New User';
            console.log("title is:" + this.title);
            console.log("init phase: id is--" + id);
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
        var result, taskValue = this.form.value;
        console.log("task id:" + this.task.id);
        this.taskName = this.form.controls['name'];
        this.taskStatus= this.form.controls['status'];
        if (this.task.id){
            var newTask = new Task();
            newTask.id = this.task.id;
            newTask.name = this.taskName.value.toString();
            newTask.status = this.taskStatus.value.toString();
            result = this.taskService.updateTask(newTask);
            //result = this.taskService.updateTask(taskValue);
        } else {
            result = this.taskService.addTask(taskValue);
        }

        result.subscribe(data => this.router.navigate(['tasks']));
    }

}
