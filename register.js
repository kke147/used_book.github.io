// 假设 register.php 成功注册后返回的响应中包含 "success"
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    // 获取用户名、密码和电子邮件输入框的值
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;

    // 发送表单数据到服务器
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
            // 注册成功，跳转到登录页面
            window.location.href = 'https://kke147.github.io/used_book.github.io/';
        } else {
            // 注册失败，显示错误消息
            document.querySelector('.error-message').innerHTML = '注册失败，请检查输入信息。';
        }
    })
  .catch(error => {
        console.error('发生错误:', error);
    });
});