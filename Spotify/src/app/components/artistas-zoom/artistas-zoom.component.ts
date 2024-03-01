import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JgtsAPIService } from '../service/jgts-api.service';
import { ZoomArtistaComponent } from '../templates/zoom-artista/zoom-artista.component';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artistas-zoom',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ZoomArtistaComponent
  ],
  templateUrl: './artistas-zoom.component.html',
  styleUrl: './artistas-zoom.component.css'
})
export class ArtistasZoomComponent {
  idArtistaUrl: string | null
  imgArtista!: string
  cantante!: string
  album!: string

  artistasData: any
  private servicioAPI = inject(JgtsAPIService)
  cancionesData:any = []
  albumesData = signal<any>([])

  constructor(private paramsRuta: ActivatedRoute) {
    this.idArtistaUrl = this.paramsRuta.snapshot.paramMap.get('idArtista')
    console.log(this.idArtistaUrl);
  }



  ngOnInit() {

    this.servicioAPI.getArtista(this.idArtistaUrl).subscribe({
      next: (artista: any) => {
        console.log("TCL: ArtistasZoomComponent -> ngOnInit -> artista", artista)
        this.artistasData = artista


        this.imgArtista = "http://localhost:4001/"+artista.image
        this.cantante = artista.artistId



        this.servicioAPI.getCancionPorArtista(this.idArtistaUrl).subscribe({
          next: (canciones) => {
            console.log("------------------------");
            this.cancionesData = canciones
            console.log(canciones);
            console.log("------------------------");

          },
          error: (err) => {
            console.log(err);
          }
        })
      },
    })

  }
}
