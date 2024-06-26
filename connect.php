<?php
// 连接数据库
$servername = "localhost";
$username = "root";
$password = "2731";
$dbname = "used_book";

$conn = new mysqli($servername, $username, $password, $dbname);

// 检查连接是否成功
if ($conn->connect_error) {
    die("连接失败: ". $conn->connect_error);
}

// 查询数据库获取书籍数据
$sql = "SELECT * FROM books";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<div class='book'>";
        echo "<h3>".$row["title"]."</h3>";
        echo "<p>作者：".$row["author"]."</p>";
        echo "<p>分类：".$row["category"]."</p>";
        echo "<img src='".$row["image_url"]."' alt='".$row["title"]."' />";
        echo "</div>";
} else {
    echo "未找到书籍数据";
}

$conn->close();
?>