import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'reminders',
        loadChildren: () =>
          import('./reminders/reminders.module').then(
            (m) => m.RemindersPageModule
          ),
      },
      {
        path: 'creature',
        loadChildren: () =>
          import('./creature/creature.module').then(
            (m) => m.CreaturePageModule
          ),
      },
      {
        path: 'new-reminder',
        loadChildren: () =>
          import('./add-reminder/add-reminder.module').then(
            (m) => m.AddReminderPageModule
          ),
      },
      {
        path: 'stats',
        loadChildren: () =>
          import('./stats/stats.module').then((m) => m.StatsPageModule),
      },
      {
        path: 'reminders',
        loadChildren: () =>
          import('./reminders/reminders.module').then(
            (m) => m.RemindersPageModule
          ),
      },
    ],
  },
  {
    path: ':reminder-detail',
    loadChildren: () =>
      import('./reminder-detail/reminder-detail.module').then(
        (m) => m.ReminderDetailPageModule
      ),
  },
  {
    path: '',
    redirectTo: 'tabs/reminders',
    pathMatch: 'full',
  },
  {
    path: 'update-reminder',
    loadChildren: () =>
      import('./update-reminder/update-reminder.module').then(
        (m) => m.UpdateReminderPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
