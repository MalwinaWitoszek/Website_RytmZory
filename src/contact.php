<?php
if( isset($_POST['n']) && isset($_POST['e']) && isset($_POST['m']) ){
	$n = $_POST['n']; // HINT: use preg_replace() to filter the data
	$e = $_POST['e'];
	$m = nl2br($_POST['m']);
	$to = "you@domain.com";
	$from = $e;
	$subject = 'Contact Form Message';
	$message = '<b>Name:</b> '.$n.' <br><b>Email:</b> '.$e.' <p>'.$m.'</p>';
	$headers = "From: $from\n";
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";
	if( mail($to, $subject, $message, $headers) ){
		echo "success";
	} else {
		echo "The server failed to send the message. Please try again later.";
	}
}
?>


    // if ($_SERVER["REQUEST_METHOD"] == "POST") {

        # FIX: Replace this email with recipient email
        // $mail_to = "demo@gmail.com";

        # Sender Data
        // $subject = trim($_POST["subject"]);
        // $name = str_replace(array("\r","\n"),array(" "," ") , strip_tags(trim($_POST["name"])));
        // $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        // $phone = trim($_POST["phone"]);
        // $message = trim($_POST["message"]);

        // if ( empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL) OR empty($phone) OR empty($subject) OR empty($message)) {
        //     # Set a 400 (bad request) response code and exit.
        //     http_response_code(400);
        //     echo "Please complete the form and try again.";
        //     exit;
        // }

        # Mail Content
        // $content = "Name: $name\n";
        // $content .= "Email: $email\n\n";
        // $content .= "Phone: $phone\n";
        // $content .= "Message:\n$message\n";

        // # email headers.
        // $headers = "From: $name &lt;$email&gt;";

        // # Send the email.
        // $success = mail($mail_to, $subject, $content, $headers);
        // if ($success) {
        //     # Set a 200 (okay) response code.
        //     http_response_code(200);
        //     echo "Thank You! Your message has been sent.";
        // } else {
        //     # Set a 500 (internal server error) response code.
        //     http_response_code(500);
        //     echo "Oops! Something went wrong, we couldn't send your message.";
        // }

        // } else {
        //     # Not a POST request, set a 403 (forbidden) response code.
        //     http_response_code(403);
        //     echo "There was a problem with your submission, please try again.";
        // }
?>