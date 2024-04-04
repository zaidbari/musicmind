import Image from 'next/future/image'
import work from '@/images/work.jpg'
import { Line } from '@/line'

export const HomeWorkSection = (): JSX.Element => (
	<section className="my-20 mx-auto grid w-[90%] grid-cols-1 items-center gap-x-32 gap-y-10 lg:grid-cols-2">
		<div>
			<h2 className="text-4xl leading-tight">
				<span className="text-orange-500">VORES</span> FOKUS
			</h2>
			<Line />

			<p className="mt-10 mb-5 text-lg">
				MusicMind kan understøtte en sundhedsfremmende brug af musik. MusicMind kan være et redskab for bl.a.
				musikterapeuter, ergoterapeuter og fysioterapeuter, sygeplejersker eller læger i deres behandlinger eller
				aktiviteter. Gennem undervisning og vejledning fra musikterapeuter kan andre faggrupper lære at anvende musikken
				på de præoprettede spillelister til plejefaglige formål på forsvarlig vis. Indretningen af MusicMind er
				inspireret at elementerne Ramme, Regulering og Relation, der indgår i en model udviklet af professor i
				musikterapi, Hanne Mette Ochsner Ridder, på Aalborg universitet. Læs mere om begreberne på hjemmesiden her og i
				bogen ‘Stemning’ (Ridder & Krøier, 2022), der også omtales på siden:{' '}
				<a
					className="text-blue-500 underline"
					href="https://www.kommunikation.aau.dk/forskning/forskningsenheder/forskningsgruppen-musikterapi/musik-og-demens/pami "
					target="_blank"
					rel="noopener noreferrer"
				>
					her
				</a>
			</p>
			<p className="mt-10 mb-5 font-bold">MusicMind kan bl.a. benyttes til:</p>
			<ul className="ml-4 list-disc">
				<li>At skabe genkendelighed og derved tryghed</li>
				<li>At anvende kendt (og ukendt) musik til beroligelse eller stimulering (arousalregulering) </li>
				<li>At skabe positive interaktioner og meningsfuldt samvær</li>
				<li>At skabe et godt lydmiljø og god stemning i fællesrum</li>
				<li>At invitere til samvær og dialog mellem borgere og deres pårørende</li>
				<li>At invitere til dans og fysisk bevægelse og akkompagnere fysisk træning</li>
			</ul>
		</div>
		<div>
			<Image
				sizes="800px"
				src={work}
				className="block h-auto w-full rounded-2xl"
				alt={'MusicMind UI'}
				priority={true}
				placeholder={'blur'}
			/>
		</div>
	</section>
)
