import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: 'users',
    loadChildren: () => import('./features/user/user.module').then(e => e.UserModule)
  }
];
