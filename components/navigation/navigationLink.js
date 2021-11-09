import React from 'react';
import Link from 'next/link'
import utilities from '../../common/utilities';

class NavigationLink extends React.Component {

	/**
	 * 
	 * @param { href, isActive, title } props 
	 */
	constructor(props) {
		super(props);
	}

	render() {
		return !this.props.isMobile
			? (
				<Link href={this.props.href}>
					<a className={utilities.buildClassNames({
						'self-center': true,
						'px-4': true,
						'py-2': true,
						'mx-4': true,
						'hover:rounded-md': !this.props.isActive,
						'hover:bg-black': !this.props.isActive,
						'hover:text-white': !this.props.isActive,
						'rounded-md': this.props.isActive,
						'bg-black': this.props.isActive,
						'text-white': this.props.isActive,
					})}
					>
						{this.props.title}
					</a>
				</Link>
			)
			: (
				<Link href={this.props.href}>
					<a className={
						utilities.buildClassNames({
							'w-full': true,
							'text-center': true,
							'py-2': true,
							'bg-white': this.props.isActive,
							'text-black': this.props.isActive,
							'hover:bg-black': !this.props.isActive,
							'hover:text-white': !this.props.isActive,
						})}
					>
						{this.props.title}
					</a>
				</Link >
			);
	}

}

export default NavigationLink;