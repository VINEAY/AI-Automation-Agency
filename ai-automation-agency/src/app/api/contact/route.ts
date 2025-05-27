import { NextResponse } from 'next/server';

// For a real implementation, you would use a package like nodemailer
// or a service like SendGrid, Mailgun, etc.
// Example with nodemailer would look like:
// import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Get form data
    const formData = await request.json();
    const { name, email, subject, message, phone, company, service } = formData;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here's where you would normally send the email
    // For demonstration, we'll log it and return success

    // Example with nodemailer (commented out)
    /*
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"NexusAI Contact" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: `Contact Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Company: ${company || 'Not provided'}
        Service Interest: ${service || 'Not specified'}

        Message:
        ${message}
      `,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Service Interest:</strong> ${service || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
    */

    // Log form data to console (for demonstration purposes)
    console.log('Form submission received:', {
      name,
      email,
      phone,
      company,
      subject,
      service,
      message,
    });

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully! We\'ll get back to you soon.',
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
