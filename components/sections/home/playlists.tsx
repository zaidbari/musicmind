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
				Individuelle musikpræferencer har også betydning for musikkens effekt. Den samme musik virker ikke nødvendigvis
				beroligende på alle mennesker, dog findes overordnede parametre i musik, som er afgørende for, om den virker
				beroligende eller aktiverende (Bonde, 2014). Med Musicmind er er det brugervenligt og nemt at skabe personlige
				spillelister særligt tilpasset lytterens egne behov og præferencer. Det er muligt at sammensætte musik, som den
				enkelte beboer/patient foretrækker, til en personlig spilleliste. Der kan også udvælges sange fra allerede
				eksisterende lister som gøres personlig, og dermed rettet specifikt til den enkeltes behov og præferencer.
				<br />
				Afspilningstjenesten er udstyret med en timer-funktion, så afspilningen stopper efter et indstillet
				tidsinterval. Det er vigtigt at overveje, hvor længe den enkelte beboer/patient har gavn af at lytte til musik.
				Afspillet musik bør ikke være et lydtæppe, som anvendes hele dagen.
			</p>
		</div>
	</section>
)
