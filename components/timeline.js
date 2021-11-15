import { Component } from 'react'
import moment from 'moment';
class Timeline extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lines: [
				{
					slug: 'easy-it-solutions',
					title: `Easy IT Solutions (OneAP Team)`,
					content: `They have been developing an ecosystem to provide a solution, that resolves problems about B2B Payments.`,
					fromDate: moment(Date.parse('2021/04')),
					toDate: moment(Date.now()),
					roles: ['Senior Dotnet Developer'],
					isWorking: true,
				},
				{
					slug: 'exe',
					title: `ExE (Out-sourcing Team)`,
					content: `There is an outsourcing development environment, I worked on it as an Engineer to develop outsource softwares.`,
					roles: ['Fullstack Developer', 'Project Manager'],
					fromDate: moment(Date.parse('2021/04')),
					toDate: moment(Date.parse('2021/04')),
					isWorking: false,
				},
				{
					slug: 'reso-group',
					title: `Reso Group`,
					content: `A child company of Wisky Solution, It has been developing the softwares to serves F&B merchants, there are PoS, CMS.`,
					roles: ['Team Leader'],
					fromDate: moment(Date.parse('2018/06')),
					toDate: moment(Date.parse('2019/03')),
					isWorking: false,
				},
				{
					slug: 'wisky',
					title: `Wisky`,
					content: `They are called as Wisky Solution Co., LTD, and they have been providing the solution about Wifi Marketing at Food and Beverage(F&B) merchants.`,
					roles: ['Junior .Net Developer', 'Fullstack Developer', 'Trainer'],
					fromDate: moment(Date.parse('2017/04')),
					toDate: moment(Date.parse('2018/06')),
					isWorking: false,
				},
			]
		}
	}

	render() {
		return (
			<div className="container mx-auto mt-12 bg-none w-full h-full">
				<h1 className="text-2xl text-black text-center font-bold">My Journey</h1>
				<div className="relative wrap overflow-hidden md:p-10 sm:px-2 sm:py-6 h-full">
					{this.state.lines.map((l, k) => {
						const kPlusOne = k + 1;
						const isFirst = kPlusOne === 1;
						return (
							(k + 1) % 2 === 0
								? <div key={k} className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
									<div className="order-1 w-5/12"></div>
									<div className="z-20 flex items-center order-1 bg-gray-400 shadow-xl w-12 h-12 rounded-full">
										{
											<svg xmlns="http://www.w2.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
											</svg>
										}

									</div>
									<div className="order-1 bg-gradient-to-tl from-green-100 to-green-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
										<h2 className="mb-1 font-bold text-black text-xl">{l.title}</h2>
										<h3 className="mb-2 italic text-md">[{l.fromDate.format('YYYY-MM')} - {l.toDate.format('YYYY-MM')}]</h3>
										<h3 className="mb-1 text-md">Work as a: </h3>
										<ul className="mb-2 list-disc list-inside text-sm">
											{l.roles.map((e, k) => (
												<li key={k}>{e}</li>
											))}
										</ul>

										<p className="text-sm font-medium leading-snug tracking-wide text-black text-opacity-100 text-justify">{l.content}</p>
									</div>
								</div>
								: <div key={k}>
									<div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
									<div className="mb-8 flex justify-between items-center w-full right-timeline">
										<div className="order-1 w-5/12"></div>
										<div className={`z-20 flex items-center order-1 bg-gray-400 shadow-xl w-12 h-12 rounded-full ${isFirst && 'border-4 border-green-400 animate-bounce'}`}>
											{
												isFirst ?
													<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
													</svg>
													:
													<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
													</svg>
											}
										</div>
										<div className="order-1 bg-gradient-to-tr from-gray-100 to-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
											<h2 className="mb-1 font-bold text-gray-800 text-xl text-justify">{l.title}</h2>
											<h3 className="mb-2 italic text-md">[{l.fromDate.format('YYYY-MM')} - {l.isWorking ? 'now' : l.toDate.format('YYYY-MM')}]</h3>
											<h3 className="mb-1 text-md">Work as a: </h3>
											<ul className="mb-2 list-disc list-inside text-sm">
												{l.roles.map((e, k) => (
													<li key={k}>{e}</li>
												))}
											</ul>
											<p className="mb-2 text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 text-justify">{l.content}</p>
										</div>
									</div>
								</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Timeline