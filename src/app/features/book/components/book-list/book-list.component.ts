import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.model';
import { BookApiService } from './../../service/book-api.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent implements OnInit {

  $books!: Observable<Partial<Book>[]>;

  constructor(private bookApiService: BookApiService) { }

  ngOnInit(): void {
    this.$books = this.bookApiService.getBooks();
  }

}
