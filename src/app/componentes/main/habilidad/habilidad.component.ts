import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';
//Importo el servicio
//import { InfoService } from '../../../service/info/info.service';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.scss']
})
export class HabilidadComponent implements OnInit {
//Inicializo y Creo la variable de instancia para almacenar los datos que trata el servicio
  habilidades: Habilidad[] = [];//any=[];

  habilidad : Habilidad = {
   id: 0,
   habilidad: "",
   porcentaje: 0,
   color: ""
  };
  /*
  api = "habilidad/ver"

  habilidades: any=[];
  habilidadess: string="";
  idiomas: string="";
  lecturas: string="";
  conversacions: string="";
  porcentajelect: string="";
  porcentajeconvers: string="";
*/
  constructor(
    //Inyectar el Servicio para tener acceso en la Clase a los Metodos
    //private infoService: InfoService
    private sHabilidad:HabilidadService
  ) { }

  ngOnInit() {
    this.cargarHabilidad();
  }

  cargarHabilidad():void {
    this.sHabilidad.lista().subscribe(bd => {
      this.habilidades = bd
  });
  }

  /*
  ngOnInit(): void {
    //Esto es para almacenar en la variable de instancia los datos recuperados por el servicio?
    this.infoService.getDatos(this.api).subscribe(bd => {
     console.log(bd);
    //Definir informacion a mostrar
    this.habilidades = bd.habilidades;
    this.habilidadess = bd.habilidadess;
    this.idiomas = bd.idioma;
    this.lecturas = bd.lectura;
    this.conversacions = bd.conversacion;
    this.porcentajelect = bd.porcentajelec;
    this.porcentajeconvers = bd.porcentajeconver
   });
  }*/

}
