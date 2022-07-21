import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../pages/user/user.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly URL = 'https://randomuser.me/api/?results=12';

  constructor(private httpClient: HttpClient) {}

  getUser(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.URL);
  }
}
