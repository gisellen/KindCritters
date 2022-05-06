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
  count: any = 0;


  getData(){
    
    // this.count = await this.getUncompleteCount();
    // return count;
    // console.log(JSON.parse(this.UncompleteReminderList));
  }
  
  ngOnInit() {
    this.reminderService.debug();
  }

}
