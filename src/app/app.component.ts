import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { HttpService } from './http.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Proyecto Pasteles';
  tasks: any
  newTask: any
  updTask: any
  listaTareas: boolean = false
  soloUno : boolean = false
  editComentario: any
  detComentario: any
  detTask: any
  info: any
  MuestraDetalle:boolean=false
  

constructor(private _httpService: HttpService) { }
  ngOnInit() {
    this.newTask = { nombrePastelero: "", fotoPastelero: "" }
    this.updTask = { puntuacion: "", comentario: "" }
    this.editComentario = {id:"",  puntuacion: "", comentario: "" }
    this.getTasksFromService()
  }

  onSubmit() {
    const creaPastel = this._httpService.addTask(this.newTask)
    creaPastel.subscribe((data) => {

      console.log(data)
      this.getTasksFromService()
  });
  }
  
  onSubmitDet(id: String) {
    this.detTask = { fotoPastelero: ""}
    this.detComentario = {id:"",  puntuacion: "", comentario: "" }
    this.getTasksById(id)
   
  }
                                                                                                                                                                       
getTasksFromService() {
  let observable = this._httpService.getTasks();
  observable.subscribe(data => {
    console.log("Got our tasks1!", data)
    this.tasks = data;
    this.listaTareas = true;
    this.soloUno = false;
    
  });
}

getTasksById(id: String) {
  let observable = this._httpService.getTasksById(id);
  observable.subscribe(data => {
    // console.log("Got our tasks2!", data)
    this.soloUno = true;
    this.info = data
    // this.getPromedio()
    this.MuestraDetalle=true
  });
}

// getPromedio() {
  
//   let suma = 0;
//   let promedio = 0;
//   console.log("largo array : " + this.info.comentarioPastel.length);
  
//   for(let x = 0; x < this.info.comentarioPastel.length; x++){
//     console.log("puntuacion : " + this.info.puntuacion[x]);
    
//     suma += this.info.puntuacion[x];
//     console.log("suma: " + suma);
//   }
  
//   if(suma > 0) {
//     promedio = suma / this.info.length;
//   }
  
//   console.log("promedio: " + promedio);
  
// }

}
