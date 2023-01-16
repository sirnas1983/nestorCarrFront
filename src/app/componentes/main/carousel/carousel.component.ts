import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/model/banner';
//Importo el servicio
//import { InfoService } from '../../../service/info/info.service';
import { BannerService } from 'src/app/service/banner.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  [x: string]: any;
  api ="banner/ver"
//Inicializo y Creo la variable de instancia para almacenar los datos que trata el servicio
carousel: Banner[] = [];//any=[];
banner : Banner = {
  id: 0,
  carouselimag: "",
  carouselimage: "",
  carouselimagen: "",
  imageprincipal: ""
 };
/*carousel: any=[];
carouselimag: any="";
carouselimage: any="";
carouselimagen: any="";
*/
  constructor(
//Inyectar el Servicio para tener acceso en la Clase a los Metodos
    //private infoService: InfoService,
    private sBanner: BannerService,
    //private tokenService: TokenService
  ) { }

  IsLogged = false;

  ngOnInit() {
    //Esto es para almacenar en la variable de instancia los datos recuperados por el servicio?
    this.cargarBanner();
   /* if(this.tokenService.getToken()){
      this.IsLogged = true;
    }else{
      this.IsLogged = false;
    }*/
    /*
    this.infoService.getDatos().subscribe(bd => {
      console.log(bd);
     //Definir informacion a mostrar
     this.carouselimag = bd.carouselimag;
     this.carouselimage = bd.carouselimage;
     this.carouselimagen = bd.carouselimagen;
     this.imageprincipal = bd.imageprincipal;
    });*/
  }
  cargarBanner():void {
    this.sBanner.lista().subscribe(bd => {
      this.carousel = bd
  });
  }

  /*
  ngOnInit(): void {
    //Esto es para almacenar en la variable de instancia los datos recuperados por el servicio?
    //this.infoService.getDatos(this.api).subscribe(bd => {
    this.infoService.getDatos(this.api).subscribe(bd => {

      console.log(bd);
     //Definir informacion a mostrar
     this.carouselimag = bd.carouselimag;
     this.carouselimage = bd.carouselimage;
     this.carouselimagen = bd.carouselimagen;
    });
  }*/

}
