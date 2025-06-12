<?php 
// demo-php.php

// Allow POST requests only
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['error' => 'Only POST requests are allowed']);
    exit;
}

// Read the raw POST data
$rawData = file_get_contents("php://input");

// Decode JSON payload
$data = json_decode($rawData, true);

// Check if decoding worked
if (!$data) {
    http_response_code(400); // Bad Request
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

// Respond with received data
$response = [
    $data,
    'status' => true,
];

header('Content-Type: application/json');
echo json_encode($response);
?>
