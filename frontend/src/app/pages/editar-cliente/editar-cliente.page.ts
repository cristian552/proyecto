import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { ClienteService } from 'src/app/services/cliente.service';
import { ClientePage } from '../cliente/cliente.page';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.page.html',
  styleUrls: ['./editar-cliente.page.scss'],
})
export class EditarClientePage implements OnInit {

  @Input() id: string;//recibimos el id
  nombre: any;
  documento: any;
  telefono: any;
  email: any;
  
  constructor(private modalCtrl: ModalController, private clienteService:ClienteService,
    private toastController:ToastController, private alertController: AlertController) { }

    ngOnInit(){
      if (this.id) {
        this.clienteService.getClienteById(this.id).subscribe(data => {
          //console.log(data);
          this.nombre = data['Cli_Nombre'];
          this.documento = data['Cli_Documento'];
          this.telefono = data['Cli_Telefono'];
          this.email = data['Cli_Email'];
         
        });
      }
    }
    
    updateCliente(){
      const cliente={
        Cli_Nombre : this.nombre,
        Cli_Documento :this.documento,
        Cli_Telefono :this.telefono,
        Cli_Email : this.email,
      };
      this.clienteService.updateCliente(this.id, cliente).subscribe(async (data)=>{
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
                  component: ClientePage
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
