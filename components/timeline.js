import { Component } from 'react'

class Timeline extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lines: [
				{
					title: `Easy IT Solutions`,
					content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
					time: '2021/04 - 2021/08'
				},
				{
					title: `ExE Company`,
					content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
					time: '2021/01 - 2021/04'
				},
				{
					title: `Reso Group`,
					content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
					time: '2021/01 - 2021/04'
				},
				{
					title: `Wisky`,
					content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
					time: '2021/01 - 2021/04'
				},
			]
		}
	}

	render() {
		return (
			<div className="container mx-auto mt-12 bg-none w-full h-full">
				<h1 className="text-2xl text-black text-center font-bold"> My Journey </h1>
				<div className="relative wrap overflow-hidden md:p-10 sm:px-2 sm:py-6 h-full">
					{this.state.lines.map((l, k) => {
						const kPlusOne = k + 1;
						const isFirst = kPlusOne === 1;
						return (
							(k + 1) % 2 === 0
								? <div key={k} className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
									<div className="order-1 w-5/12"></div>
									<div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
										<h1 className="mx-auto text-white font-semibold text-lg">{isFirst ? 'Now' : '️⬆️'}</h1>
									</div>
									<div className="order-1 bg-green-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
										<h3 className="mb-3 font-bold text-black text-xl text-justify">{l.title}</h3>
										<p className="text-sm font-medium leading-snug tracking-wide text-black text-opacity-100 text-justify">{l.content}</p>
									</div>
								</div>
								: <div key={k}>
									<div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
									<div className="mb-8 flex justify-between items-center w-full right-timeline">
										<div className="order-1 w-5/12"></div>
										<div className={`z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full ${isFirst && 'border-4 border-green-400 animate-bounce'}`}>
											<h1 className="mx-auto text-md text-white">{isFirst ? 'Now' : '️⬆️'}</h1>
										</div>
										<div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
											<h3 className="mb-3 font-bold text-gray-800 text-xl text-justify">{l.title}</h3>
											<p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 text-justify">{l.content}</p>
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