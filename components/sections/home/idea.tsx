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
			Når musikken skal spille, er det vigtigt at vælge det rigtige indhold til formålet. Med vores løsning gøres processen tryg og lettilgængelig, særligt i forbindelse med musikvalg til mennesker, der lever med forskellige sygdomme.
			</p>
			<p className="mt-5 text-lg">
			Ved hjælp af stort musikarkiv, samt spillelister udviklet til specifikke behov, bliver medarbejderen guidet til at tage reflekterede valg om hvilken musik, der skal anvendes til forskellige lejligheder.
			</p>
		</div>
	</section>
)
