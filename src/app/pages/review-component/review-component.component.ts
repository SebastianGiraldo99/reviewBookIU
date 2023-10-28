import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReviewService } from 'src/app/Services/review.service';
import { ModalReviewComponent } from '../modal-review/modal-review.component';
import { IReviewBookDTO } from 'src/app/Interfaces/DTO/ReviewDTO.interface';
import { ICategoryDTO } from 'src/app/Interfaces/DTO/CategoryDTO.interface';
import { BookService } from 'src/app/Services/book.service';
import { IAutorDTO } from 'src/app/Interfaces/DTO/AutorDTO.inteface';
import { IBookDTO } from 'src/app/Interfaces/DTO/BookDTO.interface';

@Component({
  selector: 'app-review-component',
  templateUrl: './review-component.component.html',
  styleUrls: ['./review-component.component.css']
})
export class ReviewComponentComponent  implements OnInit{
  categories: ICategoryDTO[] = [];
  reviewSource : IReviewBookDTO[] = [] ;
  books : IBookDTO[] = [];
 
  displayedColumns: string[] = [ 'book','title','autor', 'calification','description', 'user'];
 constructor(private dialog : MatDialog, private service : ReviewService, private bookService : BookService){

 }
  ngOnInit(): void {
    this.service.getReviews().subscribe(resp =>{
      console.log(resp);
      this.reviewSource = resp;
    });

    this.bookService.getCategories().subscribe(cat =>{
      this.categories = cat;
    });
    this.bookService.getBooks().subscribe(res =>{
      this.books = res;
    })
    
  }

  addData(){
    const dialogRef = this.dialog.open(ModalReviewComponent,
      {
        width : '20%',
        data: { categories: this.categories, books : this.books}
      });
  }
}
