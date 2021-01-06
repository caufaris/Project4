<?php
$x=$_POST['e-mail'];
$y=$_POST['question'];
$username="root";
$password="";
$dbname="db1";


$conn= new mysqli ($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected succesfully. <br>";
$sql = "INSERT INTO `people` (`e-mail`, `question`) VALUES ('$x', '$y')";

if ($conn->query($sql) === TRUE) {
    echo "Your message has been sent successfully. <br>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>


<html>
<link rel="stylesheet" href="style2.css">

    <title>Message sent!</title>
    <br>
    <br>
    <br>
    <a href="index.php">Click here</a>
</html>
