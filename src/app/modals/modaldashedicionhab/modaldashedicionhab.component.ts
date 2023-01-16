import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//Importamos las librerias de formulario que vamos a utilizar
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';//ctivatedRoute,
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-modaldashedicionhab',
  templateUrl: './modaldashedicionhab.component.html',
  styleUrls: ['./modaldashedicionhab.component.scss']
})
export class ModaldashedicionhabComponent implements OnInit {
  form!: FormGroup;

  @Output() actualizarComponente  = new EventEmitter<any>;
  @Input() editarHabilidad : Habilidad = {
    id: 0,
    habilidad: "",
    porcentaje: 0,
    color: ""
  };


  //Inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder,
    private sHabilidad: HabilidadService,
 //   private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.form=this.formBuilder.group({
        id:[''],
        habilidad: ['', [Validators.required]],
        porcentaje: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
        color: ['', [Validators.required]],

    })

  }
  ngOnInit(): void{
    /**/
  }

  ngOnChanges(): void {
      console.log(this.editarHabilidad);
      this.form.controls['id']?.setValue(this.editarHabilidad.id);
      this.form.controls['habilidad']?.setValue(this.editarHabilidad.habilidad);
      this.form.controls['porcentaje']?.setValue(this.editarHabilidad.porcentaje);
      this.form.controls['color']?.setValue(this.editarHabilidad.color);
  }

  get Habilidad(){
    return this.form.get('habilidad');
  }
  get Porcentaje(){
    return this.form.get('porcentaje');
  }
  get Color(){
    return this.form.get('color');
  }

  onUpdate(): void{
    console.log(this.form.value);
      this.sHabilidad.save(this.form.value).subscribe(
      data => {
        document.getElementById('cerrarModalEdicionHabilidad').click();
        alert("Error en la modificacion, intentelo nuevanente");
        this.actualizarComponente.emit();
        this.router.navigate(['/dashboard']);
        }, err =>{
        alert("la informacion fue modificada");
        this.router.navigate(['/dashboard']);
        this.actualizarComponente.emit();
        document.getElementById('cerrarModalEdicionHabilidad').click();
      }
    )
  }
  }



