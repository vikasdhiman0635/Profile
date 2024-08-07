import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home: string = "active";

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  github() {
    console.log("not working");
    window.open("https://github.com/vikasdhiman0635/");
  }

}
