import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tyreindex',
  templateUrl: './tyreindex.component.html',
  styleUrls: ['./tyreindex.component.css']
})
export class TyreindexComponent implements OnInit {

  constructor(private router: Router) { }
  cometome(){
    console.log("coming to gohome");
    this.router.navigate(["tyreindex"]);
  }

  ngOnInit() {
  }
  

}
