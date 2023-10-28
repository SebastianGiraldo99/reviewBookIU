import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBookDTO } from '../Interfaces/DTO/BookDTO.interface';
import { IBookModel } from '../Interfaces/BookModel.interface';
import { ICategoryDTO } from '../Interfaces/DTO/CategoryDTO.interface';
import { IAutorDTO } from '../Interfaces/DTO/AutorDTO.inteface';
 // Asegúrate de importar tu archivo de configuración de URLs

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private baseUrl = environment.base_url+environment.bookEndpoint;

  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBookDTO[]> {
    return this.http.get<IBookDTO[]>(`${this.baseUrl}/GetAllBooks`);
  }

  getBook(id: number): Observable<IBookDTO> {
    return this.http.get<IBookDTO>(`${this.baseUrl}/GetBook?id=${id}`);
  }

  saveBook(book: IBookModel): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/SaveBook`, book);
  }

  deleteBook(id: number): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/DeleteBook?id=${id}`, {});
  }
  getCategories(): Observable<ICategoryDTO[]> {
    return this.http.get<ICategoryDTO[]>(`${this.baseUrl}/GetCategories`);
  }
  getAutors(): Observable<IAutorDTO[]> {
    return this.http.get<IAutorDTO[]>(`${this.baseUrl}/GetCategories`);
  }
}