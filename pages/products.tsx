import { Line } from '@/line'
import type { NextPage } from 'next'
import Head from 'next/head'

import p1 from '@/images/product-bose-sound-system.png'
import p2 from '@/images/product-bose-speaker.png'
import p3 from '@/images/product-ipad.png'
import p4 from '@/images/product-koss-headphones.png'
import p5 from '@/images/product-bose-volume-control.png'
import p6 from '@/images/product-musicarrier.png'
import p7 from '@/images/product-service-agreement.png'
import Image from 'next/future/image'

const Products: NextPage = (): JSX.Element => {
	return (
		<>
			<Head>
				<title>PRODUKTER | MUSICMIND</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className="my-20 mx-auto grid w-[90%] grid-cols-1 items-center gap-y-10 py-20 md:grid-cols-2">
				<div className="sm:max-w-lg">
					<h1 className="font text-4xl font-bold tracking-tight sm:text-6xl">
						<span className="text-orange-500">Produkter</span> & Services
					</h1>
					<Line />
				</div>
			</header>

			<main className="mx-auto w-[90%]">
				<div className="grid grid-cols-1 items-stretch  gap-x-32 gap-y-10 py-20 md:grid-cols-2 lg:grid-cols-3">
					{/* --------------------------------- product -------------------------------- */}
					<div className="flex flex-col justify-between">
						<div>
							<div className="rounded-lg bg-white">
								<Image
									sizes="400px"
									src={p6}
									className="aspect-video h-auto w-full rounded-xl object-contain shadow-xl"
									alt={'Musicarrier Cellular'}
									priority={true}
									placeholder={'blur'}
								/>
							</div>
							<h2 className="my-5 text-2xl font-bold">Musicarrier</h2>
							<p>
								Musicarrier er en specialdesignet musikvogn udviklet til at hjælpe institutioner med at få musikken ud
								og spille alle steder. Musicarrier indeholder både iPad og højtaler og kan spille i op til 8 timer uden
								strøm. Herudover kan 4G simkort løsning tilvælges hvis Wi-Fi dækningen er dårlig.
							</p>
						</div>

						{/* <div className="mt-5 border-t border-slate-800 pt-4">
							<p className="font-medium">Musicarrier Wi-fi</p>
							<p className="text-sm">
								<span className="text-orange-500">Listepris</span> 7950 DKK
							</p>
							<p className="mt-2 font-medium">Musicarrier Cellular</p>
							<p className="text-sm">
								<span className="text-orange-500">Listepris</span> 8540 DKK
							</p>
						</div> */}
					</div>
					{/* --------------------------------- product -------------------------------- */}

					{/* --------------------------------- product --------------------------------
					<div className="flex flex-col justify-between">
						<div>
							<div className="rounded-lg bg-white">
								<Image
									sizes="400px"
									src={p2}
									className="aspect-video h-auto w-full rounded-xl object-contain shadow-xl"
									alt={'Bose SoundLink Color II'}
									priority={true}
									placeholder={'blur'}
								/>
							</div>
							<h2 className="my-5 text-2xl font-bold">Bose Soundlink Color II</h2>
							<p>
								Soundlink Color 2 Bluetooth højttaler er en robust og vandafvisende højtaler. Den leverer lyd i høj
								kvalitet, og den bløde silikone overflade og indbyggede mikrofon til opkald gør den yderst slidstærk.
								Soundlink Color II har en pålidelig trådløs rækkevidde på omkring 9 meter, og tilslutningen er helt
								enkelt.
							</p>
						</div>
					</div>
					 --------------------------------- product -------------------------------- */}
					{/* --------------------------------- product -------------------------------- */}
					<div className="flex flex-col justify-between">
						<div>
							<div className="rounded-lg bg-white">
								<Image
									sizes="400px"
									src={p3}
									className="aspect-video h-auto w-full rounded-xl object-contain shadow-xl"
									alt={'iPad Air Wi-fi'}
									priority={true}
									placeholder={'blur'}
								/>
							</div>
							<h2 className="my-5 text-2xl font-bold">iPad Wi-fi / iPad Cellular</h2>
							<p>
								Til alle vores løsninger bruges nye iPads. Man kan vælge mellem almindelige Wi-Fi iPads og cellular/4G
								iPads.
							</p>
						</div>
					</div>
					{/* --------------------------------- product -------------------------------- */}
					{/* --------------------------------- product -------------------------------- */}
					<div className="flex flex-col justify-between">
						<div>
							<div className="rounded-lg bg-white">
								<Image
									sizes="400px"
									src={p1}
									className="aspect-video h-auto w-full rounded-xl object-contain shadow-xl"
									alt={'Bose Lydanlæg'}
									priority={true}
									placeholder={'blur'}
								/>
							</div>
							<h2 className="my-5 text-2xl font-bold">Bose Lydanlæg</h2>
							<p>
								Denne pakke består af 2 stk. Bose DS40SE højtalere og 1 stk. Bose IZA190hz forstærker. Produkterne er i
								højeste kvalitet og velegnet til fællesområder hvor der er brug for et robust langtidsholdbart anlæg.
							</p>
						</div>
					</div>
					{/* --------------------------------- product -------------------------------- */}
					{/* --------------------------------- product --------------------------------
					<div className="flex flex-col justify-between">
						<div>
							<div className="rounded-lg bg-white">
								<Image
									sizes="400px"
									src={p4}
									className="aspect-video h-auto w-full rounded-xl object-contain shadow-xl"
									alt={'Koss Bluetooth høretelefoner'}
									priority={true}
									placeholder={'blur'}
								/>
							</div>
							<h2 className="my-5 text-2xl font-bold">Koss Bluetooth høretelefoner - BT540i</h2>
							<p>
								Disse høretelefoner kan være nyttige at have med i løsningen, hvis ikke andre skal forstyrres eller
								patienten/beboeren ønsker at fordybe sig alene. Høretelefonerne er i robust enkelt design med store
								ørepuder og god kvalitet.
							</p>
						</div>
					</div>
					 --------------------------------- product -------------------------------- */}
					{/* --------------------------------- product -------------------------------- 
					<div className="flex flex-col justify-between">
						<div>
							<div className="rounded-lg bg-white">
								<Image
									sizes="400px"
									src={p5}
									className="aspect-video h-auto w-full rounded-xl object-contain shadow-xl"
									alt={'Bose Volume & Input Styring'}
									priority={true}
									placeholder={'blur'}
								/>
							</div>
							<h2 className="my-5 text-2xl font-bold">Bose Volume & Input Styring</h2>
							<p>
								Hvis der er behov for at kunne styre volumen på en let og elegant måde, anbefaler vi denne løsning der
								er i bedste kvalitet. Bemærk, hvis denne løsning vælges behøves en større forstærker end IZA190
							</p>
						</div>
					</div>
					 --------------------------------- product -------------------------------- */}
					{/* --------------------------------- product -------------------------------- */}
					<div className="flex flex-col justify-between">
						<div>
							<div className="rounded-lg bg-white">
								<Image
									sizes="400px"
									src={p7}
									className="aspect-video h-auto w-full rounded-xl object-contain shadow-xl"
									alt={'Serviceaftale'}
									priority={true}
									placeholder={'blur'}
								/>
							</div>
							<h2 className="my-5 text-2xl font-bold">Serviceaftale</h2>
							<p>
								Vi har sammensat en lukrativ serviceaftale til de kunder der har brug for assistance og hjælp i
								forbindelse med driften af løsningerne.
							</p>
						</div>
					</div>
					{/* --------------------------------- product -------------------------------- */}
				</div>
			</main>
		</>
	)
}

export default Products
