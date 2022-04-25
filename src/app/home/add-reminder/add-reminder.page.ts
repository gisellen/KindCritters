import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ReminderService } from '../reminder.service';

@Component({
  selector: 'app-add-reminder',
  templateUrl: './add-reminder.page.html',
  styleUrls: ['./add-reminder.page.scss'],
})
export class AddReminderPage implements OnInit {
  newReminderObj = {};
  itemName: any;
  itemDetails: any;
  itemDueDate: any;
  itemPriority: any;

  constructor(
    public modalCtrl: ModalController,
    public reminderService: ReminderService
  ) {}

  ngOnInit() {}

  async add() {
    this.newReminderObj = {
      itemName: this.itemName,
      itemDetails: this.itemDetails,
      itemDueDate: this.itemDueDate,
      itemPriority: this.itemPriority,
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

  async dismis() {
    await this.modalCtrl.dismiss(this.newReminderObj);
    console.log('dismis');
  }
}
