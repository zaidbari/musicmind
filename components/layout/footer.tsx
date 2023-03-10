import { AppStoreButton, PlaystoreButton } from '@/buttons/playstore'
import logo from '@/images/logo.png'
import Image from 'next/future/image'
import Link from 'next/link'
import { EnvelopeIcon, MapPinIcon, PhoneIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline'

export const FooterComponent = (): JSX.Element => (
	<div className="my-20 mx-auto w-[90%]">
		<div className="mx-auto">
			<div className="relative isolate overflow-hidden rounded-xl bg-gray-900 px-6 shadow-2xl sm:px-16">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1024 1024"
					className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
					aria-hidden="true"
				>
					<circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
					<defs>
						<radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
							<stop stopColor="#7775D6" />
							<stop offset={1} stopColor="#E935C1" />
						</radialGradient>
					</defs>
				</svg>
				<div className="flex flex-col justify-between py-10 text-center md:flex-row md:text-left lg:mx-0">
					<div>
						<Image
							sizes="200px"
							src={logo}
							className="mx-auto mb-5 block h-[60px] w-auto md:mx-0"
							alt={'MusicMind UI'}
							priority={true}
							placeholder={'blur'}
						/>
						<p>Musicmind og tilhørende produkter leveres af InstoreX. Kontakt os via én af nedenstående muligheder.</p>
					</div>

					<div className=" flex flex-col items-center justify-center gap-5 md:flex-row md:justify-center">
						<PlaystoreButton />
						<AppStoreButton />
					</div>
				</div>
			</div>
		</div>
		<div className="mt-10 flex flex-col items-center gap-5 text-sm text-gray-400 md:flex-row md:justify-between">
			<div className="flex flex-col items-center gap-3 md:flex-row md:justify-center md:divide-x">
				<p>
					<span className="font-bold">
						<span className="text-lg">&copy;</span> MusicMind
					</span>{' '}
					{new Date().getFullYear()}
				</p>
				<p className="select-text">
					<span className="px-2 font-bold ">
						<MapPinIcon className="inline h-6 w-6" />
					</span>{' '}
					Amalievej 6
				</p>
				<p className="select-text">
					<span className="px-2 font-bold ">
						<BuildingOffice2Icon className="inline h-6 w-6" />
					</span>{' '}
					1875 Frederiksberg C.
				</p>
				<a href={'mailto:kontakt@musicmind.me'} target="_blank" rel="noopener noreferrer">
					<span className="px-2 font-bold ">
						<EnvelopeIcon className="inline h-6 w-6" />
					</span>{' '}
					kontakt@musicmind.me
				</a>
				<p className="select-text">
					<span className="px-2 font-bold">
						<PhoneIcon className="inline h-5 w-5" />
					</span>
					7060 5949
				</p>
			</div>

			<div className="order-1 divide-x md:order-2">
				<Link href={'/about'}>
					<a className="px-2 transition-all duration-300 hover:text-orange-500">Om os</a>
				</Link>
				<Link href={'/contact'}>
					<a className="px-2 transition-all duration-300 hover:text-orange-500">Kontakt os</a>
				</Link>
				<span className="px-2 transition-all duration-300 hover:text-orange-500">Fortrolighedspolitik</span>
			</div>
		</div>
	</div>
)
