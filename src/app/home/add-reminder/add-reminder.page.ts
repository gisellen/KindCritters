import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ReminderService } from '../reminder.service';

import { db } from 'src/environments/environment';
import { getDocs, collection, query, where, addDoc } from 'firebase/firestore'
import { getAuth } from "firebase/auth";


@Component({
  selector: 'app-add-reminder',
  templateUrl: './add-reminder.page.html',
  styleUrls: ['./add-reminder.page.scss'],
})
export class AddReminderPage implements OnInit {
  categories = [];
  categorySelectedCategory;

  newReminderObj = {};
  itemName;
  itemDetails;
  itemDueDate;
  itemPriority;
  itemCategory;

  constructor(
    public modalCtrl: ModalController,
    public reminderService: ReminderService
  ) { }

  ngOnInit() {
    this.categories.push('work');
    this.categories.push('personal');
  }

  async add() {
    this.newReminderObj = {
      itemName: this.itemName,
      itemDetails: this.itemDetails,
      itemDueDate: this.itemDueDate,
      itemPriority: this.itemPriority,
      itemCategory: this.categorySelectedCategory,
      isCompleted: false
    };
    const uid = this.itemName + this.itemDueDate;

    if (uid) {
      //getting current user
      const auth = getAuth();
      const user = auth.currentUser;
      //get user ID
      const q = query(collection(db, 'users'), where("email", "==", user.email))
      const snapshot = await getDocs(q);
      const docRefId = snapshot.docs[0].id;

      //add doc to sub document
      const docRef = await addDoc(collection(db, "users", docRefId, "reminders"),
        this.newReminderObj
      );
    } else {
      console.log('cannot save empty task');
    }

    this.dismis();
  }

  selectedCategory(index) {
    this.categorySelectedCategory = this.categories[index];
  }

  async dismis() {
    await this.modalCtrl.dismiss(this.newReminderObj);
  }
}
