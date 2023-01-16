import { Component, Input, OnInit } from '@angular/core';
//Importamos las librerias de formulario que vamos a utilizar
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-modaldashedicionproy',
  templateUrl: './modaldashedicionproy.component.html',
  styleUrls: ['./modaldashedicionproy.component.scss']
})
export class ModaldashedicionproyComponent implements OnInit {
  form!: FormGroup;
  //proye: Proyecto = {id: 1, institucion: "", proyecto: "", profesion: "", logoproyecto: "", tema: "", temauno: "", anio: "", estado: ""};
  //proyectoId: number = 1; //Inicializo en  id fijo = 1
  //id: number = 1; //le pongo id fijo
  @Input() editarProyecto : Proyecto = {
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
  //proyectos: Proyecto = null;
  //personaId: number = 1;          //le pongo id fijo porque solo tendre 1 persona
  //id: number = 0;


   //Inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder,
    private sProyecto: ProyectoService,
    //private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.form=this.formBuilder.group({
     /*   //id:[''],
        institucion: [''],
        proyecto: [''],
        profesion: [''],
        logoproyecto: [''],
        tema: [''],
        temauno: [''],
        anio: [''],
        estado: [''],

    })*/

      id:[''],
      institucion: ['', [Validators.required]],
      proyecto: ['', [Validators.required]],
      profesion: ['', [Validators.required]],
      logoproyecto: ['', [Validators.required]],
      tema: ['', [Validators.required]],
      temauno: ['', [Validators.required]],
      anio: ['', [Validators.required]],
      estado: ['', [Validators.required]],

    })

  }

  /*ngOnInit(): void {
    this.cargarInfo();
    const id = this.activatedRoute.snapshot.params['id'];
    this.sProyecto.getById(this.id).subscribe(
      data => {
        this.proye = data;
      }, () =>{

      })
  }*/
  ngOnInit(): void {
    /**/
  }

/*
  ngOnInit(): void {
    this.cargarInfo();
    const id = this.activatedRoute.snapshot.params['id'];
    this.sProyecto.getById(this.id).subscribe(
      data => {
        this.proye = data;//proyectos
      }, () =>{

      }
    )
  }*/

/*
  ngOnInit(): void{
    this.form=this.formBuilder.group({
      //id:[''],
      institucion: ['', [Validators.required]],
      proyecto: ['', [Validators.required]],
      profesion: ['', [Validators.required]],
      logoproyecto: ['', [Validators.required]],
      tema: ['', [Validators.required]],
      temauno: ['', [Validators.required]],
      anio: ['', [Validators.required]],
      estado: ['', [Validators.required]],

  })

  }*/

  ngOnChanges(): void {
      console.log(this.editarProyecto);
      this.form.controls['id']?.setValue(this.editarProyecto.id);
      this.form.controls['institucion']?.setValue(this.editarProyecto.institucion);
      this.form.controls['proyecto']?.setValue(this.editarProyecto.proyecto);
      this.form.controls['profesion']?.setValue(this.editarProyecto.profesion);
      this.form.controls['anio']?.setValue(this.editarProyecto.anio);
      this.form.controls['tema']?.setValue(this.editarProyecto.tema);
      this.form.controls['temauno']?.setValue(this.editarProyecto.temauno);
      this.form.controls['estado']?.setValue(this.editarProyecto.estado);
      this.form.controls['logoproyecto']?.setValue(this.editarProyecto.logoproyecto);
  }

  get Institucion(){
    return this.form.get('institucion');
  }
  get Proyecto(){
    return this.form.get('proyecto');
  }
  get Profesion(){
    return this.form.get('profesion');
  }
  get Logoproyecto(){
    return this.form.get('logoproyecto');
  }
  get Tema(){
    return this.form.get('tema');
  }
  get Temauno(){
    return this.form.get('temauno');
  }
  get Anio(){
    return this.form.get('anio');
  }
  get Estado(){
    return this.form.get('estado');
  }
/*
  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sProyecto.editProyecto(this.id, this.proye).subscribe(
      data => {
        alert("la informacion fue modificada");
        window.location.reload();
      }, err =>{
        alert("error");
        this.router.navigate(['']);
      }
    )


  }*/
  /*
  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];//proyectos
    this.sProyecto.editProyecto(this.id, this.proye).subscribe(
      data => {
        alert("la informacion fue modificada");
        window.location.reload();
      }, err =>{
        alert("error");
        window.location.reload();
      }
    )
  }
  */

  onUpdate(): void{
    //const id = this.activatedRoute.snapshot.params['id'];
    //this.proye.id = this.editarProyecto.id;
    //this.proye.institucion = this.form.get('institucion').value;
    //this.proye.proyecto = this.form.get('proyecto').value;
    //this.proye.profesion = this.form.get('profesion').value;
    //this.proye.logoproyecto = this.form.get('logoproyecto').value;
    //this.proye.tema = this.form.get('tema').value;
    //this.proye.anio = this.form.get('anio').value;
    //this.proye.temauno = this.form.get('temauno').value;
    //this.proye.estado = this.form.get('estado').value;

    this.sProyecto.save(this.form.value).subscribe(
      data => {
        //alert("error");
        document.getElementById('cerrarModalEdicionProyecto').click();
        //alert("la informacion fue modificada");
        alert("Error en la modificacion, intentelo nuevanente");
        this.router.navigate(['/dashboard']);
        window.location.reload();
     
        //alert("la informacion fue modificada");
        //$("exampleModal12").modal("hide");
        //modalService.close('exampleModal12');
        }, err =>{
        alert("la informacion fue modificada");
        //alert("Error en la modificacion, intentelo nuevanente");
        document.getElementById('cerrarModalEdicionProyecto').click();
        this.router.navigate(['/dashboard']);
        window.location.reload();
      }
    )


  }

//metodo para traer la info de la ddbb
 /* cargarInfo(){
    this.sProyecto.getById(this.id).subscribe(data => {
      this.proye = data;//proyectos
    });
  }
*/
  limpiar(): void {
    this.form.reset();
  }

}
