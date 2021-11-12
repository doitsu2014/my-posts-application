import Link from "next/link";
import Script from 'next/script'


export default function CryptoIndustry() {
	return (
		<>
			<Script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js" strategy="beforeInteractive" />
			<section className="container w-auto mx-auto flex flex-col items-center justify-center rounded-xl bg-gradient-to-b from-green-400 to-green-700 p-4">
				<h1 className="sm:text-lg md:text-2xl font-bold py-4">King and Queen</h1>
				<div className="flex flex-row justify-around p-4 w-full">
					<div className="coinmarketcap-currency-widget"
						data-currencyid="1"
						data-base="USD"
						data-secondary="BTC"
						data-ticker="true"
						data-rank="true"
						data-marketcap="true"
						data-volume="true"
						data-statsticker="true"
						data-stats="USD">
					</div>
					<div className="coinmarketcap-currency-widget"
						data-currencyid="1027"
						data-base="USD"
						data-secondary="BTC"
						data-ticker="true"
						data-rank="true"
						data-marketcap="true"
						data-volume="true"
						data-statsticker="true"
						data-stats="USD">
					</div>
				</div>
			</section>
			<Script src="https://widgets.coingecko.com/coingecko-coin-compare-chart-widget.js" strategy="beforeInteractive" />
			<section className="mt-8 mx-auto sm:w-11/12 md:w-4/5 flex flex-col rounded-xl bg-none p-4">
				<div></div>
				<h1 className="sm:text-lg md:text-2xl font-bold py-4 text-center">Dot and Kusama ecosystem charts</h1>
				<br />
				<coingecko-coin-compare-chart-widget coin-ids="polkadot" currency="usd" locale="en"></coingecko-coin-compare-chart-widget>
				<br />
				<coingecko-coin-compare-chart-widget coin-ids="kusama" currency="usd" locale="en"></coingecko-coin-compare-chart-widget>
				<br />
				<coingecko-coin-compare-chart-widget coin-ids="moonriver" currency="usd" locale="en"></coingecko-coin-compare-chart-widget>
				<br />
				<coingecko-coin-compare-chart-widget coin-ids="karura,pha" currency="usd" locale="en"></coingecko-coin-compare-chart-widget>
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