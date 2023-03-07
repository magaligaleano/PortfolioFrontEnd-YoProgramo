import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  footer:any;
  constructor(private datosPortfolio:PortfolioService){ }
  ngOnInit():void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.footer=data.footer;
    });
  }
}
