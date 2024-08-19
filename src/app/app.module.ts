import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { OverdueHighlightDirective } from './directives/overdue-highlight.directive';
import { HoverEffectDirective } from './directives/hover-effect.directive';
import { TaskStatusFilterPipe } from './pipes/task-status-filter.pipe';
import { TaskDetailComponent } from './task-detail/task-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    OverdueHighlightDirective,
    HoverEffectDirective,
    TaskStatusFilterPipe,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }