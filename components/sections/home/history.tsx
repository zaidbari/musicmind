import calm1 from '@/images/calm1.jpg'
import { Line } from '@/line'
import Image from 'next/future/image'

export const HomeHistorySection = (): JSX.Element => (
	<section className="mx-auto grid w-[90%] grid-cols-1 items-center gap-x-32 gap-y-10 py-20 lg:grid-cols-2">
		<div>
			<h2 className="text-4xl leading-tight">
				<span className="text-orange-500">Vores</span> historie
			</h2>
			<Line />

			<p className="text-lg">
				Musicmind er i en konstant udviklingsproces og bruger kun erfarne højtuddannede musikterapi-konsulenter med en
				kandidatgrad og med specialviden om musikkens fysiske, psykologiske og sociale effekter hos vores målgrupper.
				Siden 2015 har vi udviklet på en metode, der tager udgangspunkt i et stort katalog af specialudviklede
				spillelister inddelt i genrer, kunstnere, tidsperioder, temaer og arousal, der i kombination med stort
				musikarkiv og værktøjer, giver personalet mulighed for at arbejde progressivt, fra det generelle til det
				individuelle niveau. De generaliserede spillelister guider medarbejderen uden musikfaglig baggrund, til at tage
				fagligt reflekterede valg om, hvilken musik der skal bruges til at arbejde individuelt.
			</p>
		</div>
		<div>
			<Image
				sizes="800px"
				src={calm1}
				className="block h-auto w-full rounded-2xl brightness-75 drop-shadow-2xl"
				alt={'MusicMind UI'}
				priority={true}
				placeholder={'blur'}
			/>
		</div>
	</section>
)
