import { ThemeContext } from 'styled-components';
import { primary, dark } from '../themes/themes';
import { createContext, useContext, useState } from 'react';
import type { FC, ReactNode } from 'react';
import { ThemeObj } from '../themes/themeTypes';

interface Props {
	children: ReactNode;
}

const ThemeSeter: FC<Props> = ({ children }) => {
	const [themeSettings, setThemeSettings] = useState<ThemeObj>(primary);


	return (
		<ThemeContext.Provider value={themeSettings}>{children}</ThemeContext.Provider>
	);
};

export default ThemeSeter;
