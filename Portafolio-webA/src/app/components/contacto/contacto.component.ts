import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/servicios/contacto.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{
  contacto:any;
  constructor(private datosContacto:ContactoService){ }
  ngOnInit():void {
  this.datosContacto.getContacto().subscribe(data =>{
    console.log("Datos "+ JSON.stringify(data))
    this.contacto = data[0];
  })
  }

}