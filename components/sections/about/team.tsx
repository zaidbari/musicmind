import { Line } from '@/line'
import Image from 'next/future/image'
import uiImage from '@/images/avatar.png'

export const AboutTeamSection = () => (
	<div className="mx-auto grid w-[90%] gap-y-20 gap-x-32 px-6 lg:px-8 xl:grid-cols-2">
		<div className="max-w-2xl">
			<h2 className="text-4xl leading-tight">
				<span className="text-orange-500">Meet </span>Our leadership
			</h2>
			<Line />

			<p className="mt-6 text-lg ">
				Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
				suspendisse.
			</p>
		</div>
		<ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16">
			<li>
				<div className="flex items-center gap-x-6">
					<Image
						sizes="30px"
						src={uiImage}
						className="h-16 w-16 rounded-full"
						alt={'MusicMind UI'}
						priority={true}
						placeholder={'blur'}
					/>
					<div>
						<h3 className="text-base font-semibold leading-7 tracking-tight ">{'Karsten Costa'}</h3>
						<p className="text-sm leading-6 ">{'Direktør, Partner'}</p>
					</div>
				</div>
			</li>
			<li>
				<div className="flex items-center gap-x-6">
					<Image
						sizes="30px"
						src={uiImage}
						className="h-16 w-16 rounded-full"
						alt={'MusicMind UI'}
						priority={true}
						placeholder={'blur'}
					/>
					<div>
						<h3 className="text-base font-semibold leading-7 tracking-tight ">{'Karsten Costa'}</h3>
						<p className="text-sm leading-6 ">{'Direktør, Partner'}</p>
					</div>
				</div>
			</li>
			<li>
				<div className="flex items-center gap-x-6">
					<Image
						sizes="30px"
						src={uiImage}
						className="h-16 w-16 rounded-full"
						alt={'MusicMind UI'}
						priority={true}
						placeholder={'blur'}
					/>
					<div>
						<h3 className="text-base font-semibold leading-7 tracking-tight ">{'Karsten Costa'}</h3>
						<p className="text-sm leading-6 ">{'Direktør, Partner'}</p>
					</div>
				</div>
			</li>
			<li>
				<div className="flex items-center gap-x-6">
					<Image
						sizes="30px"
						src={uiImage}
						className="h-16 w-16 rounded-full"
						alt={'MusicMind UI'}
						priority={true}
						placeholder={'blur'}
					/>
					<div>
						<h3 className="text-base font-semibold leading-7 tracking-tight ">{'Karsten Costa'}</h3>
						<p className="text-sm leading-6 ">{'Direktør, Partner'}</p>
					</div>
				</div>
			</li>
			<li>
				<div className="flex items-center gap-x-6">
					<Image
						sizes="30px"
						src={uiImage}
						className="h-16 w-16 rounded-full"
						alt={'MusicMind UI'}
						priority={true}
						placeholder={'blur'}
					/>
					<div>
						<h3 className="text-base font-semibold leading-7 tracking-tight ">{'Karsten Costa'}</h3>
						<p className="text-sm leading-6 ">{'Direktør, Partner'}</p>
					</div>
				</div>
			</li>
			<li>
				<div className="flex items-center gap-x-6">
					<Image
						sizes="30px"
						src={uiImage}
						className="h-16 w-16 rounded-full"
						alt={'MusicMind UI'}
						priority={true}
						placeholder={'blur'}
					/>
					<div>
						<h3 className="text-base font-semibold leading-7 tracking-tight ">{'Karsten Costa'}</h3>
						<p className="text-sm leading-6 ">{'Direktør, Partner'}</p>
					</div>
				</div>
			</li>
		</ul>
	</div>
)
