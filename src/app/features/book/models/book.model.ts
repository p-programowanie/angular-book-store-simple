export enum BookType {
  Comic = 1,
  Crime,
  Drama,
  Fantasy,
  Romance,
  Science
}

export interface Book {
  id: number;
  name: string;
  author: string;
  pagesAmount: string;
  publisher: string;
  type: BookType;
  publishDate: Date;
  ISBN: string;
}
