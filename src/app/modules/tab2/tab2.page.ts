import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { UserInfoDialogComponent } from './pop-ups/user-info-dialog/user-info-dialog.component';
import { PostsStore } from './store/posts-store';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [PostsStore],
})
export class Tab2Page implements OnInit {
  vm$ = this.postsStore.vm$;

  constructor(
    private postsStore: PostsStore,
    public actionSheetController: ActionSheetController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit(): void {
    this.postsStore.getPosts();
  }

  handleRefresh(event: any) {
    this.postsStore.getPosts();
    event.target.complete();
  }

  async presentActionSheet(item: any) {
    const actionSheet = await this.actionSheetController.create({
      header: `User ${item}`,
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          },
        },
        {
          text: 'Edit',
          icon: 'pencil',
          handler: () => {
            console.log('Share clicked');
          },
        },
        {
          text: 'See details',
          icon: 'eye-outline',
          handler: () => {
            console.log('Play clicked');
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: UserInfoDialogComponent,
      breakpoints: [0.25, 0.85],
      initialBreakpoint: 0.85,
      canDismiss: true,
    });

    modal.present();
  }
}
