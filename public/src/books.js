function findAuthorById(authors, id) {
  for (let i = 0; i < authors.length; i++) {
    if (authors[i].id === id) {
      return authors[i];
    }
  }
  return null;
}


function findBookById(books, id) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) {
      return books[i];
    }
  }
  return null;
}


function partitionBooksByBorrowedStatus(books) {
    let borrowedBooks = [];
    let returnedBooks = [];
    for (let i = 0; i < books.length; i++) {
        if(books[i].borrows.length > 0 && !books[i].borrows[0].returned)
            borrowedBooks.push(books[i]);
        else
            returnedBooks.push(books[i]);
    }
    return [borrowedBooks, returnedBooks];
}


function getBorrowersForBook(book, accounts) {
  let borrowers = [];
  for (let i = 0; i < book.borrows.length && i < 10; i++) {
    let account = accounts.find(account => account.id === book.borrows[i].id);
    account.returned = book.borrows[i].returned;
    borrowers.push(account);
  }
  return borrowers;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
