import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from "@angular/material/toolbar";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { UserdataService } from './userdata.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import { TablaComponent } from './tabla/tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    TablaComponent,
  ]
  ,
  imports: [
    BrowserModule,
    BrowserAnimationsModule, MatToolbarModule, MatTableModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, HttpClientModule,MatPaginatorModule
  ],
  providers: [UserdataService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
