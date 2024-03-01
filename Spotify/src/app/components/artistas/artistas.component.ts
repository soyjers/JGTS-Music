import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { JgtsAPIService } from '../service/jgts-api.service';
import { ArtistasGrillaComponent } from '../templates/artistas-grilla/artistas-grilla.component';

@Component({
  selector: 'app-artistas',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ArtistasGrillaComponent
  ],
  templateUrl: './artistas.component.html',
  styleUrl: './artistas.component.css'
})
export class ArtistasComponent {




  constructor(private router: Router) { }
  artistasData = signal<any>([])
  private artistaService = inject(JgtsAPIService)

  albumesData = signal<any>([])
  private albumesService = inject(JgtsAPIService)

  ngOnInit() {

    if (sessionStorage.getItem("token") == null) {
      this.router.navigate(['/'])
    }

    this.artistaService.getArtistas().subscribe({
      next: (artistas) => {
        this.artistasData.set(artistas)
        console.log(this.artistasData());

      },
      error: (err) => {
        console.log(err);
      }
    })

    this.albumesService.getAlbumes().subscribe({
      next: (albumes) => {
        this.albumesData.set(albumes)
        console.log(this.albumesData());

      },
      error: (err) => {
        console.log(err);
      }
    })


  }
}
