import { Component, OnInit } from '@angular/core';
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

  constructor(
    public modalCtrl: ModalController,
    public reminderService: ReminderService
  ) {}

  ngOnInit() {
    this.reminderList = this.reminderService.getAllReminders(); // Get all reminders from storage
  }

  async addNewItem() {
    const modal = await this.modalCtrl.create({
      component: AddReminderPage,
    });
    modal.onDidDismiss().then((newReminder) => {
      this.getAllReminders();
      console.log(newReminder);
    });
    return await modal.present();
  }

  getAllReminders() {
    this.reminderList = this.reminderService.getAllReminders();
    console.log(this.reminderList);
  }

  complete(key) {
    this.reminderService.completeReminder(key);
    this.getAllReminders();
  }

  delete(key) {
    this.reminderService.deleteReminder(key);
    this.getAllReminders();
  }

  async update(selectedReminder) {
    const modal = await this.modalCtrl.create({
      component: UpdateReminderPage,
      componentProps: { reminder: selectedReminder },
    });

    modal.onDidDismiss().then(() => {
      this.getAllReminders();
    });
    return await modal.present();
  }
}
