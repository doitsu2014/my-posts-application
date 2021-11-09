import React from 'react';
import Link from 'next/link'

class NavigationLink extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return !this.props.isMobile
			? (
				<Link href={this.props.href}>
					<a className={this.props.isActive
						? "self-center px-4 py-2 mx-4 rounded-md bg-black text-white"
						: "self-center px-4 py-2 mx-4 hover:rounded-md hover:bg-black hover:text-white"}
					>
						{this.props.title}
					</a>
				</Link>
			)
			: (
				<Link href={this.props.href}>
					<a className={this.props.isActive
						? "w-full text-center py-2 bg-white text-black"
						: "w-full text-center py-2 hover:bg-white hover:text-black"}
					>
						{this.props.title}
					</a>
				</Link>
			);
	}

}

export default NavigationLink;