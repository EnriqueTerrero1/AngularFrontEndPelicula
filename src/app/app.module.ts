import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import{MatIconModule} from '@angular/material/icon';
import{MatButtonModule} from '@angular/material/button';
import { RatingComponent } from './utilidades/rating/rating.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActoresComponent } from './actores/crear-actores/crear-actores.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { IndiceCineComponent } from './cines/indice-cine/indice-cine.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { EditarCinesComponent } from './cines/editar-cines/editar-cines.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component'
import { ReactiveFormsModule } from '@angular/forms';
import { FormulariosGenerosComponent } from './generos/formularios-generos/formularios-generos.component';
import { FiltroPeliculasComponent } from './peliculas/filtro-peliculas/filtro-peliculas.component';
import { FormularioActoresComponent } from './actores/formulario-actores/formulario-actores.component';
import { InputImgComponent } from './utilidades/input-img/input-img.component';
import { InputMarkdownComponent } from './utilidades/input-markdown/input-markdown.component';
import{MarkdownModule}from 'ngx-markdown';
import { FormulariosCineComponent } from './cines/formularios-cine/formularios-cine.component';
import{LeafletModule}from '@asymmetrik/ngx-leaflet';
import { MapaComponent } from './utilidades/mapa/mapa.component';
import { FormularioPeliculaComponent } from './peliculas/formulario-pelicula/formulario-pelicula.component';
import { FormsModule } from '@angular/forms';
import { SelectorMultipleComponent } from './utilidades/selector-multiple/selector-multiple.component';
import { AutocompleteActoresComponent } from './actores/autocomplete-actores/autocomplete-actores.component';
import { MostrarErroresComponent } from './utilidades/mostrar-errores/mostrar-errores.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DetallePeliculaComponent } from './peliculas/detalle-pelicula/detalle-pelicula.component';
import { AutorizadoComponent } from './seguridad/autorizado/autorizado.component';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { FormularioAutenticacionComponent } from './seguridad/formulario-autenticacion/formulario-autenticacion.component';
import { SeguridadInterceptorService } from './seguridad/seguridad-interceptor.service';
import { IndiceUsuariosComponent } from './seguridad/indice-usuarios/indice-usuarios.component';
@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    ListadoGenericoComponent,
    MenuComponent,
    RatingComponent,
    LandingPageComponent,
    IndiceGenerosComponent,
    CrearGeneroComponent,
    IndiceActoresComponent,
    CrearActoresComponent,
    CrearPeliculaComponent,
    CrearCineComponent,
    IndiceCineComponent,
    EditarActorComponent,
    EditarGeneroComponent,
    EditarCinesComponent,
    EditarPeliculaComponent,
    FormulariosGenerosComponent,
    FiltroPeliculasComponent,
    FormularioActoresComponent,
    InputImgComponent,
    InputMarkdownComponent,
    FormulariosCineComponent,
    MapaComponent,
    FormularioPeliculaComponent,
    SelectorMultipleComponent,
    AutocompleteActoresComponent,
    MostrarErroresComponent,
    DetallePeliculaComponent,
    AutorizadoComponent,
    LoginComponent,
    RegistroComponent,
    FormularioAutenticacionComponent,
    IndiceUsuariosComponent,

    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot(),
    LeafletModule,
    FormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
    
    
    
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:SeguridadInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
