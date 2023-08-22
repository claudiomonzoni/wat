<?php

// Fetching Values from URL.
$nombre = $_POST['nombre1'];
$ciudad = $_POST['ciudad1'];
$email = $_POST['email1'];
// $celular = $_POST['celular1'];
$tel = $_POST['tel1'];
$msj = $_POST['msj1'];
$desde = "claudiomonzoni@hotmail.com";
// $desde = "claudiomonzoni@hotmail.com";
$from = "esau@000webhostapp.com";


$email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail.
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

$subject = "Contacto desde sitio web";
// To send HTML mail, the Content-type header must be set.
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .=  'Content-Type: text/html; charset=utf-8' . "\r\n";
//$headers .= 'Content-Type: text/HTML; charset=ISO-8859-1' . "\r\n";
$headers .= 'From:' . $from. "\r\n"; // Sender's Email
$headers .= 'Cc:' . "mixam_9@msn.com". "\r\n"; // Carbon copy to Sender
$template = '<div style="padding:50px; color:#000000;">
Datos del sitio.<br/>'
. 'Nombre: ' . $nombre . '<br/>'
. 'ciudad: ' . $ciudad . '<br/>'
. 'Teléfono: ' . $tel . '<br/>'
. 'msj de interes: ' . $msj. '<br/>'
. '<br/>'
. 'Datos de contacto desde Bezirk (Landing page 2023)  .</div>';
$sendmessage = "<div style=\"background-color:#ffffff; color:white;\">" . $template . "</div>";
// Message lines should not exceed 70 characters (PHP rule), so wrap it.
$sendmessage = wordwrap($sendmessage, 70);
// Send mail by PHP Mail Function. esau@bezirk.mx 
mail($desde, $subject, $sendmessage, $headers);
// mail("esau@bezirk.mx", $subject, $sendmessage, $headers);
echo "Gracias por contáctarnos " . $nombre . ", pronto nos pondremos en contacto contigo";

} else {
echo "<span>* Correo Invalido *</span>";
}
?>
