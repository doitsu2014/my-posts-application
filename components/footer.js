import { useTranslation } from 'react-i18next';
import contacts from '../data/contacts.json'
import { Facebook, Linkedin, Skype, Intstagram } from './icons/socials';

export default function Footer() {
	const { t } = useTranslation('common');

	return (
		<footer className="w-full border-t bg-black text-white">
			<div className="container mx-auto flex flex-row justify-between">
				<ul className="list-item list-none p-4">
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

				<a
					className="flex items-center justify-center"
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<img src="/square/white_logo_transparent_background.png" alt="D.TECH Logo" className="h-32 ml-4" />
				</a>
			</div>
		</footer>
	);

}