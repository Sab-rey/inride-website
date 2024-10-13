const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    'TON_CLIENT_ID', // Ton Client ID Google
    'TON_CLIENT_SECRET', // Ton Secret Client Google
    'https://developers.google.com/oauthplayground' // Redirection URL
);

oauth2Client.setCredentials({
    refresh_token: 'TON_REFRESH_TOKEN'
});

const sendVerificationEmail = async (toEmail, code) => {
    const accessToken = await oauth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: 'TON_EMAIL@gmail.com',
            clientId: 'TON_CLIENT_ID',
            clientSecret: 'TON_CLIENT_SECRET',
            refreshToken: 'TON_REFRESH_TOKEN',
            accessToken: accessToken.token
        }
    });

    const mailOptions = {
        from: 'TON_EMAIL@gmail.com',
        to: toEmail,
        subject: 'Code de vérification',
        text: `Votre code de vérification est: ${code}`
    };

    transport.sendMail(mailOptions, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email envoyé:', result.response);
        }
        transport.close();
    });
};

module.exports = sendVerificationEmail;
