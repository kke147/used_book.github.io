// ��ȡ�鼮�б�Ԫ��
const bookList = document.getElementById('book-list');

// ��ȡ������Ԫ��
const searchInput = document.querySelector('input[type="text"]');

// Ϊ��������������¼�������
searchInput.addEventListener('input', function () {
    const searchText = this.value.toLowerCase();
    const books = bookList.getElementsByClassName('book');

    for (let i = 0; i < books.length; i++) {
        const bookTitle = books[i].querySelector('h3').innerText.toLowerCase();
        if (bookTitle.includes(searchText)) {
            books[i].style.display = 'block';
        } else {
            books[i].style.display = 'none';
        }
    }
});
