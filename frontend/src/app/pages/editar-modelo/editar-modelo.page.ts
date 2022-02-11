import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { ModeloService } from 'src/app/services/modelo.service';
import { ModeloPage } from '../modelo/modelo.page';

@Component({
  selector: 'app-editar-modelo',
  templateUrl: './editar-modelo.page.html',
  styleUrls: ['./editar-modelo.page.scss'],
})
export class EditarModeloPage implements OnInit {

  @Input() id: string;//recibimos el id
  nombre: any;

  constructor(private modalCtrl: ModalController, private modeloService:ModeloService,
    private toastController:ToastController, private alertController: AlertController
  ){}

  ngOnInit(){
    if (this.id) {
      this.modeloService.getmodeloById(this.id).subscribe(data => {
        //console.log(data);
        this.nombre = data['Mod_Nombre'];
      });
    }
    console.log(this.nombre);
  }
  
  updateModelo(){
    const modelo={
      Mod_Nombre: this.nombre
    };
    this.modeloService.updateModelo(this.id, modelo).subscribe(async (data)=>{
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Actualizacion',
        message: 'Modelo Actualizada Correctamente',
        buttons: [
        {
            text: 'Confirmar',
            id: 'confirm-button',
            handler: async () => {
              const modal = await this.modalCtrl.create({
                component: ModeloPage
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
