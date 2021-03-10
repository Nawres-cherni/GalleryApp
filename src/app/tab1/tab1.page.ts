import { Component } from '@angular/core';
import { Photo,PhotoService } from '../services/photo.service';
import { ActionSheetController ,NavController} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public photoService: PhotoService,public actionSheetController: ActionSheetController) { }
 

  async ngOnInit() {
   
    await this.photoService.readfriends();
  }
  

  public async showActionSheet(photo: Photo, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Friends',
      buttons: [{
     
            text: 'Delete',
            role: 'destructive',
            icon: 'trash',
            handler: () => {
              this.photoService.deleteFriends(photo, position);
            }
          },
           {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
          }
      }
    ]
    });
    await actionSheet.present();
  }



}
