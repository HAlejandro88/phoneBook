import { AddfriendComponent } from './components/addfriend/addfriend.component';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  entryComponents: [
    AddfriendComponent
  ],
  declarations: [
    AppComponent,
    BookComponent,
    NavComponent,
    AddfriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
