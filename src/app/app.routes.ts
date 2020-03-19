import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: 'books',
    loadChildren: () => import('./features/book/book.module').then(e => e.BookModule)
  }
];
