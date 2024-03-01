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

  private audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio();
  }

  toggleAudio(url: string): void {
    url = "http://localhost:4001/" + url
    if (this.audio.paused || this.audio.src !== url) {
      this.audio.src = url;
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }
}
