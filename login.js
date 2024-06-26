// ���� login.php �ɹ���¼�󷵻ص���Ӧ�а��� "success"
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // ��ֹ��Ĭ���ύ��Ϊ

    // ��ȡ�û���������������ֵ
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // ���ͱ����ݵ�������
    var formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    fetch('login.php', {
        method: 'POST',
        body: formData
    })
  .then(response => response.text())
  .then(data => {
        if (data ==='success') {
            // ��¼�ɹ�����ת����ҳ
            window.location.href = 'https://kke147.github.io/used_book.github.io/';
        } else {
            // ��¼ʧ�ܣ���ʾ������Ϣ
            document.querySelector('.error-message').innerHTML = '��¼ʧ�ܣ������û��������롣';
        }
    })
  .catch(error => {
        console.error('��������:', error);
    });
});