import { useTranslation } from 'react-i18next';
import contacts from '../data/contacts.json';
import { Facebook, Linkedin, Skype, Intstagram } from './icons/socials';
import localPic from '../public/square/white_logo_transparent_background.png';
import Image from 'next/image';

export default function Footer() {
	const { t } = useTranslation('common');

	return (
		<footer className="w-full border-t bg-black text-white">
			<div className="container mx-auto flex flex-row justify-between">
				<ul className="list-item list-none p-4 lg:w-2/12 md:w-2/6 sm:w-1/2">
					<li className="text-md font-semibold">{t('contactMe')}:</li>
					{contacts.map(c => {
						return (
							<li key={c.key} className="flex flex-grow p-2 border-l-2 hover:bg-gradient-to-tr hover:from-gray-100 hover:to-gray-400 hover:rounded-lg text-white hover:text-black hover:cursor-pointer">
								{c.key === Facebook.name
									? (<Facebook />)
									: c.key === Linkedin.name
										? <Linkedin />
										: c.key === Intstagram.name
											? <Intstagram />
											: <Skype />}
								<a className="text-sm ml-2" href={c.reference}>{c.name}</a>
							</li>
						);
					})}
				</ul>

				<div className="grid grid-cols-3 lg:w-3/12 md:w-3/6 sm:w-2/3">
					<p className="flex col-span-1 items-center justify-center">
						Powered by{' '}
					</p>
					<a className="h-full col-span-2" href="~/" target="_blank">
						<Image src={localPic} alt="D.TECH Logo" layout="intrinsic" />
					</a>
				</div>
			</div>
		</footer>
	);

}