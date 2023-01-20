function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}


function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => a.name.last.localeCompare(b.name.last));
}


function getTotalNumberOfBorrows(account, books) {
  let count = 0;
  books.forEach(book => {
    count += book.borrows.filter(borrow => borrow.id === account.id).length;
  });
  return count;
}


function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter(book => book.borrows.find(borrow => borrow.id === account.id && !borrow.returned))
    .map(book => {
      const author = authors.find(author => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount
};
