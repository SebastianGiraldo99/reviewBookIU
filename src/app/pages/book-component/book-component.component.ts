import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalbookComponent } from '../modalbook/modalbook.component';
import { BookService } from 'src/app/Services/book.service';
import { IBookDTO } from 'src/app/Interfaces/DTO/BookDTO.interface';
import { ICategoryDTO } from 'src/app/Interfaces/DTO/CategoryDTO.interface';
import { IAutorDTO } from 'src/app/Interfaces/DTO/AutorDTO.inteface';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.css'],
})
export class BookComponentComponent implements OnInit {

  bookSource : IBookDTO[] = [] ;
  autors : IAutorDTO[] =[];
  displayedColumns: string[] = [ 'title','autor','category', 'creationDate','resumen'];
  categories: ICategoryDTO[] = [];

  dataSource = ELEMENT_DATA;

  constructor(private dialog : MatDialog, private service : BookService){
    
  }
  ngOnInit(): void {
    this.service.getBooks().subscribe(resp =>{
      console.log(resp);
      this.bookSource = resp;
    });

    this.service.getCategories().subscribe(cat =>{
      this.categories = cat;
    });
    this.service.getAutors().subscribe(res =>{
      this.autors = res;
    })
  }
  removeData(){
    //TODO
  }

  addData(){
    const dialogRef = this.dialog.open(ModalbookComponent,
      {
        width : '20%',
        data: { categories: this.categories, autors : this.autors}
      });
  }
}
