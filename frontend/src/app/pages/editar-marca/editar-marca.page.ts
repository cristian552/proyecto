import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { MarcaService } from 'src/app/services/marca.service';
import { MarcaPage } from '../marca/marca.page';

@Component({
  selector: 'app-editar-marca',
  templateUrl: './editar-marca.page.html',
  styleUrls: ['./editar-marca.page.scss'],
})
export class EditarMarcaPage implements OnInit {

  
  @Input() id: string;//recibimos el id
  nombre: any;

  constructor(private modalCtrl: ModalController, private marcaService:MarcaService,
    private toastController:ToastController, private alertController: AlertController
  ){}

  ngOnInit(){
    if (this.id) {
      this.marcaService.getmarcaById(this.id).subscribe(data => {
        //console.log(data);
        this.nombre = data['Mar_Nombre'];
      });
    }
    console.log(this.nombre);
  }
  
  updateMarca(){
    const marca={
      Mar_Nombre: this.nombre
    };
    this.marcaService.updateMarca(this.id, marca).subscribe(async (data)=>{
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Actualizacion',
        message: 'Marca Actualizada Correctamente',
        buttons: [
        {
            text: 'Confirmar',
            id: 'confirm-button',
            handler: async () => {
              const modal = await this.modalCtrl.create({
                component: MarcaPage
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

