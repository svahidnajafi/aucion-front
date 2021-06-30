import { Injectable } from '@angular/core';
import {NgProgress, NgProgressRef} from 'ngx-progressbar';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  progressRef: NgProgressRef;
  constructor() { }

  startLoading(): void {
    this.progressRef.start();
  }

  completeLoading(): void {
    this.progressRef.complete();
  }

  changeProgressColor(): void {
    this.progressRef.setConfig({color: 'blue'});
  }
}
