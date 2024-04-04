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
				{/* <HomeSections.About /> */}
				{/* <HomeSections.History /> */}
				<HomeSections.Playlist />
			</main>
			<section className="mx-auto w-[90%] rounded-xl bg-[#151928]/30 p-10 md:text-center">
				<p className="text-xl"> EN SÆRLIG TAK TIL PLEJECENTER SØLUND</p>
				<p className="italic">
					Idéen bag MusicMind opstod i 2015 gennem et samarbejde med Plejecenter Sølund. Under ledelse af centerleder
					Jan Nybo Jensen og hans team, bestående af Rikke Jensen og Ulla Lau Hyldgård, var arbejdet grundlagt i en klar
					vision om at styrke centrets musikalske profil og pædagogiske arbejde. Formålet var at øge livskvaliteten hos
					beboerne samt forbedre arbejdsmiljøet hos personalet, og over en 2-årig periode blev visionen til virkelighed
					gennem et tæt samarbejde mellem Sølunds ledelse og plejepersonale samt MusicMinds jurist, programmører og
					projektledere.
					<br />
					Kollaborationen med Sølund grundlagde løsningens koncept og præmis, som vi stadig følger i vores fortsatte
					udvikling af MusicMind, hvor inddragelse af kunder og samarbejdspartnere er en vigtig del af processen.
				</p>
			</section>
		</>
	)
}

export default Home
