import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipeComponent } from './pipe/pipe.component';
import { LetrasPipe } from './pipe/letras.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    LetrasPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
