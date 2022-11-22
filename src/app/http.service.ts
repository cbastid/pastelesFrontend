import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 

  }

  addTask(newtask: String) {
     let URL = `${environment.servicePutNew}/dataNew`
    return this._http.post(URL, newtask)
  }

  updateTask(id:string, pastel: any) {

    // let comen = ({id: coment.id, puntuacion: coment.puntaje, comentario: coment.valor})
    let URL = `${environment.puntuacion}/${id}`
    return this._http.put(URL, pastel)
  }

  getTasksById(id: String) {
    let url = `${environment.serviceGetById}/${id}`;

    return this._http.get(url);
  }

  getTasks() {
    return this._http.get(environment.serviceGetAll);
  }

}
