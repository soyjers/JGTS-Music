import { Routes } from '@angular/router';
import { IniciarSesionComponent } from '../app/components/iniciar-sesion/iniciar-sesion.component'
import { RegistrarseComponent } from "./components/registrarse/registrarse.component"
import { PrincipalComponent } from './components/principal/principal.component';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { ArtistasZoomComponent } from './components/artistas-zoom/artistas-zoom.component';
import { MisFavoritosComponent } from './components/mis-favoritos/mis-favoritos.component'
import { error404Component } from './components/error404/error404.component';
import { autenticacionGuard } from './guards/autenticacion.guard';
import { CancionesComponent } from './components/canciones/canciones.component'
import { AlbumesZoomComponent } from './components/albumes-zoom/albumes-zoom.component'
import { AlbumesComponent } from './components/albumes/albumes.component'
import { NavComponent } from './components/nav/nav.component';
import { AgregarArtistaComponent } from './components/Admin/agregar-artista/agregar-artista.component';
import { AgregarAlbumComponent } from './components/Admin/agregar-album/agregar-album.component';
import { AgregarCancionComponent } from './components/Admin/agregar-cancion/agregar-cancion.component';




export const routes: Routes = [
    {path: "", component: IniciarSesionComponent },
    {path: "registrarse", component: RegistrarseComponent},
    { path: 'principal', component: PrincipalComponent },
    { path: 'nav', component: NavComponent },
    { path: "AdminAddSong", component: AgregarCancionComponent },
    { path: "AdminAddArtist", component: AgregarArtistaComponent },
    { path: "AdminAddAlbum", component: AgregarAlbumComponent },
    { path: "MisFavoritos", component: MisFavoritosComponent },
    { path: "canciones", component: CancionesComponent },
    { path: "albumes", component: AlbumesComponent },
    { path: "Artistas", component: ArtistasComponent},
    { path: "zoomArtista", component: ArtistasZoomComponent},
    { path: "zoom/:idAlbum", component: AlbumesZoomComponent },
    { path: 'principal', component: PrincipalComponent },
    { path: "AdminAddContent", canMatch: [autenticacionGuard], component: AgregarCancionComponent },
    { path: "MisFavoritos", component: MisFavoritosComponent },
    { path: "404", component: error404Component },
    // { path: '**', redirectTo: '404', pathMatch: 'full' } ,
    // { path: '**', redirectTo: 'registrarse', pathMatch: 'full' } ,




]

