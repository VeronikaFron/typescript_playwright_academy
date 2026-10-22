import { Book } from "./book.ts";

const books: Book[] = [
  new Book("Harry Potter a Kámen mudrců", "J. K. Rowling", 1997, 223, true),
  new Book("1984", "George Orwell", 1949, 328, true),
  new Book("Malý princ", "Antoine de Saint-Exupéry", 1943, 96, false),
];

// Oprava počtu stran druhé knihy
books[1].setPages(330);

// Výpis všech knih
books.forEach((book) => {
  book.logBook();
});
