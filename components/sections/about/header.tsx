import { Line } from '@/line'
import { Dialog, Transition } from '@headlessui/react'
import Vimeo from '@u-wave/react-vimeo'
import Image from 'next/future/image'
import { Fragment, useState } from 'react'
import uiImage from '@/images/playlist.jpg'

export const AboutHeaderSection = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<>
			<header className="mx-auto grid w-[90%] grid-cols-1 items-center gap-x-32 gap-y-10 py-20 lg:grid-cols-2">
				<div>
					<h2 className="text-4xl font-bold leading-tight">
						<span className="text-orange-500">Bag </span> MusicMind
					</h2>
					<Line />
					<p className="mb-10 text-lg">
						Bag MusicMind står virksomheden InstoreX ApS, der er førende leverandør af oplevelsesdesign,
						systemintegration og AV-løsninger til bl.a. dagligvarebutikker, fitnesscentre, hoteller og den offentlige
						sektor.
					</p>
					<a href="https://instorex.dk" target={'_blank'} rel="noopener noreferrer" className="button">
						Besøg InstoreX
					</a>
				</div>
				<div className="relative">
					<Image
						sizes="300px"
						src={uiImage}
						className="h-auto w-full rounded-xl shadow-xl blur-sm brightness-50"
						alt={'MusicMind UI'}
						priority={true}
						placeholder={'blur'}
					/>
					<button
						title='Afspil "MusicMind'
						type="button"
						onClick={() => setIsOpen(true)}
						className="leading-0 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer rounded-full bg-orange-500 p-5 shadow-xl"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="m-0 h-14 w-14 p-0"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
							/>
						</svg>
					</button>
				</div>
			</header>
			<Transition show={isOpen} as={Fragment}>
				<Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative  z-50">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black/50 backdrop-blur-md" />
					</Transition.Child>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<div className="fixed inset-0 flex items-center justify-center p-4">
							<Dialog.Panel>
								<Vimeo className="w-[90vw]" responsive video="287127760" autoplay={isOpen} />
							</Dialog.Panel>
						</div>
					</Transition.Child>
				</Dialog>
			</Transition>
		</>
	)
}
