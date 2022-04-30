import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ReminderService } from '../reminder.service';

@Component({
  selector: 'app-update-reminder',
  templateUrl: './update-reminder.page.html',
  styleUrls: ['./update-reminder.page.scss'],
})
export class UpdateReminderPage implements OnInit {
  @Input() reminder;
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

    this.itemName = this.reminder.key.itemName;
    this.itemDetails = this.reminder.key.itemDetails;
    this.itemDueDate = this.reminder.key.itemDueDate;
    this.itemPriority = this.reminder.key.itemPriority;
    this.categorySelectedCategory = this.reminder.key.itemCategory;
  }
  selectCategory(index) {
    this.categorySelectedCategory = this.categories[index];
    console.log(this.categorySelectedCategory);
  }

  async dismis() {
    await this.modalCtrl.dismiss();
  }

  async update() {
    this.newReminderObj = {
      itemName: this.itemName,
      itemDetails: this.itemDetails,
      itemDueDate: this.itemDueDate,
      itemPriority: this.itemPriority,
      itemCategory: this.categorySelectedCategory,
      isCompleted: false
    };
    // eslint-disable-next-line prefer-const
    let uid = this.reminder.value;
    await this.reminderService.updateReminder(uid, this.newReminderObj);
    this.dismis();
  }
}
