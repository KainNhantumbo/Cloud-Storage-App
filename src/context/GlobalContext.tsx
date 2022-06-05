import type { ReactNode, FC } from 'react';
import { createContext, useContext } from 'react';
import { GlobalStyles } from '../styles/Globalstyles';
import ThemeSeter from './ThemeSeter'
interface Props {
	children: ReactNode;
}

const AppContext = createContext({});

const GlobalContext: FC<Props> = ({ children }) => {
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
