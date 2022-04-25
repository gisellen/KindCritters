import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/tabs/reminders',
    pathMatch: 'full',
  },
  {
    path: 'home/tabs',
    redirectTo: 'home/tabs/reminders',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthPageModule),
  },
  {
    path: 'add-reminder',
    loadChildren: () =>
      import('./home/add-reminder/add-reminder.module').then(
        (m) => m.AddReminderPageModule
      ),
  },
  {
    path: 'update-reminder',
    loadChildren: () =>
      import('./home/update-reminder/update-reminder.module').then(
        (m) => m.UpdateReminderPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
