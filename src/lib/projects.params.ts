import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'ubivius',
		color: '#129f12',
		description:
			'An open-source cloud based microservice framework for online games. This was the graduate project I worked on. I mainly worked on microservice in Go, authentication and the deployment of game serves using Kubernetes',
		links: [{ to: 'https://github.com/Ubivius', label: 'GitHub' }],
		logo: Assets.Ubivius,
		name: 'Ubivius',
		period: {
			from: new Date('2020-05-01'),
			to: new Date('2021-12-17')
		},
		skills: getSkills('Go', 'Docker', 'Kubernetes'),
		type: 'Online game microservices'
	},
	{
		slug: 'sorting-visualizer',
		color: '#536fd8',
		description:
			'A sorting visualizer I created using Next.js',
		links: [{ to: 'https://github.com/', label: 'GitHub' }],
		logo: Assets.ReactJs,
		name: 'Sorting Visualizer',
		period: {
			from: new Date('2023-09')
		},
		skills: getSkills('react'),
		type: 'Web App'
	}
];

export default MY_PROJECTS;
