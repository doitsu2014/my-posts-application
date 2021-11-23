import { useRouter } from "next/router";
import { SUPPORT_LOCALES } from "../../common/constants";

export default function NavigationSwitchingLanguages() {
	const router = useRouter();
	const supportedLocales = [
		SUPPORT_LOCALES.en,
		SUPPORT_LOCALES.vi
	]

	const handleBtnChangeLanguage = (evt) => (switchingLocale) => {
		const { pathname, asPath, query } = router;
		router.push({ pathname, query }, asPath, { locale: switchingLocale });
	}

	return (
		<div className="flex items-center justify-center m-4 bg-black w-auto">
			{supportedLocales.map((e, i) => {
				const isFirst = i === 0;
				const isLast = i === supportedLocales.length - 1;
				const isActive = router.locale === e;

				return (
					<button
						key={e}
						className={`
							font-bold
							uppercase
							text-xs
							p-2
							outline-none
							focus:outline-none
							ease-linear
							transition-all
							duration-150
							hover:bg-gray-400 hover:text-white
							${isActive ? 'bg-gray-400 text-white' : 'bg-gray-200 text-black'} 

							border-gray-400
							border-t border-b
							${isFirst && 'border-l rounded-l'}
							${isLast && 'border-r rounded-r'}
						`}
						onClick={(evt) => handleBtnChangeLanguage(evt)(e)}
					>
						{e}
					</button>
				)
			})}
		</div >
	);
}