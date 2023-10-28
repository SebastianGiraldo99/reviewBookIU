import { ChangeDetectionStrategy } from '@angular/compiler';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css'],
})
export class UserComponentComponent implements OnInit {

  constructor(private router: Router, private cdr : ChangeDetectorRef){  }

  pageUrl:any[] = [
  {page:'index', name:'Home'},
  {page:'books', name:'Books'},
  {page:'reviews', name:'BooksReviews'},
  {page:'profile', name:'Profile'},

  ];

  ngOnInit(){

  }

  redirectTo (event : any){

    this.router.navigate([`/${event.page}`]);
    return
  }
}
