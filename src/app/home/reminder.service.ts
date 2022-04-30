import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})

export class ReminderService {
  constructor(private storage: Storage) {
    this.init();
  }

  addReminder(key, value) {
    this.storage.set(key, value);
  }

  completeReminder(key) {
    this.storage.keys();
    this.storage.remove(key);
  }

  deleteReminder(key) {
    this.storage.remove(key);
  }

  updateReminder(key, newValue) {
    this.storage.set(key, newValue);
    this.getAllReminders();
  }

  getReminder(key) {
    return this.storage.get(key);
  }

  getAllReminders() {
    // eslint-disable-next-line prefer-const
    let reminders: any = [];
    this.storage.forEach((value, key, index) => {
      reminders.push({ key: value, value: key });
    });
    return reminders;
  }

  getReminderCount(){
    this.storage.length().then(result =>
      console.log(result))
  }
  // Create storage for reminders
  async init() {
    await this.storage.create();
  }
}
