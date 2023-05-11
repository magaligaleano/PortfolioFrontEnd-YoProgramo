import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit{
  aptitudes:any;
  constructor(private datosPortfolio:PortfolioService){ }
  ngOnInit():void {
    
  }
}
