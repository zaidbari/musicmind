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

			<p className="mt-10 mb-5 text-lg font-bold">
				MusicMind er udviklet med sundheds- og plejesektoren in mente. Vi har derfor særligt fokus på:
			</p>
			<ul className="list-inside list-disc">
				<li>Ældreplejen</li>
				<li>Hospice</li>
				<li>Hospitaler</li>
				<li>Psykiatri</li>
			</ul>
			<p className="mt-10 mb-5 text-lg">
				Hvert område har unikke behov, som vi imødekommer individuelt gennem tilpasning af løsningens indhold, udseende
				og funktionalitet.
			</p>
			<p className="mt-10 mb-5 font-bold">MusicMind kan bl.a. benyttes til:</p>
			<ul className="list-inside list-disc">
				<li>At skabe stemning og atmosfære til meningsfyldt samvær</li>
				<li>At berolige eller stimulere</li>
				<li>At skabe fokus og koncentration</li>
				<li>At skabe ro og velvære</li>
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
