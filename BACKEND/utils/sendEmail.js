import nodemailer from 'nodemailer';

export const sendEmail = async(options)=>{
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        service: process.env.SMTP_SERVICE,
        secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    });
    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: options.email,
        subject: options.subject,
        text:`${options.name}\n\n${options.message}\n\n Email of user who sent the message: ${options.userEmail}` ,
    }
    console.log("Attempting to send email with options:", options);
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to:", options.email);
}