const mysql = require('mysql');

// 创建与MySQL数据库的连接
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2731',
    database: 'books'
});

// 连接到数据库
connection.connect();

// 查询数据库以获取书籍信息
connection.query('SELECT * FROM books', (error, results, fields) => {
    if (error) {
        console.error('Error fetching data from the database:', error);
        return;
    }

    // 将书籍信息显示在HTML中
    const bookList = document.querySelector('.book-list');
    results.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.innerHTML = `
      <h3>${book.title}</h3>
      <img src="${book.image_url}" alt="${book.title}">
      <p>${book.description}</p>
    `;
        bookList.appendChild(bookItem);
    });
});

// 关闭数据库连接
connection.end();
