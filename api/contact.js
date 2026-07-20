import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

// Fix for __dirname in ESM modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Manually load the .env.local file from your root project directory
dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });
  }



const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

  console.log({
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS ? "Loaded" : "Missing",
  EMAIL_TO: process.env.EMAIL_TO,
});

  try {
    const { name, email, company, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message:
          "Name, Email, Subject and Message are required.",
      });
    }

    // Send email to company
    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `[Website Inquiry] ${subject}`,
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px">
          <h2>New Contact Form Submission</h2>

          <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;width:100%;">
            <tr>
              <td><strong>Name</strong></td>
              <td>${name}</td>
            </tr>

            <tr>
              <td><strong>Email</strong></td>
              <td>${email}</td>
            </tr>

            <tr>
              <td><strong>Company</strong></td>
              <td>${company || "-"}</td>
            </tr>

            <tr>
              <td><strong>Phone</strong></td>
              <td>${phone || "-"}</td>
            </tr>

            <tr>
              <td><strong>Subject</strong></td>
              <td>${subject}</td>
            </tr>

            <tr>
              <td><strong>Message</strong></td>
              <td>${message}</td>
            </tr>
          </table>
        </div>
      `,
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: `"Technovision Industries" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank You for Contacting Technovision Industries",
      html: `
        <div style="
          font-family:Arial,sans-serif;
          max-width:650px;
          margin:auto;
          padding:30px;
          border:1px solid #e5e7eb;
          border-radius:10px;
        ">

          <h2 style="color:#0B57D0;">
            Thank You for Contacting Technovision Industries
          </h2>

          <p>Dear <strong>${name}</strong>,</p>

          <p>
            Thank you for reaching out to
            <strong>Technovision Industries</strong>.
          </p>

          <p>
            We have successfully received your inquiry.
            Our team will review your request and get back to you as soon as possible.
          </p>

          <hr style="margin:20px 0;" />

          <h3>Your Submitted Details</h3>

          <p><strong>Subject:</strong> ${subject}</p>

          <blockquote style="
            background:#f5f5f5;
            padding:15px;
            border-left:4px solid #0B57D0;
          ">
            ${message}
          </blockquote>

          <br>

          <p>Best Regards,</p>

          <p>
            <strong>Technovision Industries</strong><br>
            Bengaluru, Karnataka<br>
            📧 info@technovisionindustries.com<br>
            🌐 https://www.technovisionindustries.com
          </p>

        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Email sent successfully.",
    });

  } catch (error) {
    console.error("Mail Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send email.",
      error: error.message,
    });
  }
}