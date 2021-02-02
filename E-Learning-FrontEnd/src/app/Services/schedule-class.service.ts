import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleServiceService {
  
  url="http://localhost:7070/schedule/add";
  constructor(private Http:HttpClient) { }

  public Addschedule(schedule):Observable<any>
  {
    return this.Http.post(this.url,schedule);
  }

  public getClass(id:any ,subject:any):Observable<any>
  {
    return this.Http.get("http://localhost:7070/schedule/find/"+id+"/"+subject);
  }
  public viewClass(id:any):Observable<any>
  {
    return this.Http.get("http://localhost:7070/schedule/view/"+id);
  }
  public deleteClass(schedule_id:any):Observable<any>
  {
    return this.Http.delete("http://localhost:7070/schedule/delete/"+schedule_id);
  }
  public updateClass(schedule_id:any,schedule):Observable<any>
  {
    return this.Http.put("http://localhost:7070/schedule/update/"+schedule_id,schedule);
  }
  public getScheduleById(schedule_id):Observable<any>
  {
    return this.Http.get("http://localhost:7070/schedule/"+schedule_id);
  }
  public getAllSchedule():Observable<any>
  {
    return this.Http.get("http://localhost:7070/schedule/");
  }
  public getAllScheduleByClassname(classname:any):Observable<any>
  {
    return this.Http.get("http://localhost:7070/schedule/findByClassname/"+classname);
  }
  public getAllScheduleBySubject(subject:any):Observable<any>
  {
    return this.Http.get("http://localhost:7070/schedule/findBySubject/"+subject);
  }

}
