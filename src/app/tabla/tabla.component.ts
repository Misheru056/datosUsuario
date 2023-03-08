import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserdataService } from '../userdata.service';
import { InicioSesionComponent } from '../inicio-sesion/inicio-sesion.component';
import { MatDialog } from '@angular/material/dialog';
import { DatosTabla } from '../datos-tabla.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})

export class TablaComponent implements AfterViewInit {
  nombre: string = "";
  displayedColumns = [ 'nombre', 'item', 'cantidad', 'categoria'];
  dataSource = new MatTableDataSource<DatosTabla>();

  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;


  constructor(private _usrSrv: UserdataService, private _dialog: MatDialog) {
    this._usrSrv.getAllData().subscribe(r => {
      this.dataSource.data = r;
    })
  }

  ngAfterViewInit(): void {
    this._usrSrv.getAllData().subscribe(r => {
      this.dataSource.data = r;
    })
    this.dataSource.paginator = this.paginator;
  }


  datosUsuario() {
    return this._usrSrv.getData();
  }

  nombreUser = (): string => {
    return this.nombre;
  };

  logueado(): boolean {
    let logado = false;

    if (this._usrSrv.getUserName() !== "" && this._usrSrv.getUserName() !== null) {
      logado = true;
      this.nombre = this._usrSrv.getUserName()!;
    } else { logado = false }
    return logado;

  }

  cerrarSesion() {
    this._usrSrv.close();
    let formInicio = this._dialog.open(InicioSesionComponent, {
      closeOnNavigation: false,
      disableClose: true
    });
  }
  applyFilter(event: Event) {
    const filterValue = (<HTMLInputElement>event.target).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
