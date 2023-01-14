import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SportGameListComponent } from './sport-game-list/sport-game-list.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SportGameListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	MaterialModule,
	HttpClientModule,
	RouterModule.forRoot([
		{ path: '', component: SportGameListComponent, pathMatch: 'full' }
	]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
