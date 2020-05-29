//new module created to follow best practices concerning module structure
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerComponent } from './loading-spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LoadingSpinnerComponent,
    CommonModule
  ],
  declarations: [
    LoadingSpinnerComponent
  ],
  providers: []
})
export class SharedModule {};
