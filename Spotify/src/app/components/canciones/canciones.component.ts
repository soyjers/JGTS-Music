import { Component, inject, signal,EventEmitter,Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,RouterLink } from '@angular/router';
import { JgtsAPIService } from '../service/jgts-api.service';
import { CancionesGrillaComponent } from '../templates/canciones-grilla/canciones-grilla.component';
@Component({
  selector: 'app-canciones',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    CancionesGrillaComponent,

  ],
  templateUrl: './canciones.component.html',
  styleUrl: './canciones.component.css'
})
export class CancionesComponent {



  constructor(private router: Router) { }


  cancionesData = signal<any>([])
  private cancionesService = inject(JgtsAPIService)

  ngOnInit() {
    this.cancionesService.getCanciones().subscribe({
      next: (canciones) => {
        this.cancionesData.set(canciones)
        console.log(this.cancionesData());

      },
      error: (err) => {
        console.log(err);
      }
    })




  }

}



