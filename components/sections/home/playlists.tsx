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
				specialudviklede spillelister inddelt i genrer, kunstnere, tidsperioder, temaer og arousalniveau. Spillelisterne
				er sammensat af vores dygtige musikterapikonsulenter, der sikrer den faglige kvalitet. Med MusicMind er det også
				nemt at skabe personlige spillelister, der tilpasses lytterens egne behov og præferencer. Der kan også laves
				musikbiografier, hvor personlige spillelister fyldes med musik, der har en særlig betydning for lytteren:
				herigennem kan man arbejde med livshistorie og reminiscens.
			</p>
		</div>
	</section>
)
