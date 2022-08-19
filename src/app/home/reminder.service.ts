import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


import { db } from 'src/environments/environment';
import { getDocs, collection, query, where, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { getAuth } from "firebase/auth";

@Injectable({
  providedIn: 'root',
})

export class ReminderService {
  constructor(private storage: Storage) {
  }

  //FUNCTIONS
  async getUserId(){ //get id of user
    //get current user
    const auth = getAuth();
    const user = auth.currentUser;

    const q = query(collection(db, 'users'), where("email", "==", user.email))
    const snapshot = await getDocs(q);
    const docRefId = snapshot.docs[0].id;
    return docRefId
  }

  async getToDoItem(userId, item){ //get document using userid since reminder is a subcollection of the user
    const q2 = query(collection(db, "users", userId, "reminders"), where("itemName", "==", item.itemName));    const snapshot2 = await getDocs(q2);
    const docRefId = snapshot2.docs[0].id;
    return docRefId
  }

  async deleteReminder(item) { //delete item
    const userId = await this.getUserId()
    const ToDoId = await this.getToDoItem(userId, item)
    await deleteDoc(doc(db, "users", userId, "reminders", ToDoId));
  }

  async getAllReminders() { //get all reminders
    const docRefId = await this.getUserId()

    let array = []
    //gets sub collection
    const subColRef = await getDocs(collection(db, "users", docRefId, "reminders"));
    subColRef.forEach(d => {
      array.push(d.data())
    })
    return array;
  }

  async setCompleted(item) { //sets reminder as completed
    const userId = await this.getUserId()
    const ToDoId = await this.getToDoItem(userId, item)
    await updateDoc(doc(db, "users", userId, "reminders", ToDoId), item);
  }

  async updateReminder(item){
      const userId = await this.getUserId()
      const ToDoId = await this.getToDoItem(userId, item)
      await updateDoc(doc(db, "users", userId, "reminders", ToDoId), item);
  }

  async getUncompletedReminders() {
    const docRefId = await this.getUserId()


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
    const docRefId = await this.getUserId()

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


}

