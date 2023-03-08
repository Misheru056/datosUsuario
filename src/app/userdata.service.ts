import { Injectable } from '@angular/core';
import { DatosTabla } from './datos-tabla.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserdataService {
  url: string = "http://localhost:3000/informacion?creador=";
  constructor(private http: HttpClient) { }
  data: DatosTabla[] = [];

  setUserName(nombre: string): void {
    localStorage.setItem('userName', nombre);
  }
  getUserName(): string | null {
    return localStorage.getItem('userName');
  }
  close() {
    localStorage.clear()
  }
  getAllData() {
    return this.http.get<DatosTabla[]>(this.url + this.getUserName())
  }
  getData(): DatosTabla[] {
    return this.data;
  }
}
