import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule} from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskService} from './tasks/task.service';
import { MaterializeModule } from 'angular2-materialize';
import { NotFoundComponent } from './share/not-found/not-found.component';


@NgModule({
    declarations: [
        AppComponent,
        TasksComponent,
        TaskComponent,
        DashboardComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        MaterializeModule,
        ReactiveFormsModule
    ],
    providers: [TaskService],
    bootstrap: [AppComponent]
})
export class AppModule { }
