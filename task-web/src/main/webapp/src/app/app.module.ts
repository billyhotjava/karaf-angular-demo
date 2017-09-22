import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule} from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskService} from './tasks/task.service';


@NgModule({
    declarations: [
        AppComponent,
        TasksComponent,
        TaskComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule
    ],
    providers: [TaskService],
    bootstrap: [AppComponent]
})
export class AppModule { }
