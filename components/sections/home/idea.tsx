import Image from 'next/future/image'

import tService from '@/images/senior3.jpg'
import { Line } from '@/line'

export const HomeIdeaSection = (): JSX.Element => (
	<section className="mx-auto grid w-[90%] grid-cols-1 items-center gap-32 lg:grid-cols-2">
		<div>
			<Image
				sizes="800px"
				src={tService}
				className="block h-auto w-full rounded-2xl drop-shadow-2xl grayscale-[25%]"
				alt={'MusicMind UI'}
				priority={true}
				placeholder={'blur'}
			/>
		</div>
		<div>
			<h2 className="text-4xl leading-tight">
				<span className="text-orange-600">IDE</span>EN
			</h2>
			<Line />

			<p className="text-lg">
				Vigtigheden af at finde den rette musik er afgørende for at opnå en ønsket effekt. Det er ikke en let opgave,
				men vores løsning gør processen lettere og mere tryg, særlig i forbindelse med musikvalg til mennesker med
				sygdom.
			</p>
			<p className="mt-5 text-lg">
				Ved hjælp af det store udvalg af spillelister og stilles arkiv der er stilles til rådighed, kan medarbejdere
				uden musikfaglig baggrund guides til at tage fagligt reflekterede valg om hvilken musik der skal anvendes til
				specifikke behov.
			</p>
		</div>
	</section>
)
