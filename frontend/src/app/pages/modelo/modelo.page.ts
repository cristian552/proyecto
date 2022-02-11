import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController, ToastController } from '@ionic/angular';
import { Modelo } from 'src/app/interfaces/modelo';
import { ModeloService } from 'src/app/services/modelo.service';
import { EditarModeloPage } from '../editar-modelo/editar-modelo.page';

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.page.html',
  styleUrls: ['./modelo.page.scss'],
})
export class ModeloPage implements OnInit {

  @Input() id: string;
  modelos: Modelo[] = [];

  constructor(private modeloService: ModeloService,private alertController: AlertController,
    private toastController:ToastController,public navCtrl:NavController,
    public modalCtrl: ModalController) { }

  ngOnInit(): void {
    this.getAllmodelos();
  }
  
 //listar
 getAllmodelos() {
  this.modeloService.getAllModelo()
    .subscribe(modelos => {
      this.modelos = modelos;
    })
  }

//Guardar
  async nueva_modelo() {
    const alert = await this.alertController.create({
      header: 'Agregar Nueva Modelo',
      inputs: [
      {
        name: 'Mod_Nombre',
        type: 'text',
        placeholder: 'Modelo'
    
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
          this.addModelo( data.Mod_Nombre);
          console.log('Confirm Ok');
        }
      }

      ]
    });
    await alert.present();
  }

  addModelo(Mod_Nombre:string){
    const modelo={
      Mod_Nombre
    };
    this.modeloService.createModelo(modelo)
    .subscribe((data)=>{
    this.getAllmodelos();
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

  async createModelo(id?: string) {
    const modal = await this.modalCtrl.create({
      component: EditarModeloPage,
      componentProps: { id },
    });
    return await modal.present();
  }

//eliminar
  async deleteModelo(_id:string, modelo: any){
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
            this.modeloService.deleteModelo(_id).subscribe(()=>{
              let index = this.modelos.indexOf(modelo);
              this.modelos.splice(index,1);
            });
          }
        }
      ]
    });

    await alert.present();
  }

}