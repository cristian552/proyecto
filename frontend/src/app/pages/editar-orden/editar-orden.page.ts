import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { OrdenService } from 'src/app/services/orden.service';
import { OrdenPage } from '../orden/orden.page';

@Component({
  selector: 'app-editar-orden',
  templateUrl: './editar-orden.page.html',
  styleUrls: ['./editar-orden.page.scss'],
})
export class EditarOrdenPage implements OnInit {

 
  @Input() id: string;//recibimos el id
  fecha: any;
  cliente: any;
  marca: any;
  modelo: any;
  imei: any;
  falla: any;
  observacion: any;
  precio: any;
  
  constructor(private modalCtrl: ModalController, private ordenService:OrdenService,
    private toastController:ToastController, private alertController: AlertController) { }

    ngOnInit(){
      if (this.id) {
        this.ordenService.getOrdenById(this.id).subscribe(data => {
          //console.log(data);
          this.fecha = data['fecha'];
          this.cliente = data['Cli_Codigo'];
          this.marca = data['Mar_Codigo'];
          this.modelo = data['Mod_Codigo'];
          this.imei = data['imei'];
          this.falla = data['falla'];
          this.observacion = data['observacion'];
          this.precio = data['precio'];
         
        });
      }
    }
    
    updateOrden(){
      const orden={
        fecha: this.fecha,
        Cli_Codigo : this.cliente,
        Mar_Codigo :this.marca,
        Mod_Codigo :this.modelo,
        imei : this.imei,
        falla : this.falla,
        observacion : this.observacion,
        precio : this.precio,
      };
      this.ordenService.updateOrden(this.id, orden).subscribe(async (data)=>{
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Actualizacion',
          message: 'Cliente Actualizado Correctamente',
          buttons: [
          {
              text: 'Confirmar',
              id: 'confirm-button',
              handler: async () => {
                const modal = await this.modalCtrl.create({
                  component: OrdenPage
                });
                return await modal.present();
              }
            }
          ]
        });
        await alert.present();
      });
    }
  }

