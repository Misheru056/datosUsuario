import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {
  usuario: string = "";
  constructor(private _userSrv: UserdataService, private _fb: FormBuilder, private _dialog: MatDialog) { }
  formUserName: FormGroup = this._fb.group({
    nombre: ['', Validators.required]
  })
  ngOnInit(): void {
  }
  iniciarSesion() {
    if (this.formUserName.valid) {
      this._userSrv.setUserName(this.formUserName.value.nombre);
      this._userSrv.getAllData();
      this.closeModal();
    }
  }
  closeModal() {
    this._dialog.closeAll()
  }
}
