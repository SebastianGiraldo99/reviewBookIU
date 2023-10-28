import { Component, Injectable, Input, OnInit, } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IBookModel } from 'src/app/Interfaces/BookModel.interface';
import { ICategoryDTO } from 'src/app/Interfaces/DTO/CategoryDTO.interface';
import { BookService } from 'src/app/Services/book.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IAutorDTO } from 'src/app/Interfaces/DTO/AutorDTO.inteface';


@Component({
  selector: 'app-modalbook',
  templateUrl: './modalbook.component.html',
  styleUrls: ['./modalbook.component.css']
})
export class ModalbookComponent implements OnInit {
  selectedValue = '';
 
  bookData: any = {
      nombre: '',
      autor: '',
      isbn: '',
      categoria: '',
      fechaPublicacion: '',
      resumen: '',
    };
  
  saveText!: string ;
  categories: ICategoryDTO[] = [];
  autors : IAutorDTO[] = [];

  constructor(public dialogRef: MatDialogRef<ModalbookComponent>,
    private bookService:BookService,
    private router :Router,
    @Inject(MAT_DIALOG_DATA) public data: any){

  }
  ngOnInit(): void {
    this.categories = this.data.categories;
    this.autors = this.data.autors
  }
  

  onNoClick(): void {
    this.dialogRef.close();
  }
  saveBook(){
    let book : IBookModel = {
      bookName : this.bookData.nombre,
      isbn : this.bookData.isbn,
      datePublish : this.bookData.fechaPublicacion,
      dateCreation : new Date(),
      status : 1,
      categoryId : this.bookData.categoria,
      autorId : 1,
      summary : this.bookData.resumen
    }

    this.bookService.saveBook(book).subscribe(res =>{
      this.saveText = res;
      location.reload();
    });
  }

}
