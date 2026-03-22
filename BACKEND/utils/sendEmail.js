import nodemailer from 'nodemailer';

export const sendEmail = async(options)=>{
    const transporter = nodemailer.createTransport(
        {
  service: process.env.SMTP_SERVICE,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
}
    )
    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: options.email,
        subject: options.subject,
        text:`${options.name}\n\n${options.message}\n\n Email of user who sent the message: ${options.userEmail}` ,
    }
    await transporter.sendMail(mailOptions);
}