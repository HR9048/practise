const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: "raghojiharish@gmail.com",
      pass: "ooxhmpzuflrjpqag"
   }
});

const mailOptions = {
   from: "raghojiharish@gmail.com",
   to: "waseemahmed116@gmail.com",
   subject: "Nodemailer Test",
   html: "Test sending Gmail using Node JS"
};

transporter.sendMail(mailOptions, function(error, info){
   if(error){
      console.log(error);
   }else{
      console.log("Email sent: " + info.response);
   }
});