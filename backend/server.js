import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());
app.use(express.json());

// ---------- Business Inquiry Endpoint ----------
app.post("/send-business-inquiry", async (req, res) => {
  const { companyName, contactPerson, email, phone, businessType, website, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "elsavferati@gmail.com",       // your Gmail
        pass: "dwnl yymr bfqc zqig",         // Gmail app password
      },
    });

    await transporter.sendMail({
      from: `"Business Inquiry" <elsavferati@gmail.com>`,
      to: "elsavferati@gmail.com",
      subject: `New Business Inquiry from ${contactPerson}`,
      html: `
        <h2>New Business Inquiry</h2>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Contact Person:</strong> ${contactPerson}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Business Type:</strong> ${businessType}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

// ---------- Apply Form Endpoint ----------
app.post("/send-apply-form", async (req, res) => {
  const { name, email, company, linkedin, country, description } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "elsavferati@gmail.com",       // your Gmail
        pass: "dwnl yymr bfqc zqig",         // Gmail app password
      },
    });

    await transporter.sendMail({
      from: `"Apply Form" <elsavferati@gmail.com>`,
      to: "elsavferati@gmail.com",
      subject: `New Project Inquiry from ${name}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company/Phone:</strong> ${company}</p>
        <p><strong>LinkedIn:</strong> ${linkedin}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Description:</strong></p>
        <p>${description}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
