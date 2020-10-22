import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  rodape = 'AULA ANGULAR 2020';

  constructor() { }

  ngOnInit(): void {
  }

}
