export class Book {
  name: string;
  author: string;
  year: number;
  pages: number;
  isPrinted: boolean;

  constructor(
    name: string,
    author: string,
    year: number,
    pages: number,
    isPrinted: boolean,
  ) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.isPrinted = isPrinted;
  }

  getName(): string {
    return this.name;
  }

  getAuthor(): string {
    return this.author;
  }

  getYear(): number {
    return this.year;
  }

  getPages(): number {
    return this.pages;
  }

  getIsPrinted(): boolean {
    return this.isPrinted;
  }

  setName(newName: string): void {
    this.name = newName;
  }

  setAuthor(newAuthor: string): void {
    this.author = newAuthor;
  }

  setYear(newYear: number): void {
    this.year = newYear;
  }

  setPages(newPages: number): void {
    this.pages = newPages;
  }

  setIsPrinted(newIsPrinted: boolean): void {
    this.isPrinted = newIsPrinted;
  }

  logBook(): void {
    console.log(`Název knihy: ${this.getName()}`);
    console.log(`Autor: ${this.getAuthor()}`);
    console.log(`Rok vydání: ${this.getYear()}`);
    console.log(`Počet stran: ${this.getPages()}`);
    console.log(`Tištěná kniha: ${this.getIsPrinted() ? "Ano" : "Ne"}`);
    console.log("--------------------------");
  }
}
