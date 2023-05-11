import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit{
  hero:any;
  constructor(private datosPersona:PortfolioService){ }
  ngOnInit():void {
    this.datosPersona.getPersona().subscribe(data =>{
      console.log("Datos "+ JSON.stringify(data))
      this.hero = data[0];
    });

  }
}