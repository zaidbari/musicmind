import Image from 'next/future/image'
import playlist from '@/images/playlist.jpg'
import { Line } from '@/line'

export const HomePlaylistSection = (): JSX.Element => (
	<section className="my-20 mx-auto grid w-[90%] grid-cols-1 items-center gap-x-32 gap-y-10 lg:grid-cols-2">
		<div>
			<Image
				sizes="800px"
				src={playlist}
				className="block h-auto w-full rounded-2xl"
				alt={'MusicMind UI'}
				priority={true}
				placeholder={'blur'}
			/>
		</div>
		<div>
			<h2 className="text-4xl leading-tight">
				<span className="text-orange-500">Vores</span> spillelister
			</h2>
			<Line />

			<p className="mt-10 text-lg">
				Tilgangen til MusicMind er baseret på en brugervenlig metode, der tager udgangspunkt i et stort katalog af
				specialudviklede spillelister inddelt i hoved- og underkategorier. Indretningen kan hjælpe ansatte og
				omsorgspersoner til nemt at finde frem til musik fra en persons teenageår, samt finde musik af kunstnere,
				komponister og i forskellige genrer og stilarter. MusicMind indeholder lister rettet mod at understøtte
				musikaktiviteter som sang og dans/bevægelse, interaktioner der skaber fysisk, social, kognitiv og emotionel
				stimulation. En del af MusicMind er indrettet med rolig musik til bl.a. beroligelse. Med de rette faglige
				kompetencer og efter vejledning fra musikterapeuter kan lister med både kendt og ukendt musik anvendes til
				regulering ned i arousal. Listerne målrettet specifikke indsatser indenfor palliation kræver forudgående
				undervisning i og viden om musikmedicin.
			</p>
			<p className="mt-5 mb-5 text-lg">
				Med MusicMind er det også nemt at skabe personlige spillelister, sammensat til individuelle behov og
				situationer. Eksempelvis må musikvalget løbende tilpasses den enkeltes påvirkning af sygdom. MusicMind giver
				mulighed for at kunne oprette spillelister ud fra de individuelle musikpræferencer, så den unikke musikbiografi
				kan blive oprettet i systemet og bragt i spil for og med personer, der ikke længere selv kan finde og dermed få
				glæde af deres yndlingsmusik.
			</p>
			<a href="/contact" className="button text-center">
				ØNSKER DU AT HØRE MERE SÅ KLIK HER
			</a>
		</div>
	</section>
)
