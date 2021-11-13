import Script from 'next/script'
import { useState } from "react";

export default function CryptoIndustry() {
	const [state, setstate] = useState({
		dotEcosystem: [
			'polkadot',
			'kusama',
			'moonriver',
			'karura',
			'pha',
			'rmrk',
		]
	})

	return (
		<>
			<Script src="https://widgets.coingecko.com/coingecko-coin-heatmap-widget.js" strategy="beforeInteractive" />
			<Script src="https://widgets.coingecko.com/coingecko-coin-price-chart-widget.js" strategy="beforeInteractive" />

			<section className="mt-8 mx-auto sm:w-11/12 md:w-4/5 flex flex-col bg-none p-4">
				<h1 className="sm:text-lg md:text-2xl font-bold py-4 text-center">Heat Map</h1>
				<coingecko-coin-heatmap-widget className="w-full bg-none" height="1080" locale="en"></coingecko-coin-heatmap-widget>
			</section>

			<section className="mt-8 mx-auto sm:w-11/12 md:w-4/5 bg-none p-4">
				<h1 className="sm:text-lg md:text-2xl font-bold py-4 text-center">Dot and Kusama ecosystem charts</h1>
				<div className="grid grid-cols-2">
					{state.dotEcosystem.map(e => (
						<div className="p-4">
							<br />
							<coingecko-coin-price-chart-widget coin-id={e} currency="usd" height="300" locale="en"></coingecko-coin-price-chart-widget>
						</div>
					))}
				</div>
			</section>
		</>
	);

	{/* <div id="coinmarketcap-widget-coin-price-block"
						coins="6636,9285,5034,10042,6841,8705,9017"
						currency="USD"
						theme="light"
						transparent="true"
						show-symbol-logo="true"></div> */}
}