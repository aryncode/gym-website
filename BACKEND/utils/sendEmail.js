import nodemailer from 'nodemailer';

export const sendEmail = async(options)=>{
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD,
        },
        tls: {
            rejectUnauthorized: false,
        },
        family: 4, // Forces Nodemailer to use IPv4 instead of IPv6
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