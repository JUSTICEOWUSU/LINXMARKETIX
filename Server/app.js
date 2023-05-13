const express = require('express');
require('dotenv').config();
const nodemailer = require('nodemailer');
const path = require('path');

// create an Express app
const app = express();

// configure middleware to parse JSON request bodies
app.use(express.json());

// configure a route to handle form submissions
app.post('/contact', async (req, res) => {
    const { name,
        email,
        number,
        location,
        organization,
        website,
        service,
        budget,
        summary, } = req.body;
    try {
        // create a nodemailer transporter object
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: `${process.env.EMAIL}`,
                pass:  `${process.env.KEY}`,
            },
        });

        // send the email using the transporter
        await transporter.sendMail({
            from: `${process.env.EMAIL}`,
            to: `${process.env.EMAIL}`,
            subject: 'NEW CLIENT  FROM LINXMARKETIX',
            text: `Name: ${name}\nEmail: ${email}\nNumber: ${number}\nLocation: ${location}\nService: ${service}\nBudget: ${budget}\nOrganization: ${organization}\nWebsite: ${website}\nProject Summary: ${summary}`,
        });

        // send a success response to the client
        res.send({ message: 'Message sent successfully!' });
    } catch (err) {
        console.log(err.message)
        // send an error response to the client
        res.status(500).send({ error: 'Failed to send message!' });
    }
});

app.use(express.static(path.join(__dirname, '..', 'Client', 'dist')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..',  'Client', 'dist', 'index.html'));
});

// start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

