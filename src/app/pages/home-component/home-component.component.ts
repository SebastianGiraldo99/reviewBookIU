import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit{
  hide = true;
  sessionStore = true;

  constructor (private router: Router){}
  

  ngOnInit(): void {


  }
  login(){
    if(this.sessionStore ){
      this.router.navigate(['/books']);
    }
  }

  register(){
    console.log("REgistrate perrra")
  }
  

}

