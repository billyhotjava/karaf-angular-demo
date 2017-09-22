import { Injectable } from '@angular/core';
import { Task } from './task';
import {Http , Response} from "@angular/http";
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class TaskService {

    constructor(private http: Http) { }

    // api: GET  API_URL/tasks/
    public getTasks(): Observable<Task[]>{

        console.log("invoke getTasks() === taskservice:");
        return this.http
            .get(API_URL + '/tasks')
            .map(response => {
                const tasks = response.json();
                return tasks.map((task) => new Task(task));
            })
            .catch(this.handleError);

    }


    // api: GET  API_URL/tasks/{id}
    getTask(id: number): Observable<Task>{
        console.log("invoke getTask() === taskservice:");
        return this.http.get(API_URL + '/tasks/' + id)
            .map(response => {
                return new Task(response.json())
            })
    }

    // api: POST API_URL/tasks/
    addTask(task: Task): Observable<Task>{
        return this.http
            .post(API_URL + '/tasks', task)
            .map(response => {
                return new Task(response.json());
            })
            .catch(this.handleError);
    }


    // api: POST API_URL/tasks/{id}
    deleteTask(id: Number): Observable<null>{
        return this.http
            .delete(API_URL + '/tasks/' + id)
            .map(response => null)
            .catch(this.handleError);
    }

    // api: POST API_URL/tasks/{id}
    updateTask(task: Task): Observable<Task>{
        return this.http
            .put(API_URL + '/tasks/' + task.id, task)
            .map(response => {
                return new Task(response.json());
            })
            .catch(this.handleError);

    }

    private handleError (error: Response | any) {
        console.error('TaskService::handleError', error);
        return Observable.throw(error);
    }
}
