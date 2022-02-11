import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController, ToastController } from '@ionic/angular';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { EditarClientePage } from '../editar-cliente/editar-cliente.page';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  @Input() id: string;
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService,private alertController: AlertController,
    private toastController:ToastController,public modalCtrl: ModalController,
    public navCtrl:NavController) { }
    
  ngOnInit(): void {
    this.getAllclientes();
  }
  
  //listar
  getAllclientes() {
    this.clienteService.getAllCliente()
      .subscribe(clientes => {
        this.clientes = clientes;
      })
  }

  //Guardar
  async nuevo_cliente() {
    const alert = await this.alertController.create({
      header: 'Agregar Nuevo Cliente',
      inputs: [
      {
        name: 'Cli_Nombre',
        type: 'text',
        placeholder: 'Nombre del Cliente'
      }
        ,
      {
        name: 'Cli_Documento',
        type: 'textarea',
        placeholder: 'Documento'
      }
        ,
      {
        name: 'Cli_Telefono',
        type: 'textarea',
        placeholder: 'Telefono'
      }
      ,
      {
        name: 'Cli_Email',
        type: 'textarea',
        placeholder: 'Email'
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
          this.addCliente(data.Cli_Nombre,data.Cli_Documento,data.Cli_Telefono,data.Cli_Email);
          console.log('Confirm Ok');
        }
      }

      ]
    });
    await alert.present();
  }

  addCliente(Cli_Nombre:string,Cli_Documento:string,Cli_Telefono:string,Cli_Email:string){
    const cliente={
      Cli_Nombre,Cli_Documento,Cli_Telefono,Cli_Email
    };
    this.clienteService.createCliente(cliente)
    .subscribe((data)=>{
     this.getAllclientes();
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

  async actualizar_cliente(id?: string) {
    const modal = await this.modalCtrl.create({
      component: EditarClientePage,
      componentProps: { id },
    });
    return await modal.present();
  }

//eliminar
async deleteCliente(_id:string,cliente:any){
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
          this.clienteService.deleteCliente(_id).subscribe(()=>{
            let index = this.clientes.indexOf(cliente);
            this.clientes.splice(index,1);
          });
        }
      }
    ]
  });

  await alert.present();
}

}
