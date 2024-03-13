import { Component, HostListener, Injector, OnInit, effect, signal, untracked, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BarralateralComponent } from './components/barralateral/barralateral.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component'
import { ReproductorComponent } from './components/reproductor/reproductor.component'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Conditional } from '@angular/compiler';
import { JgtsAPIService} from "../app/components/service/jgts-api.service";
import { SpotifyAPIService } from './components/service/spotify-api.service';
import { FormsModule, FormControl } from '@angular/forms';
import { CancionesComponent } from './components/canciones/canciones.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    BarralateralComponent,
    NavComponent,
    FooterComponent,
    ReproductorComponent,
    HttpClientModule,
    FormsModule,
    CancionesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent implements OnInit {
  title = 'JGTS';
  session!: boolean
  ngOnInit(): void {
    this.session = (sessionStorage.getItem("token") != null) ? true : false
    this.metodoinactividad();
  }

  public actividad = signal(true);

  private time: any

  // @HostListener('mousemove', ['$event'])
  // public enviarmouse(btn: any) {
  //   console.log("se ejecuta el mosue");
  //   this.actividad.set(true);
  // }


  constructor(private inject: Injector, private loginservice: SpotifyAPIService, private jgts : JgtsAPIService,private http : HttpClient) { }



  private metodoinactividad() {
    effect(() => {
      // console.log("la actividad cambia",this.actividad())


      if (this.actividad()) {
        // console.log("la actividad cambia",this.actividad())

        if (this.time) {
          clearTimeout(this.time)
        }
        this.time = setTimeout(() => {
          alert("se cerrara el reproducor por inactividad")
          window.close();
        }, 7200000);

        untracked(() => {
          this.actividad.set(false);
        });

      }

    }, { injector: this.inject });
  }




  logout() {
    this.loginservice.logout();
  }






}
