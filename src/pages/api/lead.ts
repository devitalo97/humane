import CourseEmail from '@/components/ui/emails/CourseEmail'
import { mailGateway } from '@/lib/gateway/email/nodemailer'
import { render } from '@react-email/render'
import type { NextApiRequest, NextApiResponse } from 'next'

type Body = {
  name: string
  phone: string
  email: string
  enterprise_name: string
  payment_method: string
  payment_type: string
  project_name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body: Body = req.body
    const emailHtml = render(CourseEmail(body));
    const result = await mailGateway.sendMail({
      from: "dev.italo.souza@gmail.com",
      to: ["dev.italo.souza@gmail.com", "luizcisassessment@gmail.com"],

      subject: `${new Date().toLocaleString()} - ${body.project_name}`,
      html: emailHtml
    })
    res.status(200).json({ result })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err })
  }
}