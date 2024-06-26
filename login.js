// 假设 login.php 成功登录后返回的响应中包含 "success"
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    // 获取用户名和密码输入框的值
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // 发送表单数据到服务器
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
            // 登录成功，跳转到首页
            window.location.href = 'https://kke147.github.io/used_book.github.io/';
        } else {
            // 登录失败，显示错误消息
            document.querySelector('.error-message').innerHTML = '登录失败，请检查用户名和密码。';
        }
    })
  .catch(error => {
        console.error('发生错误:', error);
    });
});