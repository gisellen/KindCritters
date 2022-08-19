import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
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

  newReminderObj;
  itemName;
  itemDetails;
  itemDueDate;
  itemPriority;
  itemCategory;
  
  constructor(
    public modalCtrl: ModalController,
    public reminderService: ReminderService,
    public params: NavParams
  ) {}

  ngOnInit() {
    this.newReminderObj = this.params.get('reminder')

    this.categories.push('work');
    this.categories.push('personal');
    this.itemName = this.newReminderObj.itemName;
    this.itemDetails = this.newReminderObj.itemDetails;
    this.itemDueDate = this.newReminderObj.itemDueDate;
    this.itemPriority = this.newReminderObj.itemPriority;
    this.categorySelectedCategory = this.newReminderObj.itemCategory;
  }

  selectCategory(index) {
    this.categorySelectedCategory = this.categories[index];
  }

  async dismiss() {
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
    await this.reminderService.updateReminder(this.newReminderObj);
    this.dismiss();
  }
}
