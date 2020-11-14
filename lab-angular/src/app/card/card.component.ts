import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public imgPerfil = "https://www.fujideia.com.br/fuji/papw/fujioka.png";
  public usuario = "Rodrigo Fujioka";
  public exibe = false;

  carros: any[] = [
    {
      "name": "BMW",
      "age": 12,
      "color": 'blue'
    },
    {
      "name": "Ford",
      "age": 15,
      "color": 'yellow'
    },
    {
      "name": "Suzuki",
      "age": 18,
      "color": 'silver'
    },
    {
      "name": "MG Hector",
      "age": 14,
      "color": 'red'
    },
    {
      "name": "Jaguar",
      "age": 8,
      "color": 'green'
    }
  ];

  
  public lista = [
    {
      id: '1',
      year:'2007',
      cert: 'SCJP 1.5',
    },
    {
      id: '2',
      year:'2009',
      cert: 'SCWCD 1.5',
    },
    {
      id: '3',
      year:'2011',
      cert: 'CTFL',
    }];

  constructor() { }

  ngOnInit(): void {
  }

public exibePerfil(){
  this.exibe = !this.exibe;
}



}
