import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }
