import { Injectable } from '@angular/core';
import { TASKS } from './mock-task';
import { Task } from './task';

@Injectable()
export class TaskService {

    constructor() { }

    getTasks(): Promise<Task[]>{
        return Promise.resolve(TASKS);
    }

    getTasksSlowly(): Promise<Task[]>{
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getTasks()), 2000);
        });
    }

    getTask(id: number): Promise<Task>{
       return this.getTasks().then(tasks => tasks.find(task => task.id === id));
    }

}
