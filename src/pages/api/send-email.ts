import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";
import rateLimit from "express-rate-limit";

// Middleware pour limiter les requêtes (Rate Limiting)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // Fenêtre de 15 minutes
  max: 10, // Maximum 10 requêtes par IP dans la fenêtre
  message: "Trop de requêtes. Veuillez réessayer plus tard.",
});

// Fonction pour exécuter le middleware
async function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

// Validation des entrées pour éviter les injections malveillantes
function validateInput(value: string, fieldName: string): string {
  if (!value || typeof value !== "string" || value.trim() === "") {
    throw new Error(`Le champ "${fieldName}" est requis.`);
  }
  if (/['"<>;]/.test(value)) {
    throw new Error(`Le champ "${fieldName}" contient des caractères invalides.`);
  }
  return value.trim();
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Ajout de headers de sécurité
    res.setHeader("Content-Security-Policy", "default-src 'self'");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "DENY");

    // Autoriser uniquement la méthode POST
    if (req.method !== "POST") {
      res.setHeader("Allow", ["POST"]);
      return res.status(405).json({ message: "Méthode non autorisée" });
    }

    // Limitation des requêtes
    await runMiddleware(req, res, limiter);

    // Validation des données
    const prenom = validateInput(req.body.prenom, "Prénom");
    const nom = validateInput(req.body.nom, "Nom");
    const email = validateInput(req.body.email, "Email");
    const tel = validateInput(req.body.tel, "Téléphone");
    const adresse = validateInput(req.body.adresse, "Adresse");
    const typologie = validateInput(req.body.typologie, "Typologie");
    const description = validateInput(req.body.description, "Description");

    // Configuration du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Options de l'email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: "Nouvelle demande de contact",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #f54242;">Nouvelle demande de contact</h2>
          <p><strong>Prénom :</strong> ${prenom}</p>
          <p><strong>Nom :</strong> ${nom}</p>
          <p><strong>Email :</strong> <a href="mailto:${email}" style="color: #1a73e8;">${email}</a></p>
          <p><strong>Téléphone :</strong> ${tel}</p>
          <p><strong>Adresse :</strong> ${adresse}</p>
          <p><strong>Typologie :</strong> ${typologie}</p>
          <p><strong>Description :</strong></p>
          <p style="background: #f9f9f9; padding: 10px; border-radius: 5px;">${description}</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <footer style="text-align: center; color: #888; font-size: 12px;">
            Ce message a été généré automatiquement. Merci de ne pas y répondre.
          </footer>
        </div>
      `,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email envoyé avec succès !" });
  } catch (error: any) {
    console.error("Erreur lors de l'envoi d'email :", error.message); // Masque les informations sensibles
    res.status(400).json({ error: error.message || "Une erreur est survenue." });
  }
}
