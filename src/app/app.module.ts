import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { DashboardComponent } from './screens/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    // DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
