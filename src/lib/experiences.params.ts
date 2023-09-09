import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'devops-lead',
		company: 'Laplace Insights',
		description: 'Design and maintain a cloud architecture on AWS and a CI/CD pipeline',
		contract: ContractType.FullTime,
		type: 'DevOps',
		location: 'Sherbrooke, Qc, Canada',
		period: { from: new Date('2022-06-10') },
		skills: getSkills('AWS', 'Docker', 'PostgreSQL', 'Python'),
		name: 'DevOps Tech Lead',
		color: '#ffffff',
		links: [],
		logo: Assets.LaplaceInsights
	},
	{
		slug: 'analyst-programmer',
		company: 'IBM',
		description: 'Develop Java microservices and APIs',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Bromont, Qc, Canada',
		period: { from: new Date('2022-01-10'),
				  to: new Date('2022-06-20') },
		skills: getSkills('Java', 'PostgreSQL'),
		name: 'Analyst Programmer',
		color: '#ffffff',
		links: [],
		logo: Assets.IBM
	},
	{
		slug: 'online-programmer',
		company: 'Ubisoft Montreal',
		description: 'Work on a new platform to run game servers using a custom implementation of Agones',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Montreal, Qc, Canada',
		period: { from: new Date('2021-04-10'),
				  to: new Date('2021-08-20') },
		skills: getSkills('Csharp', 'Docker', 'Kubernetes'),
		name: 'Online Programmer',
		color: '#ffffff',
		links: [],
		logo: Assets.Ubisoft
	},
	{
		slug: 'bi',
		company: 'Ubisoft Montreal',
		description: 'Develop and find relevant metrics for matchmaking services in C#/.Net',
		contract: ContractType.Internship,
		type: 'Software Development & BI',
		location: 'Montreal, Qc, Canada',
		period: { from: new Date('2020-08-10'),
				  to: new Date('2020-12-20') },
		skills: getSkills('Csharp'),
		name: 'Business intelligence developer',
		color: '#ffffff',
		links: [],
		logo: Assets.Ubisoft
	},
	{
		slug: 'fullstack-dev',
		company: 'Sherweb',
		description: 'Full Stack dev within an azure environment',
		contract: ContractType.Internship,
		type: 'Full Stack Software Development',
		location: 'Sherbrooke, Qc, Canada',
		period: { from: new Date('2019-08-10'),
				  to: new Date('2019-12-20') },
		skills: getSkills('Csharp'),
		name: 'Web developer full stack C#/.Net',
		color: '#ffffff',
		links: [],
		logo: Assets.Sherweb
	},
	{
		slug: 'frontend-intership',
		company: 'CGI',
		description: 'Creating front-end component library in Angular',
		contract: ContractType.Internship,
		type: 'Front-end Development',
		location: 'Sherbrooke, Qc, Canada',
		period: { from: new Date('2019-01-10'),
				  to: new Date('2019-04-20') },
		skills: getSkills(),
		name: 'Front-end web developer',
		color: '#ffffff',
		links: [],
		logo: Assets.CGI
	}
];

export default MY_EXPERIENCES;
