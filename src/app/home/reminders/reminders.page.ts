import { Component, Input, OnInit } from '@angular/core';
import { IonItemSliding, ModalController } from '@ionic/angular';
import { ReminderService } from '../reminder.service';
import { AddReminderPage } from '../add-reminder/add-reminder.page';
import { UpdateReminderPage } from '../update-reminder/update-reminder.page';

import { query,collection,getDocs } from 'firebase/firestore';

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
    });
    return await modal.present();
  }

 async getAllReminders() {
    this.reminderList = await this.reminderService.getAllReminders();

  }

  async complete(item) {
    item.isCompleted = true;
    await this.reminderService.setCompleted(item);
    this.getUncompletedReminders();
    this.getCompletedReminders();
  }

  onComplete(item, slidingItem: IonItemSliding) {
    this.complete(item);
    slidingItem.close();
  }

  async onDelete(item, slidingItem: IonItemSliding) { //deletes reminder from view
    await this.reminderService.deleteReminder(item)
    await this.getUncompletedReminders();
    await this.getCompletedReminders();
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
  }

}
