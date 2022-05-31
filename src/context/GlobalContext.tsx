import type { ReactNode, FC } from 'react';
import { createContext, useContext } from 'react';
import { GlobalStyles } from '../styles/Globalstyles';
import ThemeSeter from './ThemeSeter'

interface props {
	children: ReactNode;
}

const AppContext = createContext({});

const GlobalContext: FC<props> = ({ children }) => {
	return (
		<ThemeSeter >
      <GlobalStyles/>
			<AppContext.Provider value={{}}>
        {children}
      </AppContext.Provider>
		</ThemeSeter>
	);
};

// custom hook that delivers app context
export const useGlobalContext = () => {
	const context = useContext(AppContext);
	return context;
};
export default GlobalContext;
