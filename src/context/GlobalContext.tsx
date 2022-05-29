import type { ReactNode, FC } from 'react';
import { createContext, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { GlobalStyles } from '../styles/Globalstyles';
import { primary, dark } from '../themes/themes';

interface props {
	children: ReactNode;
}

const AppContext = createContext({});

const GlobalContext: FC<props> = ({ children }) => {
	return (
		<ThemeContext.Provider value={primary}>
      <GlobalStyles/>
			<AppContext.Provider value={primary}>
        {children}
      </AppContext.Provider>
		</ThemeContext.Provider>
	);
};

// custom hook that delivers app context
export const useGlobalContext = () => {
	const context = useContext(AppContext);
	return context;
};
export default GlobalContext;
