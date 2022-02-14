class Book {
  constructor(author, title) {
    this.author = author;
    this.title = title;
  }

  show() {
    console.log(this);
  }
}

class BookTec extends Book {
  constructor(author, title, category = "Computing") {
    super(author, title);
    this.category = category;
  }
}

let book1 = new BookTec("J.Perez", "learn Angular");

book1.editorial = "Ra-ma";
book1.show();
