import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APIResponse } from '../models/apiResonse';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getUsersList(ordering: string, search?: string) : Observable<APIResponse<User>> {
    let params = new HttpParams().set('ordering', ordering);

    if(search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this.http.get<APIResponse<User>>(`${environment.BASE_URL}/users`,
    {
      params: params,
    });
  }
}
