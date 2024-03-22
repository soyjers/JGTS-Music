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
    CancionesComponent
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

  constructor(private router: Router,private http : HttpClient) { }
  ngOnInit() {
    if (sessionStorage.getItem("token") != null) {
      this.router.navigate(['/registrarse'])
    }
  }





}
