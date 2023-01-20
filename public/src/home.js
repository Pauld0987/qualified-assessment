function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let count = 0;
  books.forEach(book => {
    count += book.borrows.filter(borrow => !borrow.returned).length;
  });
  return count;
}


function getMostCommonGenres(books) {
  const genres = books.reduce((acc, book) => {
    if(acc[book.genre]) {
      acc[book.genre]++;
    } else {
      acc[book.genre] = 1;
    }
    return acc;
  }, {});
  return Object.entries(genres).sort((a, b) => b[1] - a[1]).slice(0,5).map(([name, count]) => { return { name, count } });
}


function getMostPopularBooks(books) {
  const booksPopularity = books.reduce((acc, book) => {
    acc[book.id] = book.borrows.length;
    return acc;
  }, {});
  return Object.entries(booksPopularity)
    .sort((a, b) => b[1] - a[1])
    .slice(0,5)
    .map(([id, count]) => {
      const book = books.find(b => b.id === id)
      return { name: book.title, count };
    });
}



function getMostPopularAuthors(books, authors) {
  const authorsPopularity = books.reduce((acc, book) => {
    if(acc[book.authorId]) {
      acc[book.authorId] += book.borrows.length;
    } else {
      acc[book.authorId] = book.borrows.length;
    }
    return acc;
  }, {});
  const topAuthors = Object.entries(authorsPopularity).sort((a, b) => b[1] - a[1]).slice(0,5);
  return topAuthors.map(([authorId, count]) => {
    const { first, last } = authors.find(author => author.id === Number(authorId)).name;
    return { name: `${first} ${last}`, count };
  });
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
