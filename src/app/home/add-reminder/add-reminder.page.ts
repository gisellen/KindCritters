import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ReminderService } from '../reminder.service';

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
  ) {}

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
    console.log(this.newReminderObj);
    const uid = this.itemName + this.itemDueDate;

    if (uid) {
      await this.reminderService.addReminder(uid, this.newReminderObj);
    } else {
      console.log('cannot save empty task');
    }

    this.dismis();
  }

  selectedCategory(index) {
    this.categorySelectedCategory = this.categories[index];
    console.log(this.categorySelectedCategory);
  }

  async dismis() {
    await this.modalCtrl.dismiss(this.newReminderObj);
    console.log('dismis');
  }
}
