import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IAutorDTO } from 'src/app/Interfaces/DTO/AutorDTO.inteface';
import { IBookDTO } from 'src/app/Interfaces/DTO/BookDTO.interface';
import { ICategoryDTO } from 'src/app/Interfaces/DTO/CategoryDTO.interface';
import { IReviewBookDTO } from 'src/app/Interfaces/DTO/ReviewDTO.interface';
import { BookService } from 'src/app/Services/book.service';
import { ReviewService } from 'src/app/Services/review.service';

@Component({
  selector: 'app-modal-review',
  templateUrl: './modal-review.component.html',
  styleUrls: ['./modal-review.component.css']
})
export class ModalReviewComponent implements OnInit {
  categories: ICategoryDTO[] = [];
  autors : IAutorDTO[] = [];
  books : IBookDTO[]=[];

  reviewbookData: any = {
    bookId: '',
    title: '',
    qualification: '',
    description: '',
    creationDate: '',
    userId: '',
  };

constructor(public dialogRef: MatDialogRef<ModalReviewComponent>,
  private bookService:BookService,
  private reviewService: ReviewService,
  private router :Router,
  @Inject(MAT_DIALOG_DATA) public data: any){

}

  ngOnInit(): void {
    this.books = this.data.books;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveBook(){
    let book : IReviewBookDTO = {
      BookId : this.reviewbookData.bookId,
      Title : this.reviewbookData.title,
      Qualification : this.reviewbookData.qualification,
      Description : this.reviewbookData.description,
      Status : 1,
      CreationDate : new Date(),
      UserId : 1,
    }

    this.reviewService.saveReview(book).subscribe(res =>{
      location.reload();
    });
  }

}
