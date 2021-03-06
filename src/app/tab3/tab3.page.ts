import { Component } from '@angular/core';
import { Photo,PhotoService } from '../services/photo.service';
import { ActionSheetController ,NavController} from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public photoService: PhotoService,public actionSheetController: ActionSheetController) { }
 


  async ngOnInit() {
    await this.photoService.readfamily();
  }

  public async showActionSheet(photo: Photo, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Family',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deleteFamille(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          }
      }]
    });
    await actionSheet.present();
  }

}

