import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { bookRoutes } from './book.routes';
import { BookListComponent } from './components/book-list/book-list.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(bookRoutes)],
  declarations: [BookListComponent]
})
export class BookModule { }
