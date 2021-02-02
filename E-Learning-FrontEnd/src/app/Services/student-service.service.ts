import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { schedule } from '../teacher-schedule-class/Model/schedule';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  
  url="http://localhost:7070/student";
  constructor(private Http:HttpClient) { }

  public Addstudent(student):Observable<any>
  {
    return this.Http.post(this.url,student);
  }
  public LoginStudent(student:any):Observable<any>
  {
    return this.Http.post("http://localhost:7070/student/login",student);
  }

  getAllClasses():Observable<schedule[]>
  {
    return this.Http.get<schedule[]>("http://localhost:7070/schedule/find"+"/products");
  }
  public getStudents():Observable<any>
  {
    return this.Http.get("http://localhost:7070/student/");
  }
  public deleteStudents(id:any):Observable<any>
  {
    return this.Http.delete("http://localhost:7070/student/delete/"+id);
  }


}




