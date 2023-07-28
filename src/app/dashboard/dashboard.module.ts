import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
