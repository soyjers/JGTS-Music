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
  templateUrl: './artistas-zoom.component.html',
  styleUrl: './artistas-zoom.component.css'
})
export class ArtistasZoomComponent {

}