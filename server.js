// Application API: persists learner enquiries and sends admin notifications.
import 'dotenv/config'
import express from 'express'
import nodemailer from 'nodemailer'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const app = express()
const port = Number(process.env.API_PORT || 3001)
const adminEmail = process.env.ADMIN_EMAIL || 'info@2pnm.co.za'
const currentDirectory = path.dirname(fileURLToPath(import.meta.url))
const dataDirectory = path.join(currentDirectory, 'data')
const submissionsFile = path.join(dataDirectory, 'applications.json')

app.use(express.json({ limit: '32kb' }))

const readSubmissions = async () => {
  try {
    return JSON.parse(await readFile(submissionsFile, 'utf8'))
  } catch (error) {
    if (error.code === 'ENOENT') return []
    throw error
  }
}

const saveSubmission = async (submission) => {
  await mkdir(dataDirectory, { recursive: true })
  const submissions = await readSubmissions()
  submissions.push(submission)
  await writeFile(submissionsFile, JSON.stringify(submissions, null, 2), 'utf8')
}

const createTransporter = () => {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) return null
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
  })
}

app.post('/api/applications', async (request, response) => {
  const { name, email, phone, programme, message = '' } = request.body
  if (!name || !email || !phone || !programme) return response.status(400).json({ error: 'Please complete all required fields.' })

  const submission = { id: crypto.randomUUID(), name, email, phone, programme, message, submittedAt: new Date().toISOString() }
  try {
    await saveSubmission(submission)
    const transporter = createTransporter()
    let emailSent = false
    if (transporter) {
      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: adminEmail,
        replyTo: email,
        subject: `New TWOPNM application enquiry: ${programme}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProgramme: ${programme}\nMessage: ${message || 'None'}\nSubmitted: ${submission.submittedAt}`,
      })
      emailSent = true
    }
    return response.status(201).json({ ok: true, emailSent })
  } catch (error) {
    console.error('Application submission failed:', error)
    return response.status(500).json({ error: 'Your enquiry could not be completed. Please try again.' })
  }
})

app.listen(port, () => console.log(`Application API listening on http://localhost:${port}`))
