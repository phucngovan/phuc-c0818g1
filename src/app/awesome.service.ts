import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Awesome} from './model/awesome.model';

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:3000/awesomes';
  public getAwesomes() {
    return this.http.get<Awesome[]>(this.baseUrl);
  }

  public getAwesomeById(id: String) {
    return this.http.get<Awesome>(this.baseUrl + '/' + id);
  }

  public addAwesome(awesome: Awesome) {
    return this.http.post<Awesome>(this.baseUrl, awesome);
  }
  public deleteAwesome(awesome) {
    return this.http.delete<Awesome>(this.baseUrl + '/' + awesome.id);
  }
  public editAwesome(awesome: Awesome) {
    return this.http.put<Awesome>(this.baseUrl + '/' + awesome.id, awesome);
  }

}
