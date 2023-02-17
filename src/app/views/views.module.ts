import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ViewsRoutingModule } from './views-routing.module';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchesComponent } from './searches/searches.component';
import { MySearchesComponent } from './my-searches/my-searches.component';
import { MySearchesResultsComponent } from './my-searches-results/my-searches-results.component';



@NgModule({
  declarations: [
    SearchesComponent,
    MySearchesComponent,
    MySearchesResultsComponent
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
