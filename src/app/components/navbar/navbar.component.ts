import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  buscarPelicula(texto: string){

    texto = texto.trim();

    if (texto.length === 0){
      return;
    }
    
    console.log(texto);
    this.router.navigate(['/buscar', texto]);
  }

}
