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
		const themeValue = $v ? 'dark' : 'light';

		updateLocalStorage($v);

		// Ensure that data-theme is always set to 'dark' or 'light'
		if (themeValue === 'dark' || themeValue === 'light') {
			document.querySelector(':root')?.setAttribute('data-theme', themeValue);
		} else {
			// Default to 'light' if the themeValue is invalid
			document.querySelector(':root')?.setAttribute('data-theme', 'light');
		}

		console.log('Theme toggled:', $v);

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
