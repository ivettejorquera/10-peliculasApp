import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public texto: string = '';
  public movies: Movie[] = [];

  constructor( private activatedRoute: ActivatedRoute,
               private pelicasServices: PeliculasService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      console.log(params.text);
      this.texto = params.text;
      this.pelicasServices.buscarPeliculas( params.text ).subscribe( movies => {
        console.log(movies);
        this.movies = movies;
      });
    });
  }

}
