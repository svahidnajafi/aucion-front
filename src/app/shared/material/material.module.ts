import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatList, MatListModule} from '@angular/material/list';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatRippleModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatChipsModule} from '@angular/material/chips';
import {MaterialPersianDateAdapter, PERSIAN_DATE_FORMATS} from './material.persian-date.adapter';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatGridList} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';



const MaterialComponents = [MatButtonModule, MatCardModule, MatInputModule, MatSlideToggleModule,
  MatFormFieldModule, MatPaginatorModule, MatTableModule, MatDialogModule, MatExpansionModule,
  MatToolbarModule, MatListModule, MatRippleModule, MatMenuModule, MatTabsModule, MatSidenavModule,
  MatProgressBarModule, MatBadgeModule, MatProgressSpinnerModule, MatTooltipModule, MatChipsModule,
  MatSnackBarModule];

@NgModule({
  providers: [
    { provide: DateAdapter, useClass: MaterialPersianDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS }
  ],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
