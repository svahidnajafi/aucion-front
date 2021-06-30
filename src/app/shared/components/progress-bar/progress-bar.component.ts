import { Component, OnInit } from '@angular/core';
import {NgProgress} from 'ngx-progressbar';
import {ProgressBarService} from '../../services/progress-bar.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  constructor(private progress: NgProgress, private progressBar: ProgressBarService) { }

  ngOnInit(): void {
    this.progressBar.progressRef = this.progress.ref('progressBar');
  }

}
