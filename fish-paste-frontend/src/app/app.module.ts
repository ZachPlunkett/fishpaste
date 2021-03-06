import { FlaskBackendService } from './flask-backend.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageInputFormComponent } from './image-input-form/image-input-form.component';

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      ImageInputFormComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [FlaskBackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
