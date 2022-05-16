import { Component, OnInit } from '@angular/core';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-marvel-heroes',
  templateUrl: './marvel-heroes.component.html',
  styleUrls: ['./marvel-heroes.component.css']
})
export class MarvelHeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tiles: Tile[] = [
    {text: 'One', cols: 2, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 2, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 2, color: '#DDBDF1'},
    {text: 'Five', cols: 2, rows: 2, color: 'pink'},
    {text: 'Six', cols: 2, rows: 2, color: 'lightblue'},
  ];

}
