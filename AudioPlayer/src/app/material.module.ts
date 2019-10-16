import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material Imports
import {MatButtonModule, MatListModule, MatSliderModule, MatIconModule, MatToolbarModule, MatCardModule} from '@angular/material';

const modules = [
  MatButtonModule, MatListModule, MatSliderModule, MatIconModule, MatToolbarModule, MatCardModule
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modules
  ],
  exports: [modules]
})
export class MaterialModule { }
