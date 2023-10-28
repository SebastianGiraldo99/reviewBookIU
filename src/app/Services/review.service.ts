import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IReviewBookDTO } from '../Interfaces/DTO/ReviewDTO.interface';
import { IReviewBookModel } from '../Interfaces/ReviewModel.interface';


@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private baseUrl = environment.base_url+environment.reviewEndPoint; // Reemplaza con tu URL de API

  constructor(private http: HttpClient) {}

  getReviews(): Observable<IReviewBookDTO[]> {
    return this.http.get<IReviewBookDTO[]>(`${this.baseUrl}/GetAllReviews`);
  }

  getReview(id: number): Observable<IReviewBookDTO> {
    return this.http.get<IReviewBookDTO>(`${this.baseUrl}/GetReview?id=${id}`);
  }

  saveReview(review: IReviewBookModel): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/SaveReview`, review);
  }

  deleteReview(id: number): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/DeleteReview?id=${id}`, {});
  }
}