import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
//Importo el servicio
//import { InfoService } from '../../../service/info/info.service';


@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss']
})
export class ProyectoComponent implements OnInit {
  //Inicializo y Creo la variable de instancia para almacenar los datos que trata el servicio
  proyectos: Proyecto[] = [];//any=[];

  proyecto : Proyecto = {
    id: 0,
    institucion: "",
    proyecto: "",
    profesion: "",
    logoproyecto: "",
    tema: "",
    temauno: "",
    anio: "",
    estado: ""
  };

/*
  api = "proyecto/ver"

  proyectos: any=[];
  proyectoss: string="";
*/
  constructor(
     //Inyectar el Servicio para tener acceso en la Clase a los Metodos
     //private infoService: InfoService
     private sProyecto:ProyectoService
  ) { }

  ngOnInit() {
    //Esto es para almacenar en la variable de instancia los datos recuperados por el servicio?
    this.cargarProyecto();
  }

  cargarProyecto():void {
    this.sProyecto.lista().subscribe(bd => {
      this.proyectos = bd
  });
  }

  /*
  ngOnInit(): void {
         //Esto es para almacenar en la variable de instancia los datos recuperados por el servicio?
         this.infoService.getDatos(this.api).subscribe(bd => {
          console.log(bd);
         //Definir informacion a mostrar
         this.proyectos = bd.proyectos;
         this.proyectoss = bd.proyectoss;

        });
  }*/

}
