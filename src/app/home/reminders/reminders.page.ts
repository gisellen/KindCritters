import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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
  reminderList = [];
  UncompleteReminderList = [];
  completedReminderList = [];
  reminderCount;


  constructor(
    public modalCtrl: ModalController,
    public reminderService: ReminderService
  ) {}

  ngOnInit() {
    this.UncompleteReminderList = this.reminderService.getUncompletedReminders(); // Get all Uncompleted reminders from storage
    this.completedReminderList = this.reminderService.getCompletedReminders();
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

  getAllReminders() {
    this.reminderList = this.reminderService.getAllReminders();
    console.log(this.reminderList);
  }

  getReminderCount(){
    this.reminderCount = this.reminderService.getReminderCount();
  }
  
  async complete(key, value) {
    let newReminderObj = {
      itemName: value.itemName,
      itemDetails: value.itemDetails,
      itemDueDate: value.itemDueDate,
      itemPriority: value.itemPriority,
      itemCategory: value.itemCategory,
      isCompleted: true
    };
    await this.reminderService.setCompleted(key, newReminderObj);
    this.getUncompletedReminders();
    this.getCompletedReminders();
  }

  delete(key) {
    this.reminderService.deleteReminder(key);
    this.getUncompletedReminders();
    this.getCompletedReminders();
  }

  getUncompletedReminders(){
    this.UncompleteReminderList = this.reminderService.getUncompletedReminders();
  }

  getCompletedReminders(){
    this.completedReminderList = this.reminderService.getCompletedReminders();
  }

// DEBUG FUNCTIONS
  debug(){
    // this.reminderService.debug()
    console.log(this.UncompleteReminderList)
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
}
