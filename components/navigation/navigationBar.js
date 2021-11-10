import { withRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';
import utilities from '../../common/utilities';
import NavigationLink from './navigationLink';

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menu: [
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
			],
			collapsedMobileMenu: true,
			hiddenMobileMenu: true,
		};
	}

	componentDidMount() {
		this.updateMenuState(this.props.router.asPath);
		this.props.router.events.on('routeChangeStart', (url) => {
			this.updateMenuState(url);
		});
	}

	updateMenuState(url) {
		this.setState({
			menu: this.state.menu.map(e => {
				e.isActive = e.href === url;
			})
			, ...this.state
		});
	}

	render() {
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
							{this.state.menu.map((ele, i) => (<NavigationLink key={i} {...ele} />))}
						</nav>
						<div className="md:hidden flex items-center">
							<button className="outline-none animate-bounce" onClick={evt => {
								const currentCollapsedStatus = this.state.collapsedMobileMenu;
								this.setState({
									collapsedMobileMenu: !currentCollapsedStatus
								});

								setTimeout(() => this.setState(state => ({
									hiddenMobileMenu: !currentCollapsedStatus
								})), currentCollapsedStatus ? 0 : 300);
							}}>

								<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" clipRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
								</svg>
							</button>
						</div>
					</div>

					{/* Mobile Navigation Section */}
					<nav className={utilities.buildClassNames({
						'hidden': this.state.hiddenMobileMenu,
						'flex': !this.state.hiddenMobileMenu,
						'flex-col': !this.state.hiddenMobileMenu,
						'w-full': true,
						'bg-black': true,
						'text-white': true,
						'text-lg': true,
						'transition-all': true,
						'ease-linear': true,
						'duration-300': true,
						'transform': true,
						'translate-x-144': this.state.collapsedMobileMenu,
						'translate-x-0': !this.state.collapsedMobileMenu,
					})}>
						{this.state.menu.map((ele, i) => (<NavigationLink key={i} {...ele} isMobile={true} />))}
					</nav>
				</div>
			</>
		);
	}
}

export default withRouter(NavBar);