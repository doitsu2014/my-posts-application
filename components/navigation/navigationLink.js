import React from 'react';
import utilities from '../../common/utilities';
import { withRouter } from 'next/router';

class NavigationLink extends React.Component {

	/**
	 * 
	 * @param { href, isActive, title } props 
	 */
	constructor(props) {
		super(props);
		this.state = {
			isActive: this.props.href === this.props.router.asPath
		};
	}

	render() {
		return !this.props.isMobile
			? (
				<a href={this.props.href} className={utilities.buildClassNames({
					'self-center': true,
					'px-4': true,
					'py-2': true,
					'mx-4': true,
					'transition-all': true,
					'duration-200': true,
					'hover:rounded-md': !this.state.isActive,
					'hover:bg-black': !this.state.isActive,
					'hover:text-white': !this.state.isActive,
					'rounded-md': this.state.isActive,
					'bg-black': this.state.isActive,
					'text-white': this.state.isActive,
				})} >
					{this.props.title}
				</a>
			)
			: (
				<a href={this.props.href} className={
					utilities.buildClassNames({
						'w-full': true,
						'text-center': true,
						'py-2': true,
						'transition-all': true,
						'duration-200': true,
						'hover:bg-white': !this.state.isActive,
						'hover:text-black': !this.state.isActive,
						'bg-white': this.state.isActive,
						'text-black': this.state.isActive,
					})}>
					{this.props.title}
				</a>
			);
	}

}

export default withRouter(NavigationLink);