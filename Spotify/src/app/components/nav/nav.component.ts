import { CommonModule } from '@angular/common';
import { Component, NgModule, inject,Output,EventEmitter } from '@angular/core';
import { RouterLink, Router, Route } from '@angular/router';
import { JgtsAPIService } from "../service/jgts-api.service";
import { FormControl, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CancionesComponent } from '../canciones/canciones.component';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    CancionesComponent,
    ReactiveFormsModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})


export class NavComponent {

  private spotifyService = inject(JgtsAPIService)
  inputEmail = new FormControl
  inputPassword = new FormControl
  ingreso: boolean = false


  // ngOnInit(){
  //   this.ingreso =this.spotifyService.estaLogueado()
  //      }

  cerrarSesion(): void {
    sessionStorage.removeItem('token');
    location.reload()
  }

  constructor(private router: Router,private http : HttpClient) {
    this.busqueda.valueChanges.subscribe(term => {
      this.cancionesFiltradas = this.canciones.filter(cancion =>
        cancion.toLowerCase().includes(term.toLowerCase())
        )
    })
  }


  ngOnInit() {
    if (sessionStorage.getItem("token") != null) {
      this.router.navigate(['/registrarse'])
    }
  }



canciones: string[] = [
  'El Hokage',
  'Canción 2',
  'Canción 3',
  'Canción 4',
  'Canción 5',
]
busqueda: FormControl = new FormControl('')

cancionesFiltradas: string[] = []

redirigirACancion(cancion: string) {
  this.router.navigate(['/cancion', cancion])
}

}


