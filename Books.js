/* 
maak een class van boeken waar je een titel, auteur en aantal pagina's in kan zetten.
maak een class van bibliotheek die een owner heeft en waar je de totale aantal pagina's kan opvragen, de totale aantal boeken en de gemiddelde aantal pagina's per boek.
je kan ook een boek toevoegen, en een boek verwijderen op basis van de titel.
De title is benoemd zoals hieronder, de author is een random string en de pages is een random nummer tussen 50 en 1000.

Voorbeeld:
Library {
  owner: 'Jorne',
  books: [
    Book { title: 'title-1', author: 'szh7i6vh3fp', pages: 836 },
    Book { title: 'title-2', author: '7yl4xwhk35j', pages: 170 },
    Book { title: 'title-4', author: 'romaywrg3w', pages: 756 },
    Book { title: 'title-5', author: 'wfa463vcheb', pages: 439 },
    Book { title: 'title-6', author: 'nz5ycbi7ifb', pages: 954 },
    Book { title: 'title-7', author: 'v6m7v5fx9k', pages: 417 },
    Book { title: 'title-8', author: 'ibdz3dynf8j', pages: 748 },
    Book { title: 'title-9', author: 'wzcicfyefaq', pages: 618 },
    Book { title: 'title-10', author: '5t4h5j96vda', pages: 655 }
  ]
}
There are 10 books in the library of Jorne
The average pages in the libaray are 577.7 pages
The total of pages are 4861

*/

class Book {
  constructor(title, author, pages) {
    (this.title = title), (this.author = author), (this.pages = pages);
  }
}
class Library {
  constructor(owner) {
    (this.owner = owner), (this.books = []);
  }
  addBook(title, author, pages) {
    const addBook = new Book(title, author, pages);
    this.books.push(addBook);
  }
  removeBook(title) {
    return (this.books = this.books.filter(function (title) {
      return book.title !== title;
    }));
  }
  totalBooks(nr) {
    return this.books.length;
  }
  totalPages(nr) {
    return this.books.reduce(function (total, current) {
      return total + this.books.pages;
    }, 0);
  }
  averagePages(nr) {
    const totalPages = this.totalPages;
    const totalBooks = this.totalBooks;
    return totalPages / totalBooks;
  }
}

const library = new Library("Wouter");

for (let i = 0; i <= 5; i++) {
  const title = `title-${i}`;
  const author = Math.random().toString(36).substring(2);
  const pages = Math.floor(Math.random() * (1000 - 50) + 50);
  console.log(title);
  console.log(author);
  console.log(pages);
  library.addBook(title, author, pages);
}
console.log(library);
