import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidebarComponent } from './sidebar.component';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
