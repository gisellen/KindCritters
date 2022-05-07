import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable, of } from 'rxjs'; // only need to import from rxjs

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
    // this.storage.remove(key);
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
    // return reminders;
  }

  setCompleted(key, newValue){
    this.storage.set(key, newValue);
    this.getAllReminders();
  }

  getUncompletedReminders(){
    let reminders: any = [];
    this.storage.forEach((value, key, index) => {
      if(value.isCompleted === false){
      reminders.push({ key: value, value: key });
    }
    });
    // console.log(reminders)
    return reminders;
  }

  getCompletedReminders(){
    let reminders: any = [];
    this.storage.forEach((value, key, index) => {
      if(value.isCompleted === true){
      reminders.push({key: value, value: key});
      // console.log(index)
    }
    })
    // reminders.push({1: 'hi'})
    // reminders.push(2)
    return reminders;
  }


  getData(): Promise<any>{
    return this.storage.create().then(() => {
      let reminders = [];
      this.storage.forEach( (value, key, index) => {
        if(value.isCompleted === true){
        reminders.push({key: value , value: key});
        console.log(reminders)
        console.log(reminders.length)
      }
      }).then(() =>{
          return reminders;
        })
        console.log(reminders.length)
        return reminders;
      })
  }

  getReminderCount(){
    this.storage.length().then(result =>
      console.log(result))
  }

  getReminders(){
    let reminders: any = [];
    this.storage.forEach((value, key, index) => {
      reminders.push({ key: value, value: key });
    });
    console.log(reminders)
  }

  //calculate for mood system
  mood(){
    let mood: any;
    let completed = this.getCompletedReminders();
    let total = this.getAllReminders();

    mood = completed.length/total.length;
    console.log(mood)
  }

  // Create storage for reminders
  async init() {
    await this.storage.create();
  }
  

  //debug function
debug(){
  this.storage.clear()
}
}

