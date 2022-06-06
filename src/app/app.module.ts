import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearnTableComponent } from './learn-table/learn-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonConfirmComponent } from './button-confirm/button-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    LearnTableComponent,
    ButtonConfirmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }