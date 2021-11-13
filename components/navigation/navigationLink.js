import React from 'react';
import utilities from '../../common/utilities';
import Link from 'next/link';

export default function NavigationLink({ href, isActive, title, isMobile }) {
	return !isMobile
		? (
			<Link href={href}>
				<a className={utilities.buildClassNames({
					'self-center': true,
					'px-4': true,
					'py-2': true,
					'mx-4': true,
					'transition-all': true,
					'duration-300': true,
					'hover:rounded-md': !isActive,
					'hover:bg-black': !isActive,
					'hover:text-white': !isActive,
					'rounded-md': isActive,
					'bg-black': isActive,
					'text-white': isActive,
				})} >
					{title}
				</a>
			</Link>
		)
		: (
			<Link href={href}>
				<a className={
					utilities.buildClassNames({
						'w-full': true,
						'text-center': true,
						'py-2': true,
						'transition-all': true,
						'duration-300': true,
						'hover:bg-white': !isActive,
						'hover:text-black': !isActive,
						'bg-white': isActive,
						'text-black': isActive,
					})}>
					{title}
				</a>
			</Link>
		);

}