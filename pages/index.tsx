import type { NextPage } from 'next'
import Head from 'next/head'

import HomeSections from '@/sections/home'

const Home: NextPage = (): JSX.Element => {
	return (
		<>
			<Head>
				<title>HOME | MUSICMIND</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<HomeSections.Header />
				<HomeSections.Idea />
				<HomeSections.Work />
				<HomeSections.About />
				<HomeSections.History />
				<HomeSections.Playlist />
			</main>
			<section className="mx-auto w-[90%] rounded-xl bg-[#151928]/30 p-10 md:text-center">
				<p className="italic">
					EN SÆRLIG TAK TIL PLEJECENTER SØLUND
					<br /> Ideen til Musicmind opstod tilbage i 2015 i samarbejde med Plejecenter Sølund, under ledelse af
					Centerchef Jan Nybo Jensen og hans team, Rikke Jensen og Ulla Lau Hyldgård, ud fra en klar vision om styrke
					den musikalske profil og det pædagogiske arbejde med henblik på at øge livskvaliteten hos beboerne og
					arbejdsmiljøet hos personalet. Over en 2-årig periode blev visionen til virkelighed i tæt samarbejde mellem
					Sølunds ledelse, plejepersonale og Musicmind programmører, jurist og projektledere. Samarbejdet med Sølund
					grundlagde ikke kun konceptet, men også den præmis som vi stadig den dag praktiserer i vores fortsatte
					udvikling af Musicmind, med at inddrage kunder og samarbejdspartnere i udviklingsarbejdet.
				</p>
			</section>
		</>
	)
}

export default Home
