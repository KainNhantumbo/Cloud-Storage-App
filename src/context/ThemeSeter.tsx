import { ThemeContext } from 'styled-components';
import { primary, dark } from '../themes/themes';
import { createContext, useContext, useEffect, useState } from 'react';
import type { FC, ReactNode } from 'react';
interface Props {
	children: ReactNode;
}
interface ThemeSettings {
	dark_mode: boolean;
}

const themeContext = createContext({});

const ThemeSeter: FC<Props> = ({ children }) => {
	const [themeSettings, setThemeSettings] = useState<ThemeSettings>({
		dark_mode: false,
	});
	const [mode, setMode] = useState(primary);

	const themePrefers = (): void => {
		let theme_data = JSON.parse(localStorage.getItem('Settings'));

		if (!theme_data.dark_mode || theme_data.dark_mode === undefined) {
			theme_data.dark_mode = false;
			localStorage.setItem('Settings', JSON.stringify(theme_data));
			setThemeSettings(theme_data);
			setMode(primary);
			return;
		}
		setThemeSettings(theme_data);
		themeSwitcher();
	};

	const themeSwitcher = (): void => {
		if (themeSettings.dark_mode === false) {
			setMode(dark);
			setThemeSettings({ dark_mode: true });
			localStorage.setItem('Settings', JSON.stringify({ dark_mode: true }));
			return;
		}
		setMode(primary);
		setThemeSettings({ dark_mode: false });
		localStorage.setItem('Settings', JSON.stringify({ dark_mode: false }));
	};

	useEffect(() => {
		themePrefers();
	}, []);

	return (
		<ThemeContext.Provider value={mode}>
			<themeContext.Provider value={{ themeSwitcher }}>
				{children}
			</themeContext.Provider>
		</ThemeContext.Provider>
	);
};

export const useThemeContext = (): unknown => {
	const themeSeter = useContext(themeContext);
	return themeSeter;
};

export default ThemeSeter;
