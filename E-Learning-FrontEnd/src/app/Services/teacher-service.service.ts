import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherServiceService {
  
  url="http://localhost:7070/teacher";
  constructor(private Http:HttpClient) { }

  public Addteacher(teacher):Observable<any>
  {
    return this.Http.post(this.url,teacher);
  }
  
  public LoginTeacher(teacher:any):Observable<any>
  {
    return this.Http.post("http://localhost:7070/teacher/login",teacher);
  }
  public getTeachers():Observable<any>
  {
    return this.Http.get("http://localhost:7070/teacher/");
  }
  public deleteTeacher(id:any):Observable<any>
  {
    return this.Http.delete("http://localhost:7070/teacher/delete/"+id);
  }

  

}
