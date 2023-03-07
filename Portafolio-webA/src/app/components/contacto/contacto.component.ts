import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{
  contacto:any;
  constructor(private datosPortfolio:PortfolioService){ }
  ngOnInit():void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.contacto=data.contact;
    });
  }

}