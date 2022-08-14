import { Component, Input, OnInit } from '@angular/core';
import { IonItemSliding, ModalController } from '@ionic/angular';
import { ReminderService } from '../reminder.service';
import { AddReminderPage } from '../add-reminder/add-reminder.page';
import { UpdateReminderPage } from '../update-reminder/update-reminder.page';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.page.html',
  styleUrls: ['./reminders.page.scss'],
})
export class RemindersPage implements OnInit {
  // Reminder Array list
  selectTabs = 'upcoming';
  reminderList: any = [];
  UncompleteReminderList: any = [];
  completedReminderList: any = [];

  constructor(
    public modalCtrl: ModalController,
    public reminderService: ReminderService
  ) { }

  // this function will render on load
  async ngOnInit() {
    this.getUncompletedReminders(); // Get all Uncompleted reminders from storage
    this.getCompletedReminders(); // get all completed reminders from storage
  }

  async addNewItem() {
    const modal = await this.modalCtrl.create({
      component: AddReminderPage,
    });
    modal.onDidDismiss().then((newReminder) => {
      this.getUncompletedReminders();
      console.log(newReminder);
    });
    return await modal.present();
  }

 async getAllReminders() {
    this.reminderList = await this.reminderService.getAllReminders();

  }

  // async complete(item) {
  //   item.isCompleted = true;
  //   await this.reminderService.setCompleted(key, newReminderObj);
  //   this.getUncompletedReminders();
  //   this.getCompletedReminders();
  // }

  // onComplete(item, slidingItem: IonItemSliding) {
  //   this.complete(item);
  //   slidingItem.close();
  // }

  delete(key) {
    this.reminderService.deleteReminder(key);
    this.getUncompletedReminders();
    this.getCompletedReminders();
  }

  onDelete(key, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.delete(key);
  }
   
  //get uncompleted reminders
  async getUncompletedReminders() {
    this.UncompleteReminderList = await this.reminderService.getUncompletedReminders();
  }

  //gets completed reminders
  async getCompletedReminders() {
    this.completedReminderList = await this.reminderService.getCompletedReminders();
  }

  async update(selectedReminder) {
    const modal = await this.modalCtrl.create({
      component: UpdateReminderPage,
      componentProps: { reminder: selectedReminder },
    });

    modal.onDidDismiss().then(() => {
      this.getUncompletedReminders();
    });
    return await modal.present();
  }

  onUpdate(value, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.update(value);
  }

  
  // DEBUG FUNCTIONS
  async debug() {
    // const querySnapshot = await getDocs(collection(db, 'users'));
    // querySnapshot.forEach(doc => {
    //   console.log(doc.id, " => ", doc.data());
    // })


    // //getting current user
    // const auth = getAuth();
    // const user = auth.currentUser;
    // console.log(user)

    // const q = query(collection(db, 'users'), where("email", "==", user.email))
    // const snapshot = await getDocs(q);
    // const docRefId = snapshot.docs[0].id;
    // console.log(docRefId) // check

    // //gets sub collection
    // const subColRef = await getDocs(collection(db, "users", docRefId, "reminders"));
    // subColRef.forEach(d =>{
    //   console.log(d.data())
    // })

    //add doc to sub document
    // const docRef = await addDoc(collection(db, "users", docRefId, "reminders"), {
    //   test: "test2"
    // });
  }

}
