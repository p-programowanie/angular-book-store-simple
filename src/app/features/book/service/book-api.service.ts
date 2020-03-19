import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Book } from './../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  getBooks() {
    return of<Partial<Book>[]>([
      {
        id: 1,
        name: 'aaaa'
      }
    ]);
  }
}
