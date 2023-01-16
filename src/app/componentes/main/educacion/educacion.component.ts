import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
//import { InfoService } from 'src/app/service/info/info.service';
//Importo el servicio


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {
  //Inicializo y Creo la variable de instancia para almacenar los datos que trata el servicio y se pasa al template
  mieducacion: Educacion[] = [];

  educacion : Educacion = {
  id: 0,
  universidad: "",
  logo: "",
  titulo: "",
  institucion: "",
  estado: ""
};
  /*
  api = "educacion/ver";
  //Inicializo y Creo la variable de instancia para almacenar los datos que trata el servicio y se pasa al template
  mieducacion: any=[];
  mieducacions: string=""
*/
  constructor(
     //Inyectar el Servicio para tener acceso en la Clase a los Metodos
     //private infoService: InfoService
     private sEducacion:EducacionService
  ) { }

  ngOnInit() {
    //Esto es para almacenar en la variable de instancia los datos recuperados por el servicio?
    this.cargarEducacion();

  }

  cargarEducacion():void {
    this.sEducacion.lista().subscribe(bd => {
      this.mieducacion = bd
  });
  }

/*
  ngOnInit(): void {
     //Esto es para almacenar en la variable de instancia los datos recuperados por el servicio?
     this.infoService.getDatos(this.api).subscribe(bd => {
      console.log(bd);
     //Definir informacion a mostrar, mieducacion es la variable creada y educacion viene del Json
     this.mieducacion = bd.educacion;
     this.mieducacions = bd.educacions;
    });
  }*/

}
