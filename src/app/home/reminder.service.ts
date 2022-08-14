import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


import { db } from 'src/environments/environment';
import { getDocs, collection, query, where, deleteDoc } from 'firebase/firestore'
import { getAuth } from "firebase/auth";

@Injectable({
  providedIn: 'root',
})

export class ReminderService {
  constructor(private storage: Storage) {
    this.init();
  }

  //getting current user
  auth = getAuth();
  user = this.auth.currentUser;

  //FUNCTIONS
  completeReminder(key) {
    console.log(key)
    // this.storage.keys();
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

  async getAllReminders() {
    const q = query(collection(db, 'users'), where("email", "==", this.user.email))
    const snapshot = await getDocs(q);
    const docRefId = snapshot.docs[0].id;

    let array = []
    //gets sub collection
    const subColRef = await getDocs(collection(db, "users", docRefId, "reminders"));
    subColRef.forEach(d => {
      array.push(d.data())
    })
    return array;
  }

  setCompleted(key, newValue) {
    this.storage.set(key, newValue);
    this.getAllReminders();
  }

  async getUncompletedReminders() {
    const q = query(collection(db, 'users'), where("email", "==", this.user.email))
    const snapshot = await getDocs(q);
    const docRefId = snapshot.docs[0].id;

    let array = []
    //gets sub collection
    const q2 = await query(collection(db, "users", docRefId, "reminders"), where("isCompleted", "==", false));
    const snapshotUncompleted = await getDocs(q2);
    snapshotUncompleted.forEach(d => {
      array.push(d.data())
    })
    return array;
  }

  async getCompletedReminders() {
    const q = query(collection(db, 'users'), where("email", "==", this.user.email))
    const snapshot = await getDocs(q);
    const docRefId = snapshot.docs[0].id;

    let array = []
    //gets sub collection
    const q2 = await query(collection(db, "users", docRefId, "reminders"), where("isCompleted", "==", true));
    const snapshotUncompleted = await getDocs(q2);
    snapshotUncompleted.forEach(d => {
      array.push(d.data())
    })
    return array;
  }

  getReminderCount() {
    this.storage.length().then(result =>
      console.log(result))
  }

  getReminders() {
    let reminders: any = [];
    this.storage.forEach((value, key, index) => {
      reminders.push({ key: value, value: key });
    });
    console.log(reminders)
  }

  // Create storage for reminders
  async init() {
    await this.storage.create();
  }


  //debug function
  debug() {
    this.storage.clear()
  }
}

