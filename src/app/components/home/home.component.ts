import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public contenido1 : string;
  public contenido2 : string;

  constructor() { 
    this.contenido1 = "contenido columna 1";
    this.contenido2 = "contenido columna 2";
  }
  
  ejecutar(data:any){
    console.log(typeof data);
    console.log(data.target.value);
    this.contenido2 = data.target.value;
  }

  ngOnInit(): void {
  }
}
