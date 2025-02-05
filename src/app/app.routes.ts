import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./screens/screens.module').then(m => m.ScreensModule)
  }
];
