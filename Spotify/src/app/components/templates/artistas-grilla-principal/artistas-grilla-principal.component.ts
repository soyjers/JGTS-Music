import { CommonModule  } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-artistas-grilla-principal',
  standalone: true,
  imports: [CommonModule,
  RouterLink],
  templateUrl: './artistas-grilla-principal.component.html',
  styleUrl: './artistas-grilla-principal.component.css'
})
export class ArtistasGrillaPrincipalComponent {

  @Input() imagenArtista!: string
  @Input() cantante!: string 
  @Input() artistaDataID!: string
}
