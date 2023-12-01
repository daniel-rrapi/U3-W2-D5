import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CompletedTasksComponent } from './components/completed-tasks/completed-tasks.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'completedTasks',
    component: CompletedTasksComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompletedTasksComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
