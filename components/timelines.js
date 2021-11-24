import { useState } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { useRouter } from 'next/router';
import DataService from '../services/dataService';

export default function TimeLines({ timelines }) {
	const router = useRouter();
	const { locale } = router;
	const dataService = new DataService();
	const timelinesTitles = dataService.getApplicationTitles(locale)['timelinesComponent'];
	const [data, setData] = useState({
		timelines
	});

	return (
		<div className="container mx-auto mt-12 bg-none w-full h-full">
			<h1 className="text-2xl text-black text-center font-bold">{timelinesTitles['myJourney']}</h1>
			<div className="relative wrap overflow-hidden md:p-10 sm:px-2 sm:py-6 h-full">
				{data.timelines.map((l, k) => {
					const kPlusOne = k + 1;
					const isFirst = kPlusOne === 1;
					const isLeft = kPlusOne % 2 === 0;
					const mmToDate = l.isWorking ? moment() : moment(l.toDate);
					const mmFromDate = moment(l.fromDate);
					return (
						!isLeft
							? <div key={k}>
								<div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
								<div className="mb-8 md:flex md:justify-between md:items-center w-full sm:grid sm:grid-cols-1 sm:justify-items-center">
									<div className="order-1 w-5/12"></div>
									<div className={`z-20 flex items-center order-1 bg-gradient-to-r from-gray-300 to-gray-400 shadow-xl w-12 h-12 rounded-full sm:col-auto ${isFirst ? 'sm:mb-4' : 'sm:mb-8'} ${isFirst && 'border-4 border-green-400 animate-bounce'}`}>
										{
											isFirst ?
												<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
												</svg>
												:
												<>
													<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto sm:hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
													</svg>
													<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto md:hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
													</svg>
												</>
										}
									</div>
									<Link href={`/about-me/${l.slug}`}>
										<div className="order-1 cursor-pointer transition-all duration-500 bg-gradient-to-tr from-gray-100 to-gray-400 hover:from-gray-200 hover:to-gray-500 shadow-xl hover:shadow-2xl hover:drop-shadow-xl rounded-lg px-6 py-4 md:w-5/12 sm:w-full sm:z-20 sm:col-auto">
											<h2 className="mb-1 font-bold text-gray-800 text-xl text-justify">{l.title}</h2>
											<h3 className="mb-2 italic text-md">{mmFromDate.format('YYYY/MM')} - {l.isWorking ? timelinesTitles['now'] : mmToDate.format('YYYY/MM')} [{mmToDate.diff(mmFromDate, 'months')} {timelinesTitles['months']}]</h3>
											<h3 className="mb-1 text-md">{timelinesTitles['workAsA']}: </h3>
											<ul className="mb-2 list-disc list-inside text-sm">
												{l.roles.map((e, k) => (
													<li key={k}>{e}</li>
												))}
											</ul>
											<p className="mb-2 text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 text-justify">{l.content}</p>
										</div>
									</Link>
								</div>
							</div>
							: <div key={k} className="mb-8 md:flex md:justify-between md:flex-row-reverse md:items-center w-full sm:grid sm:grid-cols-1 sm:justify-items-center">
								<div className="order-1 w-5/12"></div>
								<div className="z-20 flex items-center order-1 bg-gradient-to-l from-gray-300 to-gray-400 shadow-xl w-12 h-12 rounded-full sm:col-auto sm:mb-8">
									{
										<>
											<svg xmlns="http://www.w2.org/2000/svg" className="h-6 w-6 mx-auto sm:hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto md:hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
											</svg>
										</>
									}
								</div>
								<Link href={`/about-me/${l.slug}`}>
									<div className="order-1 cursor-pointer transition-all duration-500 bg-gradient-to-tr from-green-50 to-green-500 hover:from-green-200 hover:to-green-500 rounded-lg shadow-xl hover:shadow-2xl hover:drop-shadow-xl px-6 py-4 md:w-5/12 sm:w-full sm:z-20 sm:col-auto">
										<h2 className="mb-1 font-bold text-black text-xl">{l.title}</h2>
										<h3 className="mb-2 italic text-md">{mmFromDate.format('YYYY/MM')} - {mmToDate.format('YYYY/MM')} [{mmToDate.diff(mmFromDate, 'months')} {timelinesTitles['months']}]</h3>
										<h3 className="mb-1 text-md">{timelinesTitles['workAsA']}: </h3>
										<ul className="mb-2 list-disc list-inside text-sm">
											{l.roles.map((e, k) => (
												<li key={k}>{e}</li>
											))}
										</ul>
										<p className="text-sm font-medium leading-snug tracking-wide text-black text-opacity-100 text-justify">{l.content}</p>
									</div>
								</Link>
							</div>
					);
				})}
			</div>
		</div>
	);
}