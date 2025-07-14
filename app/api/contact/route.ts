import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, subject, message, consent } = body;



    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message || !consent) {
      return NextResponse.json(
        { error: 'All fields are required and consent must be given' },
        { status: 400 }
      );
    }

    // Send email using Resend
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // You'll need to update this with your verified domain
      to: ['info@alohapencil.com'], // business email
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>This message was sent from the Aloha Pencil Company contact form.</small></p>
      `,
    });

    // Optional: Send confirmation email to the user
    await resend.emails.send({
      from: 'Aloha Pencil Company <onboarding@resend.dev>', // You'll need to update this with your verified domain
      to: [email],
      subject: 'Thank you for contacting Aloha Pencil Company',
      html: `
        <h2>Thank you for your message!</h2>
        <p>Dear ${firstName},</p>
        <p>We have received your message and will get back to you soon.</p>
        <p><strong>Your message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>Best regards,<br>Aloha Pencil Company</p>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 