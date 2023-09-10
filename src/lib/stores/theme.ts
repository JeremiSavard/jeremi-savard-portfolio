import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const key = '@riadh-adrani-theme';

const updateLocalStorage = (value: boolean) => {
	if (browser) {
		localStorage.setItem(key, JSON.stringify(value));
	}
};

export const theme = writable<boolean>(false);

export const toggleTheme = (value?: boolean) =>
	theme.update((it) => {
		const $v = typeof value === 'boolean' ? value : !it;

		updateLocalStorage($v);

		document.querySelector(':root')?.setAttribute('data-theme', $v ? 'dark' : 'light');

		// Get both moon and sun icons
		const moonIcon = document.querySelector('#moon-icon') as HTMLElement;
		const sunIcon = document.querySelector('#sun-icon') as HTMLElement;
	
		// Update icon colors based on the theme
		if (moonIcon && sunIcon) {
		  if ($v) {
			moonIcon.style.fill = 'var(--secondary-text-dark)';
			sunIcon.style.fill = 'var(--secondary-text-light)';
		  } else {
			moonIcon.style.fill = 'var(--secondary-text-light)';
			sunIcon.style.fill = 'var(--secondary-text-dark)';
		  }
		}

		return $v;
	});

export const onHydrated = () => {
	const fromStore = localStorage.getItem(key);

	if (!fromStore) {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			// dark mode
			toggleTheme(true);
		}
	} else {
		toggleTheme(JSON.parse(fromStore));
	}
};
