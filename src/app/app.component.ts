import { TesteService } from './services/teste.service';
import { MovieService } from './movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    // this.testeService.badRequest().subscribe();
    this.testeService.forbidden().subscribe();
    // this.testeService.notFound().subscribe();
    // this.testeService.unauthorized().subscribe();
  }


  title = 'app';

  constructor(
    private movieService: MovieService,
    private testeService: TesteService
  ) {
  }

  private buscarFilmes(): void {
    this.movieService.buscarFilmes(1).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
      },
      () => {
      }
    )
  }
}
