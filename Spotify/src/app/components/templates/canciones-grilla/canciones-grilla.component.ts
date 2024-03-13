import { CommonModule } from '@angular/common';
import { Component, Input,NgModule } from '@angular/core';
import {  JgtsAPIService } from "../../service/jgts-api.service";
import Swal from 'sweetalert2'
import { MatDialog } from '@angular/material/dialog';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-canciones-grilla',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './canciones-grilla.component.html',
  styleUrl: './canciones-grilla.component.css'
})
export class CancionesGrillaComponent {
  @Input() imagenCancion!: string
  @Input() cancion!: string | number
  @Input() cantante!: string | number
  @Input() album!: string

  constructor(public dialog: MatDialog, private musicService: JgtsAPIService) { }

}















          // Swal.fire({
          //   title: "cancion agregada a tu playlist correctamente! ",
          //   icon: "success"
          // });
