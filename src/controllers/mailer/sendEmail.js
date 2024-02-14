const nodemailer = require("nodemailer")
const messageTemplate = require("./message");

const sendEmail = async (userData, messageData) => {

    // Prepare message

    const { name, email, } = userData
    const { subject, body, link } = messageData
    const html = messageTemplate( name, body, link)

    // Create transport config

    const config = {
        host: "smtp-relay.brevo.com",
        port: 2525,
        secure: false,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
        tls: { rejectUnauthorized: false },
    }

    // Create message

    const message = {
        from: "Animalia helpdesk@animalia.com",
        to: email,
        subject,
        html
    }

    // Send email

    const transport = nodemailer.createTransport(config)
    return await transport.sendMail(message)
}

module.exports = sendEmail