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
						MUSIKLØSNING MÅLRETTET <span className="text-orange-600">BEHANDLING</span> OG PLEJE
					</h1>
					<p className="text-lg font-bold">
						Musicmind er en let anvendelig, praktisk og specialiseret musikløsning til ældreplejen, hospice, hospitaler
						og psykiatrien.
					</p>

					<p className="text-lg">Fordelene ved Musicmind er at:</p>
					<p>
						Det kan bruges af alle og kræver ikke musikfaglig baggrund
						<br />
						Det er 100% lovligt og kan bruges på alle arealer
						<br />
						Det er meget let anvendeligt og driftssikkert
						<br />
						Det kan bruges på alle medier som f.eks. tablets, telefoner, computere og smart TV
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
