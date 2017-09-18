import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent } from '../tasks/tasks.component';
import { DashboardComponent} from '../dashboard/dashboard.component';
import { TaskComponent} from '../tasks/task/task.component';


const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'task/:id', component: TaskComponent},
    { path: 'tasks',     component: TasksComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports:[ RouterModule]

})
export class AppRoutingModule { }




/*

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}*/
