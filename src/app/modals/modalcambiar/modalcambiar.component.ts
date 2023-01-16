import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Banner } from 'src/app/model/banner';
import { BannerService } from 'src/app/service/banner.service';

@Component({
  selector: 'app-modalcambiar',
  templateUrl: './modalcambiar.component.html',
  styleUrls: ['./modalcambiar.component.css']
})
export class ModalcambiarComponent implements OnInit {
  form!: FormGroup;
  //bann: Banner = {id: 1, carouselimag: "", carouselimage: "", carouselimagen: "", imageprincipal: ""};
  //bannerId: number = 1; //Inicializo en  id fijo = 1 porque solo habra 1 persona
  //id: number = 1; //le pongo id fijo porque solo tendre 1 info personal
  //bann : Banner = null;
  //Inyectar en el constructor el formBuilder
  @Input() editarBanner : Banner = {
    id: 0,
    carouselimag: "",
    carouselimage: "",
    carouselimagen: "",
    imageprincipal: ""
  };

  constructor(
    private formBuilder: FormBuilder,
    private sBanner: BannerService,
    //private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.form=this.formBuilder.group({
      id:[''],
      carouselimag: ['', [Validators.required]],
      carouselimage: ['', [Validators.required]],
      carouselimagen: ['', [Validators.required]],
      imageprincipal: ['', [Validators.required]],

    })
  }
/*
  ngOnInit(): void {
    this.cargarInfo();
    const id = this.activatedRoute.snapshot.params['id'];
    this.sBanner.getById(this.id).subscribe(
      data => {
        this.bann = data;
      }, () =>{

      })
  }*/

  ngOnInit(): void{
/**/
  }

  ngOnChanges(): void {
      console.log(this.editarBanner);
      this.form.controls['id']?.setValue(this.editarBanner.id);
      this.form.controls['imageprincipal']?.setValue(this.editarBanner.imageprincipal);
      this.form.controls['carouselimag']?.setValue(this.editarBanner.carouselimag);
      this.form.controls['carouselimage']?.setValue(this.editarBanner.carouselimage);
      this.form.controls['carouselimagen']?.setValue(this.editarBanner.carouselimagen);
  }


  get Imageprincipal(){
    return this.form.get('imageprincipal');
  }

  onUpdate(): void{
    console.log(this.form.value);
    //const id = this.activatedRoute.snapshot.params['id'];
    //this.bann.id = this.editarBanner.id;
    //this.bann.imageprincipal = this.form.get('imageprincipal').value;

      this.sBanner.save(this.form.value).subscribe(
      data => {
        //alert("error");
        document.getElementById('cerrarModalEdicionBanner').click();
        //alert("la informacion fue modificada");
        alert("Error en la modificacion, intentelo nuevanente");
        this.router.navigate(['/dashboard']);
        //document.getElementById('cerrarModalEdicionBanner').click();
        window.location.reload();

        //alert("la informacion fue modificada");
        //$("exampleModal12").modal("hide");
        //modalService.close('exampleModal12');
        }, err =>{
        alert("la informacion fue modificada");
        //alert("Error en la modificacion, intentelo nuevanente");
        this.router.navigate(['/dashboard']);
        document.getElementById('cerrarModalEdicionBanner').click();
        window.location.reload();
      }
    )


  }

/*
  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sBanner.editBanner(this.id, this.bann).subscribe(
      data => {
        alert("la informacion fue modificada");
        window.location.reload();
      }, err =>{
        alert("error");
        this.router.navigate(['']);
      }
    )


  }

//metodo para traer la info de la ddbb
  cargarInfo(){
    this.sBanner.getById(this.id).subscribe(data => {
      this.bann = data;
    });
  }

  limpiar(): void {
    this.form.reset();
  }*/
/*
ngOnInit(): void {
  this.activatedRoute.params.subscribe(params => {
    const id = params['id'];
    this.sBanner.detail(id).subscribe(
      data =>{
        this.bann = data;
      }, err =>{
        alert("Error al pasar el id");
        this.router.navigate(['']);
      }
    )
  });

}


update(): void{
  this.activatedRoute.params.subscribe(params => {
    const id = params['id'];
    this.sBanner.update(id, this.bann).subscribe(
      data => {

        this.router.navigate(['']);
      }, err => {
        alert("Error al querer modificar la educacion");
        this.router.navigate(['']);
      }
    )
  });
}

canceled(){
  alert("No se realizaron cambios");
  this.router.navigate(['']);
}
get Imageprincipal(){
  return this.form.get('imageprincipal');
}
*/
}
