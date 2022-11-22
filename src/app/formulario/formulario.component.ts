import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service'; 

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
@Input() id_pas:string="";
  calificacion:string="";
  comentario:string=""
  constructor(private _httpService: HttpService) { }

  ngOnInit(): void {
  }

  
puntuacion() {
  console.log(this.id_pas);
  console.log(this.calificacion);
  console.log(this.comentario);

  let pastel:any={"puntuacion":this.calificacion,"comentario":this.comentario}
  
  const UpdateOne = this._httpService.updateTask(this.id_pas,pastel)
  UpdateOne.subscribe((data:any) => {

    console.log(data)
  this.calificacion=""
  this.comentario=""
    });
}
}
