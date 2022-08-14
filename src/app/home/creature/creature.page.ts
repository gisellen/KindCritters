import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReminderService } from '../reminder.service';

@Component({
  selector: 'app-creature',
  templateUrl: './creature.page.html',
  styleUrls: ['./creature.page.scss'],
})
export class CreaturePage implements OnInit {
  uncompleteReminderList: any = [];
  completedReminderList: any = [];
  totalReminders: any = [];
  mood: any;

  constructor(
    public reminderService: ReminderService,
    public activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    await this.getUncompletedReminders(); // Get all Uncompleted reminders from storage
    await this.getCompletedReminders(); // get all completed reminders from storage
    await this.getTotalReminders();
    await this.calculateMood()
  }

  //get uncompleted reminders
  async getUncompletedReminders() {
    this.uncompleteReminderList = await this.reminderService.getUncompletedReminders();


  }

  //gets completed reminders
  async getCompletedReminders() {
    this.completedReminderList = await this.reminderService.getCompletedReminders();
  }

  async getTotalReminders() {
    this.totalReminders = await this.reminderService.getAllReminders();
  }


  calculateMood() {
    this.mood = this.completedReminderList.length / this.totalReminders.length
    console.log(this.mood)
  }
}
