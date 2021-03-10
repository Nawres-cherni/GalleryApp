import { Component } from '@angular/core';
import { Photo,PhotoService } from '../services/photo.service';
import { ActionSheetController ,NavController} from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public photoService: PhotoService,public actionSheetController: ActionSheetController) { 
 
  }
 

  addPhotoToGallery() {
    this.showActionSheet();
  }

  addFamily(){
    this.photoService.addNewToGallery('famille');
  }

  
  addFriends(){
    this.photoService.addNewToGallery('friends');
  }






  async ngOnInit() {
    await this.photoService.loadSaved();
  }


  public async showActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Friends',
        //role: 'destructive',
        icon: 'accessibility-outline',
        handler: () => {
        this.addFriends();
         
        }
      },
      {
        text: 'Family',
        icon: 'people-circle-outline',
        //role: 'save',
        handler: () => {
        this.addFamily();
        }  
          },
      /*  {
            text: 'Delete',
            role: 'destructive',
            icon: 'trash',
            handler: () => {
              this.photoService.deletePicture(photo, position);
            }
          },*/
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
