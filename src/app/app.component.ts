import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { UserdataService } from './userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _dialog: MatDialog, private _usrSrv: UserdataService) {

  }

  ngOnInit(): void {
    if (!this.logueado()) {
      let formInicio = this._dialog.open(InicioSesionComponent, {
        closeOnNavigation: false,
        disableClose: true,
         backdropClass: 'backdropBackground' // This is the "wanted" line
      })
    } else {
      this._usrSrv.getAllData();
    }
  }



  logueado(): boolean {
    let logado = false;
    if (this._usrSrv.getUserName() !== "" && this._usrSrv.getUserName() !== null) {
      logado = true;
    } else { logado = false }
    return logado;
  }
  title = 'datosUsuario';
}
