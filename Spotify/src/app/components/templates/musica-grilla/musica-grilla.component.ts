import { CommonModule } from '@angular/common';
import { Component, Input,NgModule } from '@angular/core';
import {  JgtsAPIService } from "../../service/jgts-api.service";
import Swal from 'sweetalert2'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-musica-grilla',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './musica-grilla.component.html',
  styleUrl: './musica-grilla.component.css'
})
export class MusicaGrillaComponent {
  @Input() imagenCancion!: string
  @Input() cancion!: string | number
  @Input() cantante!: string | number
  @Input()album!:string




  constructor( private musicService: JgtsAPIService) { }

}
