import {Component } from '@angular/core';
import { CourseService } from './courses.service';

@Component({
    selector:'courses',
    template:`
                <h2> {{ "Title :" +  title }}</h2>
                <ul>
                    <li *ngFor="let course of courses"> 
                        {{course}}
                    </li>
                </ul> 
                <img [src]="imageUrl"/>
                <button  (click)="onSave($event)" class="btn btn-primary" [class.active]="isActive" [style.fontSize]="isActive?'20px':'10px'" >{{btnText}}</button>
                <table>
                    <tr>
                        <td [attr.colspan]="colSpan"></td>
                    </tr>
                </table>
             
                `  
                // this is called interpolation {{}} .. directive *ngFor 
})
export class CoursesComponent{
    title  ="List of Courses";
    courses ;
    imageUrl = "";
    isActive = false;
    colSpan =3;
    btnText ="save";
    constructor(service: CourseService){ // dependency injection
       // let service =  new CourseService(); // issue with this is tight coupling and dependency
        this.courses = service.getCoures();
        
    }

    onSave($event){
        this.isActive = !this.isActive;   
        this.btnText = this.isActive?"saved":"save";
        console.log("this bitch is clicked " ,$event);
    }
}