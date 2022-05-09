import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdeModule } from './ide/ide.module';
import { SharedModule } from './ide/shared/shared.module';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular modules
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // IDE Modules
    IdeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
