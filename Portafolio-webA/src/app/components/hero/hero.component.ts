import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit{
  hero:any;
  constructor(private datosPortfolio:PortfolioService){ }
  ngOnInit():void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.hero=data;
    });
  }
}