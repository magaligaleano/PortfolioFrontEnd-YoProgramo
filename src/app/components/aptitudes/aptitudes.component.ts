import { Component, OnInit } from '@angular/core';
import { AptitudService } from 'src/app/servicios/aptitud.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit{
  aptitud:any;
  aptitud2:any;
  aptitud3:any;
  aptitud4:any;
  aptitud5:any;

  constructor(private datosAptitudes:AptitudService){ }
  ngOnInit():void {
    this.datosAptitudes.getAptitud().subscribe(data=>{
      console.log("Datos "+ JSON.stringify(data))
      this.aptitud = data[0];
      this.aptitud2 = data[1];
      this.aptitud3 = data[2];
      this.aptitud4 = data[3];
      this.aptitud5 = data[4];
    })
  }
}
