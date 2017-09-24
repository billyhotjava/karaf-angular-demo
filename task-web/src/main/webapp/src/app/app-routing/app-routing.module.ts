import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent } from '../tasks/tasks.component';
import { DashboardComponent} from '../dashboard/dashboard.component';
import { TaskComponent} from '../tasks/task/task.component';
import {NotFoundComponent} from "../share/not-found/not-found.component";


const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'task/:id', component: TaskComponent},
    { path: 'tasks',     component: TasksComponent, pathMatch: 'full'},
    { path: 'tasks/new', component: TaskComponent},
    { path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports:[ RouterModule]

})
export class AppRoutingModule { }


