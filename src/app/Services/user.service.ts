import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserDTO } from '../Interfaces/DTO/UserDTO.iterface';
import { IUserModel } from '../Interfaces/UserModel.interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = environment.base_url+environment.userEndpoint;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUserDTO[]> {
    return this.http.get<IUserDTO[]>(`${this.baseUrl}/GetAllUsers`);
  }

  getUser(id: number): Observable<IUserDTO> {
    return this.http.get<IUserDTO>(`${this.baseUrl}/GetUser?id=${id}`);
  }

  saveUser(user: IUserModel): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/SaveUser`, user);
  }

  deleteUser(id: number): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/DeleteUser?id=${id}`, {});
  }
}