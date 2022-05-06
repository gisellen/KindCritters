import { Component, OnInit } from '@angular/core';
import { ReminderService } from '../reminder.service';

@Component({
  selector: 'app-creature',
  templateUrl: './creature.page.html',
  styleUrls: ['./creature.page.scss'],
})
export class CreaturePage implements OnInit {

  constructor(public reminderService: ReminderService) { }
  UncompleteReminderList: any = [];
  completedReminderList = [];
  reminderCount;
  unCompletedCount;

  getData(){
    
  }
  
  ngOnInit() {
    this.reminderService.debug();
  }

}
