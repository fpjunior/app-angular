import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { ResponseUsers, ResponseCreate, RequestCreate } from './user.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "https://reqres.in/api/users";

  constructor(private https: HttpClient) { }

  getUsers(): Observable<ResponseUsers> {
    return this.https.get<ResponseUsers>(this.url);

  }
  createUser(request: RequestCreate): Observable<RResponseCreate> {
    return this.https.post<RequestCreate>(this.url, request);
  }
  }

