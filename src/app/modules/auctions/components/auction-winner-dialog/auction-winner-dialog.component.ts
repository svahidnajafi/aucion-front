import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-auction-winner-dialog',
  templateUrl: './auction-winner-dialog.component.html',
  styleUrls: ['./auction-winner-dialog.component.scss']
})
export class AuctionWinnerDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AuctionWinnerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
