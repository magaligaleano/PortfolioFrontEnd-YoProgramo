import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit{
  acercaDe:any;
  constructor(private datosPersona:PortfolioService){ }
  ngOnInit():void {
    this.datosPersona.getPersona().subscribe(data =>{
      console.log("Datos "+ JSON.stringify(data))
      this.acercaDe = data[0];
    });
  }
}
