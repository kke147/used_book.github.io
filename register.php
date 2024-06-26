<?php
// 连接数据库
$servername = "localhost";
$username = "root";
$password = "2731";
$dbname = "registration_database";

$conn = new mysqli($servername, $username, $password, $dbname);

// 检查连接是否成功
if ($conn->connect_error) {
    die("连接失败: ". $conn->connect_error);
}

// 获取表单提交的数据
$username = $_POST['username'];
$password = $_POST['password'];

// 假设验证通过，将数据插入到数据库中
$sql = "INSERT INTO users (username, password, email) VALUES ('$username', '$password', '$email')";

if ($conn->query($sql) === TRUE) {
    echo "success";
} else {
    echo "注册失败: ". $conn->error;
}

$conn->close();
?>