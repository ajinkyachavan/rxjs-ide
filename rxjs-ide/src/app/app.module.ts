import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular modules
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Custom modules
    MaterialModule,

    // Code modules
    SharedModule,
    HeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
