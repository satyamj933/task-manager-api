const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'satyamj933@gmail.com',
        subject: 'Thanks for joining in!!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'satyamj933@gmail.com',
        subject: 'Thanks for being a part of us!!',
        text: `Goodbye ${name}.Is there anything we need to improve to make you our customer again.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}