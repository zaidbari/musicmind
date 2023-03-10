import { Line } from '@/line'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import type { NextPage } from 'next'
import Head from 'next/head'
import { SyntheticEvent, useState } from 'react'
import tService from '@/images/senior3.jpg'
import Image from 'next/future/image'

const Contact: NextPage = (): JSX.Element => {
	const [name, setName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [company, setCompany] = useState<string>('')
	const [message, setMessage] = useState<string>('')

	const [nameError, setNameError] = useState<string>('')
	const [emailError, setEmailError] = useState<string>('')
	const [messageError, setMessageError] = useState<string>('')
	const [companyError, setCompanyError] = useState<string>('')

	const [successMessage, setSuccessMessage] = useState<string>('')
	const [errorMessage, setErrorMessage] = useState<string>('')
	const [loading, setLoading] = useState<boolean>(false)

	const handleFormSubmit = async (e: SyntheticEvent) => {
		e.preventDefault()

		setNameError('')
		setEmailError('')
		setMessageError('')
		setCompanyError('')
		setSuccessMessage('')
		setErrorMessage('')

		setLoading(true)

		if (name.length < 2) {
			setNameError('name is too short')
			setLoading(false)
			return
		}

		if (email.length < 5) {
			setEmailError('email is too short')
			setLoading(false)
			return
		}

		if (message.length < 10) {
			setMessageError('message is too short')
			setLoading(false)
			return
		}

		try {
			const body = new FormData()
			body.append('name', name)
			body.append('email', email)
			body.append('message', message)
			body.append('company', company)

			const result = await fetch('https://www.musicminduat.dk/instorex/contact/', {
				method: 'POST',
				body: body
			})

			const data = await result.json()
			console.log(data)
			if (data.success == 'Sent') {
				setSuccessMessage('Vi har modtaget din email! vi vender retur så hurtigt som muligt.')
				setName('')
				setEmail('')
				setMessage('')
				setCompany('')
			} else
				setErrorMessage(
					'Noget gik galt. venligst prøv igen senere, ellers er du meget velkommen til at skrive os en email på Kontakt@instorex.dk, så er vi sikre på at vi har modtaget din email'
				)
		} catch (error: any) {
			console.log(error.message)
			setName('')
			setEmail('')
			setMessage('')
			setCompany('')
			setErrorMessage(
				'Noget gik galt. venligst prøv igen senere, ellers er du meget velkommen til at skrive os en email på Kontakt@instorex.dk, så er vi sikre på at vi har modtaget din email'
			)
		} finally {
			setLoading(false)
		}
	}
	return (
		<>
			<Head>
				<title>KONTAKT | MUSICMIND</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<section className="mx-auto grid w-[90%] grid-cols-1 items-center gap-x-32 gap-y-10 py-20 lg:grid-cols-2">
				<div>
					<Image
						sizes="100vw"
						src={tService}
						className="block h-auto w-full rounded-2xl drop-shadow-2xl grayscale-[25%]"
						alt={'MusicMind UI'}
						priority={true}
						placeholder={'blur'}
					/>
				</div>
				<div>
					<h1 className="text-4xl font-bold">
						<span className="text-orange-500">Kontakt</span> us
					</h1>
					<Line />

					<form onSubmit={handleFormSubmit}>
						<div className="flex flex-col gap-y-5">
							<div className="flex flex-col gap-y-2">
								<label htmlFor="name" className="text-lg font-bold">
									Navn
								</label>
								<input
									onChange={(e) => setName(e.target.value)}
									type="text"
									name="name"
									id="name"
									className="rounded-md border border-gray-300 bg-[#151928]/30 p-2"
									value={name}
									required
								/>
								{nameError && <p className="text-red-500">{nameError}</p>}
							</div>
							<div className="flex flex-col gap-y-2">
								<label htmlFor="email" className="text-lg font-bold">
									Email
								</label>
								<input
									onChange={(e) => setEmail(e.target.value)}
									type="email"
									name="email"
									id="email"
									className="rounded-md border border-gray-300 bg-[#151928]/30 p-2"
									value={email}
									required
								/>
								{emailError && <p className="text-red-500">{emailError}</p>}
							</div>
							<div className="flex flex-col gap-y-2">
								<label htmlFor="company" className="text-lg font-bold">
									Company
								</label>
								<input
									onChange={(e) => setCompany(e.target.value)}
									type="text"
									name="company"
									id="company"
									className="rounded-md border border-gray-300 bg-[#151928]/30 p-2"
									value={company}
									required
								/>
								{companyError && <p className="text-red-500">{companyError}</p>}
							</div>
							<div className="flex flex-col gap-y-2">
								<label htmlFor="message" className="text-lg font-bold">
									Message
								</label>
								<textarea
									onChange={(e) => setMessage(e.target.value)}
									name="message"
									id="message"
									rows={10}
									className="rounded-md border border-gray-300 bg-[#151928]/30 p-2"
									value={message}
									required
								></textarea>
								{messageError && <p className="text-red-500">{messageError}</p>}
							</div>
							<button type="submit" className="rounded-md bg-orange-500 p-2 text-center font-bold text-white">
								{loading ? <ArrowPathIcon className="mx-auto inline-block h-5 w-5 animate-spin" /> : 'Send'}
							</button>
							{successMessage && <p className="text-green-500">{successMessage}</p>}
							{errorMessage && <p className="text-rose-500">{errorMessage}</p>}
						</div>
					</form>
				</div>
			</section>
		</>
	)
}

export default Contact
