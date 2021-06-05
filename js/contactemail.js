function sendEmail(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData);
    email_html = template;
    email_html = email_html.replace('@user_name@', formObject.name || '');
    email_html = email_html.replace('@user_email@', formObject.email || '');
    email_html = email_html.replace('@user_subject@', formObject.subject || '');
    email_html = email_html.replace('@user_message@', formObject.message || '');
    Email.send({
        Host: "smtp.google.com",
        Username: "skyworldtours.satish@gmail.com",
        Password: "Max@123456",
        To: 'skyworldtours.satish@gmail.com',
        From: "noreply@skyworldtours.com",
        Subject: 'We got New response from ' + formObject.name,
        Body: email_html,
    }).then(
        message => {
            console.log(message);
            alert("Message Submitted Successfully. Thank you!")
        }
    ).catch(e => {
        console.log('e: ', e);
    });
}

var template = `
<head>
    <title>Welcome</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <style type="text/css">
        #outlook a {
            padding: 0;
        }
        
        .ReadMsgBody {
            width: 100%;
        }
        
        .ExternalClass {
            width: 100%;
        }
        
        .ExternalClass * {
            line-height: 100%;
        }
        
        body {
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        
        table,
        td {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
        }
        
        p {
            display: block;
            margin: 13px 0;
        }
    </style>
    <!--[if !mso]><!-->
    <style type="text/css">
        @media only screen and (max-width:480px) {
            /* @-ms-viewport {
                width: 320px;
            } */
            @viewport {
                width: 320px;
            }
        }
    </style>
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
    <style type="text/css">
        @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
    </style>
    <!--<![endif]-->
    <style type="text/css">
        @media only screen and (min-width:480px) {
            .mj-column-per-100,
            * [aria-labelledby="mj-column-per-100"] {
                width: 100% !important;
            }
        }
    </style>
</head>

<body style="background: #F9F9F9;">
    <div style="background-color:#F9F9F9;">
        <style type="text/css">
            html,
            body,
            * {
                -webkit-text-size-adjust: none;
                text-size-adjust: none;
            }
            
            a {
                color: #1EB0F4;
                text-decoration: none;
            }
            
            a:hover {
                text-decoration: underline;
            }
        </style>
        <div style="margin:0px auto;max-width:640px;background:transparent;">
            <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:transparent;" align="center" border="0">
                <tbody>
                    <tr>
                        <td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:40px 0px;">

                            <div aria-labelledby="mj-column-per-100" class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;">
                                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                        <tr>
                                            <td style="word-break:break-word;font-size:0px;padding:0px;" align="center">
                                                <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="width:138px;">
                                                                <a href="#" target="_blank"></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div style="max-width:640px;margin:0 auto;box-shadow:0px 1px 5px rgba(0,0,0,0.1);border-radius:4px;overflow:hidden">
            <div style="margin:0px auto;max-width:640px;background:#002633 ">

                <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#002633 " align="center" border="0">
                    <tbody>
                        <tr>
                            <td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:57px;background: #002633 ">

                                <div style="cursor:auto;color:white;font-family:Whitney, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:36px;font-weight:600;line-height:36px;text-align:center;">
                                    Message Form</div>

                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>

            <div style="margin:0px auto;max-width:640px;background:#ffffff;">
                <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#ffffff;" align="center" border="0">
                    <tbody>
                        <tr>
                            <td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:40px 70px;">

                                <div aria-labelledby="mj-column-per-100" class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;">
                                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                        <tbody>
                                            <tr>
                                                <td style="word-break:break-word;font-size:0px;padding:0px 0px 20px;" align="left">
                                                    <div style="cursor:auto;color:#737F8D;font-family:Whitney, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:16px;line-height:24px;text-align:left;">
                                                            <p>
                                                             Name: @user_name@
                                                            </p>
                                                            <p>
                                                             Email: @user_email@
                                                            </p>
                                                            <p>
                                                             Subject: @user_subject@
                                                            </p>
                                                            <p>
                                                             Message: @user_message@
                                                            </p>


                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>

                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>

            </div>
            <div style="margin:0px auto;max-width:640px;background:transparent;">
                <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:transparent;" align="center" border="0">
                    <tbody>
                        <tr>
                            <td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:0px;">

                                <div aria-labelledby="mj-column-per-100" class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;">
                                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                        <tbody>
                                            <tr>
                                                <td style="word-break:break-word;font-size:0px;">
                                                    <div style="font-size:1px;line-height:12px;">&nbsp;</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>  
            <div style="margin:0px auto;max-width:640px;background:transparent;">
                <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:transparent;" align="center" border="0">
                    <tbody>
                        <tr>
                            <td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:20px 0px;">

                                <div aria-labelledby="mj-column-per-100" class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;">
                                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                        <tbody>
                                            <tr>
                                                <td style="word-break:break-word;font-size:0px;padding:0px;" align="center">
                                                    <div style="cursor:auto;color:#99AAB5;font-family:Whitney, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:12px;line-height:24px;text-align:center;">
                                                        Sent by Sky Tour And Travels
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="word-break:break-word;font-size:0px;padding:0px;" align="center">
                                                    <div style="cursor:auto;color:#99AAB5;font-family:Whitney, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:12px;line-height:24px;text-align:center;">
                                                        2021
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>

</body>
`