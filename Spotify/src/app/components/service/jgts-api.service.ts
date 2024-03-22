import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class JgtsAPIService {

    private http = inject(HttpClient)
    private urlApi: string = "http://localhost:4001/api"


    constructor() { }

    /* Artistas */

    getArtistas() {
        const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzZiYWIyZjBiMDgwMzQ3ZWJkODIzOSIsInJvbCI6ImFkbWluIiwiaWF0IjoxNzA3NTI0OTAzLCJleHAiOjE3MDc1Mjg1MDN9.n7XqQr9aFmm_mOu-cKROiwxj0zjYJYlUR5Moq0VqJ_o')
        return this.http.get(`${this.urlApi}/find-artists`, { headers })
    }

    getArtista(idArtista: string|null) {
        return this.http.get(`${this.urlApi}/find-artist/${idArtista}`)
    }

    postArtista(dataArtista: any) {
        return this.http.post(`${this.urlApi}/create-artist`, dataArtista);
    }



    // deleteArtista(idArtista: string) {
    //     return this.http.delete(`${this.urlApi}/eliminar-album/${idArtista}`)
    // }

    // putArtista(idArtista: string, dataArtista: any) {
    //     return this.http.put(`${this.urlApi}/delete-artist/${idArtista}`, dataArtista)



    /* Canciones */
    getCanciones() {
        const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzZiYWIyZjBiMDgwMzQ3ZWJkODIzOSIsInJvbCI6ImFkbWluIiwiaWF0IjoxNzA3NTI0OTAzLCJleHAiOjE3MDc1Mjg1MDN9.n7XqQr9aFmm_mOu-cKROiwxj0zjYJYlUR5Moq0VqJ_o')
        return this.http.get(`${this.urlApi}/find-songs`, { headers })
    }
    // getCancionesPorAlbum() {
    //     const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzZiYWIyZjBiMDgwMzQ3ZWJkODIzOSIsInJvbCI6ImFkbWluIiwiaWF0IjoxNzA3NTI0OTAzLCJleHAiOjE3MDc1Mjg1MDN9.n7XqQr9aFmm_mOu-cKROiwxj0zjYJYlUR5Moq0VqJ_o')
    //     return this.http.get(`${this.urlApi}/find-song-album/:idAlbum`, { headers })
    // }
    getCancionPorAlbum(albumId: any) {
        return this.http.get(`${this.urlApi}/find-song-album/${albumId}`)
    }

    getCancion(idCancion: string) {
        return this.http.get(`${this.urlApi}/find-song${idCancion}`)
    }


    postCancion(dataCancion: any) {
        return this.http.post(`${this.urlApi}/create-song`, dataCancion);
    }

    deleteCancion(idCancion: string) {
        return this.http.delete(`${this.urlApi}/delete-song/${idCancion}`)
    }

    putCancion(idCancion: string, dataCancion: any) {
        return this.http.put(`${this.urlApi}/update-song/${idCancion}`, dataCancion)
    }




    /* Albumes */
    getAlbumes() {
        const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzZiYWIyZjBiMDgwMzQ3ZWJkODIzOSIsInJvbCI6ImFkbWluIiwiaWF0IjoxNzA3NTI0OTAzLCJleHAiOjE3MDc1Mjg1MDN9.n7XqQr9aFmm_mOu-cKROiwxj0zjYJYlUR5Moq0VqJ_o')
        return this.http.get(`${this.urlApi}/find-albums`, { headers })
    }

    getAlbum(idAlbum: string | null) {
        return this.http.get(`${this.urlApi}/find-album/${idAlbum}`);
    }

    // postArt(dataAlbum: any) {
    getAlbumXArtist(idArtist: string | null) {
        return this.http.get(`${this.urlApi}/find-album-x-artist/${idArtist}`);
    }


    postAlbum(dataAlbum: any) {
        return this.http.post(`${this.urlApi}/create-album`, dataAlbum);
    }

    deleteaAlbum(iDfavorite: string) {
        return this.http.delete(`${this.urlApi}/eliminar-album/${iDfavorite}`)
    }


    getCancionPorArtista(artistId: any) {
        return this.http.get(`${this.urlApi}/find-song-album/${artistId}`)
    }
    // private headerCustom = HttpHeaders}

    // // constructor(private httpClient: HttpClient){}

    // // searchTrack({q: string}: songMo)
    // putAlbum(iDfavorite: string, dataAlbum: any) {
    //     return this.http.put(`${this.urlApi}/actualizar-album/${iDfavorite}`, dataAlbum)
    // }





    /* favoritos */

    getfavorites() {
        const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzZiYWIyZjBiMDgwMzQ3ZWJkODIzOSIsInJvbCI6ImFkbWluIiwiaWF0IjoxNzA3NTI0OTAzLCJleHAiOjE3MDc1Mjg1MDN9.n7XqQr9aFmm_mOu-cKROiwxj0zjYJYlUR5Moq0VqJ_o')
        return this.http.get(`${this.urlApi}/find-favorites`, { headers })
    }

    getfavorite(favoriteId: string | null) {
        return this.http.get(`${this.urlApi}/find-favorite/${favoriteId}`)
    }

    postfavorite(datafavorito: any) {
        return this.http.post(`${this.urlApi}/create-favorite`, datafavorito)
    }

    putfavorite(favoriteId: string, datafavorito: any) {
        return this.http.put(`${this.urlApi}/update-user/${favoriteId}`, datafavorito)
    }

    deletefavorite(favoriteId: string) {
        return this.http.delete(`${this.urlApi}/delete-favorite/${favoriteId}`)
    }








    // addToFavorites(userId: string, songId: string): Observable<any> {
    //   return this.http.post<any>(`${this.urlApi}/add-to-favorites/${userId}/${songId}`, {});
    // }





  }

