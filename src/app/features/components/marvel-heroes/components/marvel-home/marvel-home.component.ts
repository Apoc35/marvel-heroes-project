import { take } from 'rxjs';
import { HeroesService } from './../../../../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvel-home',
  templateUrl: './marvel-home.component.html',
  styleUrls: ['./marvel-home.component.css']
})
export class MarvelHomeComponent implements OnInit {

  constructor(
    private readonly heroesService: HeroesService,
  ){}

  ngOnInit(): void {
    this.heroesService.getHeroes().pipe(take(1)).subscribe((response) => {
      console.log(response);
    })
  }

}
