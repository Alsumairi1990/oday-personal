import Handlebars from "handlebars";
import nodemailer from "nodemailer";



import { activationTemplate } from "@/utils/email-templates/activation"
import { resetPasswordTemplate } from "@/utils/email-templates/resetPass";




// import { resetPasswordTemplate } from "./emailTemplates/resetPass";

export async function sendMail({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body: string;
}) {
  const { SMTP_GMAIL,SMTP_GMAIL_PASS } = process.env;
  //
    // var transport = nodemailer.createTransport({
    //     host: "sandbox.smtp.mailtrap.io",
    //     port: 2525,
    //     auth: {
    //     user: "50d34df012d3c7",
    //     pass: "d66a9e9552bfa7"
    //     }
    // });

   console.log('Email:', SMTP_GMAIL);   
  console.log('Email Pass:', SMTP_GMAIL_PASS); 
  const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: SMTP_GMAIL,
    pass: SMTP_GMAIL_PASS
  }
});
  try {
    const testResult = await transport.verify();
    console.log("Test Result Of Transport", testResult);
  } catch (e) {
    console.log(e);
  }
  try {
    const sendResult = await transport.sendMail({
      from: SMTP_GMAIL,
      to,
      subject,
      html: body,
    });
    console.log({ sendResult });
    return sendResult;
  } catch (e) {
    console.log(e);
  }
}

export function compileActivationTemplate(name: string, url: string) {
  console.log("---------------------- indide compileActivationTemplate ----------------");
  const template = Handlebars.compile(activationTemplate);
  const htmlBody = template({
    name,
    url,
  });
  console.log("---------------------- after calling Handlebars  ---------------- HTMLBODY"+htmlBody);
  return htmlBody;
}

export function compileResetPassTemplate(name: string, url: string) {
  const template = Handlebars.compile(resetPasswordTemplate);
  const htmlBody = template({
    name,
    url,
  });
  return htmlBody;
}



// export function compileResetPassTemplate(name: string, url: string) {
//   const template = Handlebars.compile(resetPasswordTemplate);
//   const htmlBody = template({
//     name,
//     url,
//   });
//   return htmlBody;
// }