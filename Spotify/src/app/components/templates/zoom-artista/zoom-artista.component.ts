import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-artistas-zoom',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './zoom-artista.component.html',
  styleUrl: './zoom-artista.component.css'
})
export class ArtistasZoomComponent {

}