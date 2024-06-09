function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = function () {
    if (this.isRead) {
      console.log(this.title, true);
    } else {
      console.log(false);
    }
  };
}

const book1 = new Book("Night", "Elie Weisel", 105);
const book2 = new Book("The Lord of the Rings", "JRR Tolkie", 1045);

book1.isRead();
