import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Orden } from 'src/app/interfaces/orden';
import { OrdenService } from 'src/app/services/orden.service';
import { EditarOrdenPage } from '../editar-orden/editar-orden.page';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.page.html',
  styleUrls: ['./orden.page.scss'],
})
export class OrdenPage {


  listarOrden: any = [];
  ordenes: Orden[] = [];

  constructor(private ordenService: OrdenService,private alertController:AlertController,
    private toastController:ToastController,public modalCtrl: ModalController) {
    this.getAllOrdenes();
   }

  getAllOrdenes(){
    this.ordenService.getAllOrden().then(data => {
      this.listarOrden = data;
      console.log(this.listarOrden);
    });
    
    }  

    //Guardar
  async nueva_orden() {
    const alert = await this.alertController.create({
      header: 'Agregar Nueva Orden',
      inputs: [
      {
        name: 'fecha',
        type: 'date',
        placeholder: ''
      }
        ,
      {
        name: 'Cli_Codigo',
        type: 'textarea',
        placeholder: 'Cliente'
      }
        ,
      {
        name: 'Mar_Codigo',
        type: 'textarea',
        placeholder: 'Marca'
      }
      ,
      {
        name: 'Mod_Codigo',
        type: 'textarea',
        placeholder: 'Modelo'
      }
      ,
      {
        name: 'imei',
        type: 'textarea',
        placeholder: 'Imei'
      }
      ,
      {
        name: 'falla',
        type: 'textarea',
        placeholder: 'Falla'
      }
      ,
      {
        name: 'observacion',
        type: 'textarea',
        placeholder: 'Observacion'
      }
      ,
      {
        name: 'precio',
        type: 'textarea',
        placeholder: 'Precio'
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
          this.addOrden(data.fecha,data.Cli_Codigo,data.Mar_Codigo,data.Mod_Codigo,data.imei,
            data.falla,data.observacion,data.precio);
          console.log('Confirm Ok');
        }
      }

      ]
    });
    await alert.present();
  }

  addOrden(fecha:Date,Cli_Codigo:string,Mar_Codigo:string,Mod_Codigo:string,imei:string,
    falla:string,observacion:string,precio:string){
    const orden={
      fecha,Cli_Codigo,Mar_Codigo,Mod_Codigo,imei,falla,observacion,precio
    };
    this.ordenService.createOrden(orden)
    .subscribe((data)=>{
     this.getAllOrdenes();
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

  async actualizar_orden(id?: string) {
    const modal = await this.modalCtrl.create({
      component: EditarOrdenPage,
      componentProps: { id },
    });
    return await modal.present();
  }

//eliminar
async deleteOrden(_id:string,orden:any){
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Eliminar',
    message: 'Esta Seguro Que Desea Eliminar!',
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
          this.ordenService.deleteOrden(_id).subscribe(()=>{
            let index = this.ordenes.indexOf(orden);
            this.ordenes.splice(index,1);
          });
        }
      }
    ]
  });

  await alert.present();
} 
} 



