<?php
// �������ݿ�
$servername = "localhost";
$username = "root";
$password = "2731";
$dbname = "used_book";

$conn = new mysqli($servername, $username, $password, $dbname);

// ��������Ƿ�ɹ�
if ($conn->connect_error) {
    die("����ʧ��: ". $conn->connect_error);
}

// ��ѯ���ݿ��ȡ�鼮����
$sql = "SELECT * FROM books";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<div class='book'>";
        echo "<h3>".$row["title"]."</h3>";
        echo "<p>���ߣ�".$row["author"]."</p>";
        echo "<p>���ࣺ".$row["category"]."</p>";
        echo "<img src='".$row["image_url"]."' alt='".$row["title"]."' />";
        echo "</div>";
} else {
    echo "δ�ҵ��鼮����";
}

$conn->close();
?>