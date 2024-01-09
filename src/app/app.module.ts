import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EnglishTurkishComponent } from './pages/english-turkish/english-turkish.component';
import { TurkishEnglishComponent } from './pages/turkish-english/turkish-english.component';

@NgModule({
  declarations: [
    AppComponent,
    EnglishTurkishComponent,
    TurkishEnglishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
