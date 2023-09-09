import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import MY_RESUME from './resume.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Jeremi Savard Portfolio';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Jeremi',
	lastName: 'SAVARD',
	description:
		'Software Developer and DevOps - Based in Montreal',
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/JeremiSavard' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/jérémi-savard-33553b1a3/'
		},
		{
			platform: Platform.StackOverflow,
			link: 'https://stackoverflow.com/users/14608141/jeresava'
		},
		{
			platform: Platform.Email,
			link: 'jeremi.savard@usherbrooke.ca'
		}
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resume',
	item: MY_RESUME
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};
