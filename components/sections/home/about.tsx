import { Line } from '@/line'
import Link from 'next/link'

export const HomeAboutSection = (): JSX.Element => (
	<section className="my-20 mx-auto grid w-[90%] grid-cols-1 items-stretch gap-x-32 gap-y-10 lg:grid-cols-2">
		<div className="rounded-xl bg-[#151928]/30 p-10">
			<h2 className="text-4xl leading-tight">
				<span className="text-orange-500">Om</span> MusicMind
			</h2>
			<Line />

			<p className="mb-5 text-lg">
				Musicmind er skabt af danske eksperter inden for teknologi og musikterapi, og kombinerer den bedste danske
				knowhow fra 2 praktisk-videnskabelige områder, for at gøre brugen af højkvalitetsmusik let og juridisk mulig for
				professionel behandling og pleje.
			</p>
			<Link href="/about">
				<a className="more-button-light font-bold transition-all duration-150 hover:text-orange-600">Læs mere</a>
			</Link>
		</div>
		<div className="rounded-xl bg-[#151928]/30 p-10">
			<h2 className="text-4xl leading-tight">
				<span className="text-orange-500">Vores</span> Mission
			</h2>
			<Line />

			<p className="text-lg">
				Vores mission og erklæret mål er, at reducere de praktiske, tekniske, juridiske og økonomiske barrierer i
				forbindelse med valg, planlægning og brug af musik i den daglige behandling og pleje, og at understøtte og højne
				kvaliteten af aktiviteter inden for musik-medicin og musikterapi. Musicmind er ikke tiltænkt som en erstatning
				for musikterapeuter, men et supplement til deres arbejde, med det (for)mål at muliggøre en større og bredere
				indsats, som kan varetages af plejepersonale og behandlere.
			</p>
		</div>
	</section>
)
