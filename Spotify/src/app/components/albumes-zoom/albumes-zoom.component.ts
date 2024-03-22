import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JgtsAPIService } from '../service/jgts-api.service';
import { ZoomComponent } from '../templates/zoom/zoom.component';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albumes-zoom',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ZoomComponent
  ],
  templateUrl: './albumes-zoom.component.html',
  styleUrl: './albumes-zoom.component.css'
})
export class AlbumesZoomComponent {
  idAlbumUrl: string | null
  nombreAlbum!: string
  imgAlbum!: string
  cantante!: string
  albumesData: any
  servicioAPI = inject(JgtsAPIService)
  cancionesData:any = []

  constructor(private paramsRuta: ActivatedRoute) {

    this.idAlbumUrl = this.paramsRuta.snapshot.paramMap.get('idAlbum')
    console.log(this.idAlbumUrl);

  }


  ngOnInit() {

    this.servicioAPI.getAlbum(this.idAlbumUrl).subscribe({
      next: (album: any) => {
        this.albumesData = album

        this.nombreAlbum = album.albumId
        this.imgAlbum = album.image


        this.servicioAPI.getArtista(album.artistId).subscribe({
          next: (dataArtista: any) => {
            
            this.cantante = dataArtista.artistId
            console.log(dataArtista.artistId);
            


            this.servicioAPI.getCancionPorAlbum(this.idAlbumUrl).subscribe({
              next: (canciones) => {
                console.log("********************");
                console.log(canciones);
                console.log("********************");
                this.cancionesData = canciones

              },
              error: (err) => {
                console.log(err);
              }
            })



          }, error: (error) => {
            console.log(error)
          }
        })



      },
      error: (err) => {
        console.log(err);
      }
    })





  }

}
