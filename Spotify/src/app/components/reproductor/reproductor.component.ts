import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2'
import { JgtsAPIService } from "../service/jgts-api.service";

@Component({
  selector: 'app-reproductor',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './reproductor.component.html',
  styleUrl: './reproductor.component.css'
})
export class ReproductorComponent {
  private audio!: HTMLAudioElement;
  song: any; 
  iconPlay: string = "assets/img/reproductor/play.svg"
  imgCancion: string = "assets/img/reproductor/IconDisc.png"
  artista: string = "Sin Definir"
  nombreCancion: string = "Esperando para Reproducir"
  dataSongs: any = [
    { src: "assets/songs/eternity-extended-mix.mp3", img: "assets/img/songs/anyma.jpg", nombre: "Eternity", artista: "Anyma" }
  ]

  constructor(private favoritePlaylistService: JgtsAPIService) {
    this.audio = new Audio();
  }


  audioCancion(url: string = this.dataSongs[0].src): void {
    console.log(this.audio.paused);
    
    if (this.audio.paused) {
      this.audio.src = url;
      this.audio.play();
      this.iconPlay = "assets/img/reproductor/pause.svg"
    } else {
      this.iconPlay= "assets/img/reproductor/play.svg"
      this.audio.pause();
    }


    this.imgCancion = this.dataSongs[0].img
    this.artista = this.dataSongs[0].artista
    this.nombreCancion = this.dataSongs[0].nombre
  }

 // Suponiendo que aquí tienes la canción que se muestra en el componente

  toggleFavorite(song: any): void {
    if (song.isFavorite) {
      this.removeSongFromFavorites(song);
    } else {
      this.addSongToFavorites(song);
    }
  }

  addSongToFavorites(song: any): void {
    this.favoritePlaylistService.postfavorite(song).subscribe(
      response => {
        song.isFavorite = true;
        console.log('Canción agregada a la playlist de favoritos:', response);
      },
      error => {
        console.error('Error al agregar la canción a la playlist de favoritos:', error);
      }
    );
  }

  removeSongFromFavorites(song: any): void {
    this.favoritePlaylistService.deletefavorite(song).subscribe(
      response => {
        song.isFavorite = false;
        console.log('Canción eliminada de la playlist de favoritos:', response);
      },
      error => {
        console.error('Error al eliminar la canción de la playlist de favoritos:', error);
      }
    );
  }



}
