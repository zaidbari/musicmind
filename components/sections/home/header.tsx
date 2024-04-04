import { AppStoreButton, PlaystoreButton } from '@/buttons/playstore'
import Image from 'next/future/image'
import Link from 'next/link'

import uiImage from '@/images/header2.jpg'

export const HomeHeaderSection = (): JSX.Element => {
	return (
		<header className="flex min-h-screen items-center justify-center">
			<div className="grid w-[90%] grid-cols-1 items-center gap-32 lg:grid-cols-2">
				<div className="flex max-w-2xl flex-col gap-5">
					<h1 className="text-[260%] font-bold leading-tight">
						MUSIKLØSNING TIL REHABILITERING <span className="text-orange-600">PLEJE </span> OG PLEJE
					</h1>
					<p className="text-lg font-bold">
						MusicMind er en lovlig, letanvendelig og specialiseret musikløsning udviklet til brug af musik i sundheds-
						og plejefaglige kontekster.
					</p>

					<p className="text-lg">Med MusicMind tilbyder vi:</p>
					<p>
						Nem adgang til et stort musikkatalog - med mulighed for at få laegt ønsket musik ind
						<br />
						Velkendt og driftsikker teknologi på telefon, tablet, computer eller smart-tv
						<br />
						En løsning, der er godkendt juridisk og rettighedsmæssigt
						<br />
						Et solidt, fagligt grundlag gennem vores samarbejde med danske musikterapeuter
					</p>

					<div>
						<Link href="/contact">
							<a className="button">SEND EN FORESPØRGSEL</a>
						</Link>
						<div className="mt-5 flex flex-wrap">
							<PlaystoreButton />
							<AppStoreButton />
						</div>
					</div>
				</div>
				<div>
					<Image
						sizes="800px"
						src={uiImage}
						className="hidden h-auto w-full rounded-xl shadow-lg md:block"
						alt={'MusicMind UI'}
						priority={true}
						placeholder={'blur'}
					/>
				</div>
			</div>
		</header>
	)
}
