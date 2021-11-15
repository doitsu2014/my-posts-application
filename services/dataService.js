import moment from 'moment';

export default function DataService() {
	this.getTimelines = () => ([
		{
			slug: 'easy-it-solutions',
			title: `Easy IT Solutions (OneAP Team)`,
			content: `They have been developing an ecosystem to provide a solution, that resolves problems about B2B Payments.`,
			fromDate: moment('2019-07'),
			toDate: moment(),
			roles: ['Senior Dotnet Developer'],
			isWorking: true,
		},
		{
			slug: 'exe',
			title: `ExE (Out-sourcing Team)`,
			content: `There is an outsourcing development environment, I worked on it as an Engineer to develop outsource softwares.`,
			roles: ['Fullstack Developer', 'Project Manager'],
			fromDate: moment('2019-03'),
			toDate: moment('2019-07'),
			isWorking: false,
		},
		{
			slug: 'reso-group',
			title: `Reso Group`,
			content: `A child company of Wisky Solution, It has been developing the softwares to serves F&B merchants, there are PoS, CMS.`,
			roles: ['Team Leader'],
			fromDate: moment('2018-06'),
			toDate: moment('2019-03'),
			isWorking: false,
		},
		{
			slug: 'wisky',
			title: `Wisky`,
			content: `They are called as Wisky Solution Co., LTD, and they have been providing the solution about Wifi Marketing at Food and Beverage(F&B) merchants.`,
			roles: ['Junior .Net Developer', 'Fullstack Developer', 'Trainer'],
			fromDate: moment('2017-04'),
			toDate: moment('2018-06'),
			isWorking: false,
		}
	]);

	return this;
}