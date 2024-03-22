import { CommonModule } from '@angular/common';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-zoom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zoom.component.html',
  styleUrl: './zoom.component.css'
})
export class ZoomComponent {
  @Input() imagenCancion!: string
  @Input() cantante!: string | number
  @Input() nombreCancion!: string
  @Input() archivoAudio!: string
  iconPlay: string = "assets/img/reproductor/play.svg"

  private audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio();
  }

  toggleAudio(url: string): void {
    url = "http://localhost:4001/" + url
    if (this.audio.paused || this.audio.src !== url) {
      this.audio.src = url;
      this.audio.play();
      this.iconPlay = "assets/img/reproductor/pause.svg"
    } else {
      this.iconPlay= "assets/img/reproductor/play.svg"
      this.audio.pause();
    }
  }
}
