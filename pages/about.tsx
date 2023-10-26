import type { NextPage } from 'next'

import Head from 'next/head'

import { Line } from '@/line'
import AboutSections from '@/sections/about'

const About: NextPage = (): JSX.Element => {
	return (
		<>
			<Head>
				<title>OM | MUSICMIND</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<AboutSections.Header />
			<main>
				<section className="my-20 mx-auto grid w-[90%] grid-cols-1 items-stretch gap-x-32 gap-y-10 lg:grid-cols-2">
					<div className="rounded-xl bg-[#151928]/30 p-10">
						<h2 className="text-4xl leading-tight">
							<span className="text-orange-500">Om</span> MusicMind
						</h2>
						<Line />

						<p className="mb-5 text-lg">
							MusicMind er udviklet af danske eksperter inden for teknologi og musikterapi. Ved at kombinere knowhow
							inden for to fagområder gør vi det praktisk og juridisk let at benytte musik og teknologi af høj kvalitet
							inden for professionel behandling og pleje.
						</p>
					</div>
					<div className="rounded-xl bg-[#151928]/30 p-10">
						<h2 className="text-4xl leading-tight">
							<span className="text-orange-500">Vores</span> Mission
						</h2>
						<Line />

						<p className="text-lg">
							Vores mål er at reducere tekniske, juridiske og økonomiske barrierer, der opstår i forbindelse med
							anvendelse af musik i sundheds- og plejesektoren samt at understøtte og højne kvaliteten af aktiviteter
							inden for musikmedicin og musikterapi. MusicMind er udviklet som supplement til musikterapeutiske
							aktiviteter, hvorigennem det bliver muligt at opbygge en bredere indsats, der kan varetages af
							plejepersonale og behandlere.
						</p>
					</div>
				</section>
			</main>
		</>
	)
}

export default About
