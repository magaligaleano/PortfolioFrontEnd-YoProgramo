import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/servicios/proyecto.service';



@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  proyecto1:any;
  proyecto2:any;
  proyecto3:any;
  proyecto4:any;
  proyecto5:any;
  proyecto6:any;
  constructor(private datosProyecto:ProyectoService){ }
  
  ngOnInit():void {
    this.datosProyecto.getProyecto().subscribe(data =>{
      console.log("Datos "+ JSON.stringify(data))
      this.proyecto1 = data[0];
      this.proyecto2 = data[1];
      this.proyecto3 = data[2];
      this.proyecto4 = data[3];
      this.proyecto5 = data[4];
      this.proyecto6 = data[5];
      
    });
  
}
}
