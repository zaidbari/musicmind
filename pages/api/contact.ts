export {}
// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import nodemailer from 'nodemailer'
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
// 	message: string
// }

// type EmailPayload = {
// 	to: string
// 	subject: string
// 	html: string
// }

// export const sendEmail = async (data: EmailPayload) => {
// 	var transport = nodemailer.createTransport({
// 		host: 'sandbox.smtp.mailtrap.io',
// 		port: 2525,
// 		auth: {
// 			user: '73cd99d55215a1',
// 			pass: '9856499b93d7bf'
// 		}
// 	})

// 	return await transport.sendMail({
// 		from: 'contact@musicmind.me <MusicMind>',
// 		...data
// 	})
// }

// export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
// 	if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' })

// 	const d = new FormData()
// 	d.append('name', req.body.name)
// 	d.append('email', req.body.email)
// 	d.append('inquiry', req.body.inquiry)
// 	d.append('company', req.body.company)

// 	try {
// 		const result = await fetch('https://musicminduat.dk/instorex/contact/', {
// 			method: 'POST',
// 			body: d
// 		})

// 		const data = await result.json()
// 		console.log(JSON.stringify(data))
// 	} catch (err: any) {
// 		console.log('------------------------------------ c -----------------------------------')
// 		console.log(err)
// 		console.log('------------------------------------ c -----------------------------------')
// 	}

// 	res.status(200).json({ message: 'Success' })
// }
