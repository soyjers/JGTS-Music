import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { JgtsAPIService } from '../../service/jgts-api.service';

@Component({
  selector: 'app-agregar-artista',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './agregar-artista.component.html',
  styleUrl: './agregar-artista.component.css'
})
export class AgregarArtistaComponent {
  formSong: FormGroup;
  formAlbum: FormGroup;
  formArtist: FormGroup;

  listaArtistas: any = []
  listaAlbum: any = []


  regexNumericos = /^[0-9]+$/
  regexUrl = /^https?:\/\/\w+(\.\w+)+(\/[a-zA-Z0-9_.~-]+)*(\/[a-zA-Z0-9_.~-]+\.[a-zA-Z]+)?$/

  private JgtsService = inject(JgtsAPIService)

  constructor(private fb: FormBuilder, private apiService: JgtsAPIService) {
    this.formSong = this.fb.group({
      name: ['', Validators.required],
      image: [''],
      file: [''],
      year: ['', Validators.required],
      artistId: ['', Validators.required],
      albumId: [''],
    });

    this.formAlbum = this.fb.group({
      albumId: [''],
      year: [''],
      artistId: [''],
      image: [''],
    });

    this.formArtist = this.fb.group({
      artistId: ['', Validators.required],
      image: [''],

    });

  }

  ngOnInit() {
    this.findArtists()
  }

  /* parte para poder guardar la ruta de la imagen y el audio de una cancion en mongo */
  addFileSong(event: any, tipo: string = "img", formulario: string = "audio") {
    switch (tipo) {
      case "img":
        if (event.target.files.length > 0) {
          const fileImg = event.target.files[0];
          if (formulario == "audio") {
            this.formSong.get("image")!.setValue(fileImg);
          } else if (formulario == "album") {
            this.formAlbum.get("image")!.setValue(fileImg);
          } else if (formulario == "artista") {
            this.formArtist.get("image")!.setValue(fileImg);
          }
        }
        break;
      default:
        if (event.target.files.length > 0) {
          const fileSong = event.target.files[0];
          if (this.formSong) {
            this.formSong.get("file")!.setValue(fileSong);
          }
          break;
        }

    }

  }

  /* ------------------------------------------------------------------------------------------------------------------------- */

  submitArtistForm(): void {
    if (this.formSong.value) {
      console.log("Entro a crear")


      let { artistId, image } = this.formArtist.value
      const formDataArtist = new FormData()

      formDataArtist.append("artistId", artistId)
      formDataArtist.append("image", image)



      this.JgtsService.postArtista(formDataArtist).subscribe(
        respuestaAPI => {
          alert('Artista guardado correctamente');

          //this.formSong.reset(); // Limpiar el formulario después de guardar
        },
        (error) => {
          console.error('Error al guardar el artista:', error);
          alert('Error al guardar el artista');
        }
      );
    } else {
      alert('Por favor, complete todos los campos obligatorios.');
    }
  }


  findArtists() {
    this.JgtsService.getArtistas().subscribe(
      respuestaAPI => {
        this.listaArtistas = respuestaAPI
        //this.formSong.reset(); // Limpiar el formulario después de guardar
      },
      (error) => {
        console.error('Error al guardar el artista:', error);
        alert('Error al guardar el artista');
      }
    );
  }

  findAlbumXArtist(event: Event) {
    let valueIdArtist = event.target as HTMLInputElement
    this.JgtsService.getAlbumXArtist(valueIdArtist.value).subscribe(
      respuestaAPI => {
        this.listaAlbum = respuestaAPI
        //this.formSong.reset(); // Limpiar el formulario después de guardar
      },
      (error) => {
        console.error('Error al guardar el artista:', error);
        alert('Error al guardar el artista');
      }
    );
  }

}