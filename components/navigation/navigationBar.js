import Link from 'next/link';
import React from 'react';
import NavigationLink from './navigationLink';

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menu: [
				{
					href: '/posts/first-post',
					title: 'Programming',
					isActive: true
				},
				{
					href: '/posts/first-post',
					title: 'Crypto Industry',
					isActive: false
				},
				{
					href: '/posts/first-post',
					title: 'About Me',
					isActive: false
				}
			]

		};
	}

	render() {
		return (
			<>
				<div className="hidden md:flex md:w-full bg-black text-white text-sm">
					<div className="container mx-auto py-2 flex flex-row-reverse">
						<form className="">
							<input className="px-4 py-2 shadow-md rounded-lg placeholder-gray-500 border border-transparent text-black focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent" name="txtSearchValue" placeholder="Search ~~~~~~~~~~~~~>" />
							<button className="px-4 py-2 my-2 mx-4 hover:bg-white hover:text-black hover:rounded-full">
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
						<nav className="hidden md:grid md:grid-flow-col md:auto-cols-max justify-end">
							{this.state.menu.map((ele, i) => (<NavigationLink key={i} href={ele.href} title={ele.title} isActive={ele.isActive} />))}
						</nav>
						<div className="md:hidden flex items-center">
							<button className="outline-none">
								<svg className="w-6 h-6 stroke-black">
									<path d="M4 6h16M4 12h16M4 18h16"></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<nav className="md:hidden flex flex-col w-full bg-black text-white text-lg">
					{this.state.menu.map((ele, i) => (<NavigationLink key={i} href={ele.href} title={ele.title} isActive={ele.isActive} isMobile={true} />))}
				</nav>
				{/* <hr className="border-gray-200 mx-auto md:w-3/4 sm:w-full" /> */}
			</>
		);
	}
}

export default NavBar;