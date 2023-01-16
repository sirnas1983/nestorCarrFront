import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/service/info/info.service';

@Component({
  selector: 'app-navbardash',
  templateUrl: './navbardash.component.html',
  styleUrls: ['./navbardash.component.scss']
})
export class NavbardashComponent implements OnInit {
  logoarg: string="";

  constructor( private infoService: InfoService) { }

  ngOnInit(): void {
    //Esto es para almacenar en la variable de instancia los datos recuperados por el servicio?
    this.infoService.getDatos().subscribe(bd => {
      console.log(bd);
     //Definir informacion a mostrar
     this.logoarg = bd.logoargentinaprograma;
    });
  }

}
