import { Route } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';

export const bookRoutes: Route[] = [
  {
    path: '',
    component: BookListComponent
  }
];
