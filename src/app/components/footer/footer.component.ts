import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/servicios/contacto.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  footer:any;
  constructor(private datosContacto:ContactoService){ }
  ngOnInit():void {
    this.datosContacto.getContacto().subscribe(data => {
      console.log("Datos "+ JSON.stringify(data))
      this.footer = data[0];
    })
    
  }
}
