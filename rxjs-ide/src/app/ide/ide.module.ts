import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeComponent } from './ide.component';
import { HeaderComponent } from './header/header.component';
import { IdeRoutingModule } from './ide-routing.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { SharedModule } from './shared/shared.module';
import { EditorModule } from './editor/editor.module';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    IdeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IdeRoutingModule,
    SidebarModule,
    EditorModule,
    SharedModule
  ]
})
export class IdeModule { }
