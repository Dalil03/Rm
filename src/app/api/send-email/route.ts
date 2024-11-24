import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { prenom, nom, email, tel, adresse, superficie, typologie, description } = await request.json();

  if (!prenom || !nom || !email) {
    return NextResponse.json({ error: 'Les champs prénom, nom et email sont obligatoires.' }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO || 'destinataire@example.com',
      subject: 'Nouvelle demande de contact',
      text: `
        Prénom: ${prenom}
        Nom: ${nom}
        Email: ${email}
        Téléphone: ${tel}
        Adresse: ${adresse}
        Superficie: ${superficie}
        Typologie: ${typologie}
        Description: ${description}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email envoyé avec succès' }, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json({ error: 'Erreur interne lors de l\'envoi de l\'email.' }, { status: 500 });
  }
}
