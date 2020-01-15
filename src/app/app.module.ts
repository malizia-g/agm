import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core'; //importa questa libreria
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAFlR30N1paHO3FsTgoPOetrw2P1xZV028'}), 
    // Imposta qui le tue api key
    //AgmCoreModule.forRoot({apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
