import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReminderService } from '../reminder.service';

@Component({
  selector: 'app-creature',
  templateUrl: './creature.page.html',
  styleUrls: ['./creature.page.scss'],
})
export class CreaturePage implements OnInit {
  constructor(
    public reminderService: ReminderService, 
    public activatedRoute: ActivatedRoute) 
  { }
  uncompleteReminderList: any = [];
  completedReminderList: any = [];
  totalReminders: any = [];
  count: any;
  mood: any = [];

  getData(){
    this.uncompleteReminderList = this.reminderService.getUncompletedReminders(); // Get all Uncompleted reminders from storage
    this.completedReminderList = this.reminderService.getCompletedReminders();
    this.totalReminders = this.reminderService.getAllReminders();

  }
  
  ngOnInit() {
    this.activatedRoute.url.subscribe(url => {
      this.getData();
      
    })
  }

  UF(){
    this.reminderService.debug();
  }
}
