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
  completedReminderList = [];

  constructor(
    public modalCtrl: ModalController,
    public reminderService: ReminderService
  ) {}

  ngOnInit() {
    this.UncompleteReminderList =
      this.reminderService.getUncompletedReminders(); // Get all Uncompleted reminders from storage
    this.completedReminderList = this.reminderService.getCompletedReminders();
    this.reminderList = this.reminderService.getAllReminders();
    // this.unCompletedCount = this.UncompleteReminderList.length
    // setTimeout(function(){this.unCompletedCount = this.getUncompletedReminderCount()}, 2000);
    // this.unCompletedCount)
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
    // this.unCompletedCount = this.UncompleteReminderList.length
    console.log(this.reminderService.getAllReminders());
  }

  async complete(key, value) {
    let newReminderObj = {
      itemName: value.itemName,
      itemDetails: value.itemDetails,
      itemDueDate: value.itemDueDate,
      itemPriority: value.itemPriority,
      itemCategory: value.itemCategory,
      isCompleted: true,
    };
    await this.reminderService.setCompleted(key, newReminderObj);
    this.getUncompletedReminders();
    this.getCompletedReminders();
  }

  onComplete(key, value, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.complete(key, value);
  }

  delete(key) {
    this.reminderService.deleteReminder(key);
    this.getUncompletedReminders();
    this.getCompletedReminders();
  }

  onDelete(key, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.delete(key);
  }

  getUncompletedReminders() {
    this.UncompleteReminderList =
      this.reminderService.getUncompletedReminders();
  }

  getCompletedReminders() {
    this.completedReminderList = this.reminderService.getCompletedReminders();
  }

  // DEBUG FUNCTIONS
  debug() {
    // this.reminderService.debug()
    // this.unCompletedCount = this.UncompleteReminderList.length
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
}
