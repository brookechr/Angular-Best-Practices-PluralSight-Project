import {Component, Input} from '@angular/core';

@Component({
  selector: 'wb-loading-spinner', //changed selector name to include prefix wb for whitebeards
  template: '<img *ngIf="loading" src="../../assets/images/loading.gif" />',
})
export class LoadingSpinnerComponent { //renamed from LoadingComponent to match file name
  @Input() loading: boolean
}
