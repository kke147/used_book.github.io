// ���� register.php �ɹ�ע��󷵻ص���Ӧ�а��� "success"
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // ��ֹ��Ĭ���ύ��Ϊ

    // ��ȡ�û���������͵����ʼ�������ֵ
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;

    // ���ͱ����ݵ�������
    var formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    fetch('register.php', {
        method: 'POST',
        body: formData
    })
  .then(response => response.text())
  .then(data => {
        if (data ==='success') {
            // ע��ɹ�����ת����¼ҳ��
            window.location.href = 'https://kke147.github.io/used_book.github.io/';
        } else {
            // ע��ʧ�ܣ���ʾ������Ϣ
            document.querySelector('.error-message').innerHTML = 'ע��ʧ�ܣ�����������Ϣ��';
        }
    })
  .catch(error => {
        console.error('��������:', error);
    });
});