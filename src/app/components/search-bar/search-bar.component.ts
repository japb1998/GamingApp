import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
search:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log(this.search)
    this.router.navigate(['search',form.value.search])
  }
}
