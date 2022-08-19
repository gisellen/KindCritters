import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home', 'reminders']);

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthPageModule),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'reminders',
    loadChildren: () =>
      import('./home/reminders/reminders.module').then(
        (m) => m.RemindersPageModule
      ),
    ...canActivate(redirectUnauthorizedToLogin),
  },
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
