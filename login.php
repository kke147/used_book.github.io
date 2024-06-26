<?php
// 连接数据库（请根据您的实际数据库配置进行修改）
$servername = "localhost";
$username = "root";
$password = "2731";
$dbname = "registration_database";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("连接失败: ". $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // 在此处进行数据库查询以验证用户名和密码是否匹配
    $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // 登录成功
        echo "success";
    } else {
        // 登录失败
        echo "failure";
    }
}

$conn->close();
?>