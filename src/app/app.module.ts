import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignedPipe } from './core/pipes/signed.pipe';
import { AbsPipe } from './core/pipes/abs.pipe';
import { FilterPipe } from './core/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SignedPipe,
    AbsPipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
