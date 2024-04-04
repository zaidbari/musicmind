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
				Uanset om musik anvendes til at skabe trivsel og fremme sundhed gennem meningsfulde aktiviteter, for at skabe
				velvære i sig selv, eller ved at indgå som redskab i behandling varetaget af fx sygeplejersker eller terapeuter,
				skal det være nemt, funktionelt og lovligt at tilgå den relevante musik. Med vores løsning, ønsker vi at guide
				forskellige grupper af fagpersoner og pårørende til at kunne gøre brug af musikkens mange muligheder. MusicMind
				er udviklet til at blive anvendte som et pædagogisk og plejefagligt redskab rettet mod et bredt spænd af
				målgrupper på fx aktivitetscentre for hjemmeboende personer med en demenssygdom, plejecentre, hospitaler og
				hospicer.
			</p>
		</div>
	</section>
)
