import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { TestComponent } from './test/test.component';
import { CourseService } from './courses.service';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
