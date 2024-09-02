/**
 * Author: Mert Özdemir <mertozdemircontact@icloud.com>
 */

// Import Statement of Third Party Modules
const nodemailer = require("nodemailer"); // "nodemailer" module

// "sendEmail" function that handles sending emails using the 'nodemailer' package.
const sendEmail = async (mailOptions) => {
    try{
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_SERVER_HOST,
        port: 587, //process.env.SMTP_SERVER_PORT,
        secure: false,
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_PASSWORD
        }
      });
      const result = await transporter.sendMail(mailOptions);
      console.log(result);
    }
    catch(err){
      console.log(err)
};
};

// Export statement of "sendEmail" function
module.exports = sendEmail;