import { CommonModule } from '@angular/common';

import { Component,Input } from '@angular/core';

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
}