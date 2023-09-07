import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';
import aws from './md/aws.md?raw';
import csharp from './md/csharp.md?raw';
import java from './md/java.md?raw';
import python from './md/python.md?raw';
import postgresql from './md/postgresql.md?raw';
import docker from './md/docker.md?raw';
import react from './md/react.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'aws',
		color: 'yellow',
		description: aws,
		logo: Assets.AWS,
		name: 'AWS'
	}),
	s({
		slug: 'Csharp',
		color: 'purple',
		description: csharp,
		logo: Assets.Csharp,
		name: 'C#'
	}),
	s({
		slug: 'Java',
		color: 'red',
		description: java,
		logo: Assets.Java,
		name: 'Java'
	}),
	s({
		slug: 'Python',
		color: 'green',
		description: python,
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'PostgreSQL',
		color: 'blue',
		description: postgresql,
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL'
	}),
	s({
		slug: 'Docker',
		color: 'blue',
		description: docker,
		logo: Assets.Docker,
		name: 'Docker'
	}),
	s({
		slug: 'react',
		color: 'cyan',
		description:react,
		logo: Assets.ReactJs,
		name: 'React'
	}),
	s({
		slug: 'svelte',
		color: 'orange',
		description: svelte,
		logo: Assets.Svelte,
		name: 'Svelte'
	})
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
