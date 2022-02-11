import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController, ToastController } from '@ionic/angular';
import { Marca } from 'src/app/interfaces/marca';
import { MarcaService } from 'src/app/services/marca.service';
import { EditarMarcaPage } from '../editar-marca/editar-marca.page';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.page.html',
  styleUrls: ['./marca.page.scss'],
})
export class MarcaPage implements OnInit {

 
  @Input() id: string;
  marcas: Marca[] = [];

  constructor(private marcaService: MarcaService,private alertController: AlertController,
    private toastController:ToastController,public navCtrl:NavController,
    public modalCtrl: ModalController) { }

  ngOnInit(): void {
    this.getAllmarcas();
  }
  
 //listar
 getAllmarcas() {
  this.marcaService.getAllMarca()
    .subscribe(marcas => {
      this.marcas = marcas;
    })
  }

//Guardar
  async nueva_marca() {
    const alert = await this.alertController.create({
      header: 'Agregar Nueva Marca',
      inputs: [
      {
        name: 'Mar_Nombre',
        type: 'text',
        placeholder: 'Marca'
    
      }
      
      ],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Guardar',
        handler: (data) => {
          this.addMarca( data.Mar_Nombre);
          console.log('Confirm Ok');
        }
      }

      ]
    });
    await alert.present();
  }

  addMarca(Mar_Nombre:string){
    const marca={
      Mar_Nombre
    };
    this.marcaService.createMarca(marca)
    .subscribe((data)=>{
    this.getAllmarcas();
      this.presentToast('Creado Correctamente');
    })
  }
  async presentToast(message:string){
    const toast=await this.toastController.create({
      message:message,
      duration:3000
    });
    toast.present();
  }
//ACtualizar

  async createMarca(id?: string) {
    const modal = await this.modalCtrl.create({
      component: EditarMarcaPage,
      componentProps: { id },
    });
    return await modal.present();
  }

//eliminar
  async deleteMarca(_id:string, marca: any){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Eliminar',
      message: 'Esta seguro que desea eliminar',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {

          }
        }, {
          text: 'Confirmar',
          id: 'confirm-button',
          handler: () => {
            this.marcaService.deleteMarca(_id).subscribe(()=>{
              let index = this.marcas.indexOf(marca);
              this.marcas.splice(index,1);
            });
          }
        }
      ]
    });

    await alert.present();
  }

}
