import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function sendContactEmail(data: {
  nome: string
  email: string
  telefono?: string
  tipoProgetto: string
  messaggio: string
}) {
  await transporter.sendMail({
    from: `"Red_grafic Website" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL,
    replyTo: data.email,
    subject: `Nuovo contatto: ${data.tipoProgetto} — ${data.nome}`,
    html: `
      <h2>Nuovo messaggio da Red_grafic</h2>
      <table cellpadding="8" style="border-collapse:collapse;width:100%">
        <tr><td><strong>Nome:</strong></td><td>${data.nome}</td></tr>
        <tr><td><strong>Email:</strong></td><td>${data.email}</td></tr>
        <tr><td><strong>Telefono:</strong></td><td>${data.telefono || '—'}</td></tr>
        <tr><td><strong>Tipo progetto:</strong></td><td>${data.tipoProgetto}</td></tr>
        <tr><td><strong>Messaggio:</strong></td><td>${data.messaggio}</td></tr>
      </table>
    `,
  })
}

export async function sendBookingEmail(data: {
  tipoProgetto: string
  descrizione: string
  budget: string
  dataConsegna?: string
  riferimenti?: string
  nome: string
  email: string
  telefono?: string
}) {
  await transporter.sendMail({
    from: `"Red_grafic Prenotazione" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL,
    replyTo: data.email,
    subject: `Nuova prenotazione: ${data.tipoProgetto} — ${data.nome}`,
    html: `
      <h2>Nuova richiesta di prenotazione</h2>
      <table cellpadding="8" style="border-collapse:collapse;width:100%">
        <tr><td><strong>Tipo progetto:</strong></td><td>${data.tipoProgetto}</td></tr>
        <tr><td><strong>Descrizione:</strong></td><td>${data.descrizione}</td></tr>
        <tr><td><strong>Budget:</strong></td><td>${data.budget}</td></tr>
        <tr><td><strong>Data consegna:</strong></td><td>${data.dataConsegna || 'Non specificata'}</td></tr>
        <tr><td><strong>Riferimenti:</strong></td><td>${data.riferimenti || '—'}</td></tr>
        <tr><td><strong>Nome:</strong></td><td>${data.nome}</td></tr>
        <tr><td><strong>Email:</strong></td><td>${data.email}</td></tr>
        <tr><td><strong>Telefono:</strong></td><td>${data.telefono || '—'}</td></tr>
      </table>
    `,
  })
}
