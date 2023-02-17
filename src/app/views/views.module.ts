import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ViewsRoutingModule } from './views-routing.module';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchesComponent } from './searches/searches.component';
import { MySearchesComponent } from './my-searches/my-searches.component';



@NgModule({
  declarations: [
    SearchesComponent,
    MySearchesComponent
  ],
  exports: [
    ViewsRoutingModule
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ViewsRoutingModule
  ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewsModule { }
