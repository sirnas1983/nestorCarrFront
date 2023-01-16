import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
//import { InfoService } from '../../../service/info/info.service';

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})

export class AcercademiComponent implements OnInit {
  //Inicializo y Creo la variable de instancia para almacenar los datos que trata el servicio
  personas: Persona[] = [];//any=[];
  persona : Persona = {
    id: 0,
    nombre: "",
    apellido: "",
    profesion: "",
    acerca_de_mi: "",
    acercademi: "",
    imageprincipal: ""
  };
  //Esta es una manera pero no la correcta
  //nombre ='Nestor Alfredo';
  //apellido = "Carretino";
  /*
  api = "persona/ver"

  //acercademiUno: any;
  nombre: string = '';
  apellido: string = '';
  profesion: string = '';
  acerca_de_mi: string = '';
  acercademi: string = '';
  imagenprincipal: string = '';
  encabezados: string = '';
*/
    constructor(
    //Inyectar el Servicio para tener acceso en la Clase a los Metodos
      //private infoService: InfoService,
      private sPersona:PersonaService
      //private personaService: PersonaService
    //Inyectar objeto router para permitir la navegacion a la pagina individual
    //private router: Router
    ) {this.cargarPersona();}

    ngOnInit(): void{
      

    }
    cargarPersona():void {
      this.sPersona.lista().subscribe(bd => {
        this.personas = bd
        console.log(this.personas);
    });
    }
    /*
  ngOnInit(): void {
//Esto es para almacenar en la variable de instancia los datos recuperados por el servicio?
    //this.personaService.getDatos().subscribe(bd => {
      this.infoService.getDatos(this.api).subscribe(bd => {
      console.log(bd);
     //this.acercademiUno = db.uno;
     //Definir informacion a mostrar, imagenprincipal es la variable creada y imageprincipal viene del Json
     this.nombre = bd.nombre;
     this.apellido = bd.apellido;
     this.profesion = bd.profesion;
     this.acerca_de_mi = bd.acerca_de_mi;
     this.acercademi = bd.acercademi;
     this.imagenprincipal = bd.imageprincipal;
     this.encabezados = bd.encabezado;

    });
  }*/
    //title = "Acerca de Mi";
}
