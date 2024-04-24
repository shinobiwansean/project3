const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // send HTML file on GET request
});

app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Create transporter
    const transporter = nodemailer.createTransport({
        service: 'YourEmailService', // e.g., 'gmail'
        auth: {
            user: 'your_email@example.com', // your email address
            pass: 'your_password' // your email password
        }
    });

    // Email data
    const mailOptions = {
        from: 'your_email@example.com', // sender address
        to: 'recipient@example.com', // recipient address
        subject: 'New Message from Contact Form',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Success');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
