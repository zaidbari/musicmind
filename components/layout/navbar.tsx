import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import logo from '@/images/logo.png'
import Image from 'next/future/image'
import { useRouter } from 'next/router'

export const classNames = (...classes: string[]): string => classes.filter(Boolean).join(' ')

export const NavbarComponent = (): JSX.Element => {
	const router = useRouter()

	return (
		<Disclosure
			as="nav"
			className="max-w-screen bg-gray/10 sticky top-0 z-10 w-full items-center justify-center py-5 backdrop-blur-md"
		>
			{({ open }) => (
				<>
					<div className="mx-auto w-[90%]">
						<div className="relative flex items-center justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								<Disclosure.Button className="inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-0">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon className="block h-10 w-10" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-10 w-10" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex flex-shrink-0 items-center">
									<div className="flex space-x-4">
										<Link href="/" passHref>
											<a className="text-2xl font-bold outline-none ring-0">
												<Image
													sizes="200px"
													src={logo}
													className="block h-[35px] w-auto md:h-[50px]"
													alt={'MusicMind UI'}
													priority={true}
													placeholder={'blur'}
												/>
											</a>
										</Link>
									</div>
								</div>
								<div className="hidden items-center sm:ml-6 sm:block"></div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								<div className="hidden items-center space-x-4 sm:ml-6 sm:flex">
									<Link href="/about">
										<a
											className={`text-lg font-bold transition-all duration-300 hover:text-orange-600 ${
												router.pathname == '/about' ? 'text-orange-500' : ''
											}`}
										>
											Om os
										</a>
									</Link>
									<Link href="/products">
										<a
											className={`text-lg font-bold transition-all duration-300 hover:text-orange-600 ${
												router.pathname == '/products' ? 'text-orange-500' : ''
											}`}
										>
											Produkter
										</a>
									</Link>
									<Link href="/contact">
										<a
											className={`text-lg font-bold transition-all duration-300 hover:text-orange-600 ${
												router.pathname == '/contact' ? 'text-orange-500' : ''
											}`}
										>
											Kontakt
										</a>
									</Link>
									<a
										href="https://musicmind.nu"
										target={'_blank'}
										rel="noopener noreferrer"
										className="button font-bold text-orange-500"
									>
										Login
									</a>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 pt-2 pb-3 text-center">
							<Link href={'/about'}>
								<a className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
									Om OS
								</a>
							</Link>
							<Link href={'/products'}>
								<a className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
									Produkter
								</a>
							</Link>
							<Link href={'/contact'}>
								<a className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
									Kontakt
								</a>
							</Link>
							<Disclosure.Button
								as="a"
								href={'https://musicmind.nu'}
								target="_blank"
								rel="noopener noreferrer"
								className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
							>
								Login
							</Disclosure.Button>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}
