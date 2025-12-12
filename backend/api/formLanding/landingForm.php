<?php

/*
header("Access-Control-Allow-Origin: *"); // <- permite requisições externas
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $escola = strip_tags($_POST['escola']);
    $cidade = strip_tags($_POST['cidade']);
    $responsavel = strip_tags($_POST['responsavel']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Email inválido.";
        exit;
    }

    $whatsapp = strip_tags($_POST['whatsapp']);
    $quantidade = strip_tags($_POST['quantidade']);
    $mensagem = strip_tags($_POST['mensagem']);

    $to = "ti@mgabrazil.com";
    $subject = "Nova mensagem de $escola";
    $body = "Escola: $escola\nCidade: $cidade\nCidade-UF: $cidade\nResponsável: $responsavel\nEmail: $email\nWhatsApp: $whatsapp\nQuantidade de Alunos: $quantidade\n\nMensagem:\n$mensagem";
    $headers = "From: jessiesousavi@gmail.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar mensagem.";
    }
} else {
    echo "Método não permitido.";
}
*/

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$env = parse_ini_file(__DIR__ . '/.env');

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $escola = strip_tags($_POST['escola']);
    $cidade = strip_tags($_POST['cidade']);
    $responsavel = strip_tags($_POST['responsavel']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $whatsapp = strip_tags($_POST['whatsapp']);
    $quantidade = strip_tags($_POST['quantidade']);
    $mensagem = strip_tags($_POST['mensagem']);

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP(); // ATIVA o SMTP
        $mail->Host = $env['MAIL_HOST'];
        $mail->Port = $env['MAIL_PORT'];
        $mail->SMTPAuth = true;
        $mail->Username = $env['MAIL_USER'];
        $mail->Password = $env['MAIL_PASS'];
        $mail->SMTPSecure = 'ssl'; // ou 'tls' se usar porta 587

        $mail->setFrom($env['MAIL_FROM'], 'Formulário do Site');
        $mail->addAddress($env['MAIL_TO']);
        $mail->addReplyTo($email, $responsavel);

        $mail->isHTML(false);
        $mail->Subject = "Nova mensagem de $escola";
        $mail->Body = "Escola: $escola\nCidade: $cidade\nResponsável: $responsavel\nEmail: $email\nWhatsApp: $whatsapp\nQuantidade de Alunos: $quantidade\n\nMensagem:\n$mensagem";

        $mail->send();
        echo "Mensagem enviada com sucesso!";
    } catch (Exception $e) {
        echo "Erro ao enviar: {$mail->ErrorInfo}";
    }

}

?>