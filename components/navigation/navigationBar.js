import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import utilities from '../../common/utilities';
import NavigationLink from './navigationLink';

export default function NavigationBar() {
	const router = useRouter();
	const [menu, setMenu] = useState([
		{
			href: '/',
			title: 'About Me',
			isActive: false,
		},
		{
			href: '/programming',
			title: 'Programming',
			isActive: false,
		},
		{
			href: '/crypto-industry',
			title: 'Crypto Industry',
			isActive: false,
		}
	]);

	const [collapsedMobileMenu, setCollapsedMobileMenu] = useState(true);
	const [hiddenMobileMenu, setHiddenMobileMenu] = useState(true);
	const updateMenuState = (url) => {
		setMenu(menu.map(e => {
			e.isActive = e.href === url;
			return e;
		}));
	}

	useEffect(() => {
		updateMenuState(router.asPath);
	}, [router])

	return (
		<>
			<div className="hidden md:flex md:w-full bg-black text-white text-sm">
				<div className="container mx-auto py-2 flex justify-between">
					<div className="flex">
						<p className="self-center text-lg">✨  Welcome to my house, guys! ✨</p>
					</div>
					<form className="flex">
						<input className="p-2 shadow-md rounded-lg placeholder-gray-500 border border-transparent text-black focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
							name="txtSearchValue"
							placeholder="Search ~~~~~~~~>" />
						<button className="px-2 py-2 my-2 mx-4 transition-all duration-200 hover:bg-white hover:text-black hover:rounded-full">
							(╯°□°）╯︵ ┻━┻))
						</button>
					</form>
				</div>
			</div>

			<div className="w-full bg-gray-300 bg-opacity-50 text-black text-xl font-bold">
				<div className="container py-4 mx-auto flex justify-between">
					<div className="box-content">
						<Link href="/">
							<a>
								<img src="/rectangle/logo_transparent_background.png" alt="Doitsu Technology Logo" className="object-scale-down md:h-32 sm:h-24" />
							</a>
						</Link>
					</div>
					{/* Desktop NavBar section */}
					<nav className="hidden md:grid md:grid-flow-col md:auto-cols-max justify-end">
						{menu.map((ele, i) => (<NavigationLink key={i} {...ele} />))}
					</nav>
					<div className="md:hidden flex items-center">
						<button className="outline-none animate-bounce" onClick={evt => {
							const currentCollapsedStatus = collapsedMobileMenu;
							setCollapsedMobileMenu(!currentCollapsedStatus);
							setTimeout(() => setHiddenMobileMenu(!currentCollapsedStatus), currentCollapsedStatus ? 0 : 300);
						}}>

							<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" clipRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile Navigation Section */}
				<nav className={utilities.buildClassNames({
					'hidden': hiddenMobileMenu,
					'flex': !hiddenMobileMenu,
					'flex-col': !hiddenMobileMenu,
					'w-full': true,
					'bg-black': true,
					'text-white': true,
					'text-lg': true,
					'transition-all': true,
					'ease-linear': true,
					'duration-300': true,
					'transform': true,
					'translate-x-144': collapsedMobileMenu,
					'translate-x-0': !collapsedMobileMenu,
				})}>
					{menu.map((ele, i) => (<NavigationLink key={i} {...ele} isMobile={true} />))}
				</nav>
			</div>
		</>
	);
}