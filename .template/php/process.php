<?php

    // Your Email Address
    $youremail = "Your Email Adress Here";

    // Register Form
    if ( isset($_POST['email']) && isset($_POST['name']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ) {

        // Detect & Prevent Header Injections
        $test = "/(content-type|bcc:|cc:|to:)/i";
        foreach ( $_POST as $key => $val ) {
            if ( preg_match( $test, $val ) ) {
                exit;
            }
        }

        // Email Format
        $body  =    "New User Registration \n\n";
        $body .=    "========== \n\n";
        $body .=    "Name:  $_POST[name] \n\n";
        $body .=    "Email:  $_POST[email] \n\n";
        $body .=    "Telephone:  $_POST[telephone] \n\n";
        $body .=    "Ticket Type:  $_POST[ticket] \n\n";

        //Send email
        mail( $youremail, "New User Registration", $body, "From:" . $_POST['email'] );

    }

    // Subscribe Form
    if( isset($_POST['subscriber']) && filter_var($_POST['subscriber'], FILTER_VALIDATE_EMAIL) ) {
        $data = $_POST['subscriber'] . ";" . "\n";
        $ret = file_put_contents('subscribers.txt', $data, FILE_APPEND | LOCK_EX);
        if($ret === false) {
            die('There was an error writing this file');
        }
    } else {
        die('No post data to process');
    }

?>