import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, take } from 'rxjs';

@Component({
  selector: 'app-marvel-header',
  templateUrl: './marvel-header.component.html',
  styleUrls: ['./marvel-header.component.scss']
})
export class MarvelHeaderComponent implements OnInit {

  public logoImage ='../../assets/logo.png';
  public form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly heroesService: HeroesService,
    ) {}

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      search: ['', [Validators.required, Validators.minLength(2)]]
    });

    this.form.get('search')?.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe(() => {
      this.submit();
    })
  }

  public submit(): void {
    this.heroesService.searchHeroes(this.form.get('search')?.value).pipe(take(1)).subscribe((response) => {
      if (this.form.valid) {
        this.heroesService.addHeroes(response);
      }
    })
  }

}
