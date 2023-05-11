import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  edu:any;
  edu2:any;
  edu3:any;
  constructor(private datosEducacion:EducacionService){ }
  ngOnInit():void {
    this.datosEducacion.obtenerDatos().subscribe(data =>{
      console.log("Datos "+ JSON.stringify(data))
      this.edu = data[0];
      this.edu2 = data[1];
      this.edu3 = data[2];
    });
  }
}
