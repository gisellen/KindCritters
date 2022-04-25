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
  newReminderObj = {};
  itemName: any;
  itemDetails: any;
  itemDueDate: any;
  itemPriority: any;
  constructor(
    public modalCtrl: ModalController,
    public reminderService: ReminderService
  ) {}

  ngOnInit() {
    this.itemName = this.reminder.value.itemName;
    this.itemDetails = this.reminder.value.itemDetails;
    this.itemDueDate = this.reminder.value.itemDueDate;
    this.itemPriority = this.reminder.value.itemPriority;
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
    };
    // eslint-disable-next-line prefer-const
    let uid = this.reminder.key;
    await this.reminderService.updateReminder(uid, this.newReminderObj);
    this.dismis();
  }
}
