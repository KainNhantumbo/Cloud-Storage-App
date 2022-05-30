import AppRoutes from './routes/AppRoutes';
import * as React from 'react';
import { Aside } from './components/Aside';
import { Header } from './components/Header';

const App: React.FC = () => {
	return (
		<>
			<Aside />
			<Header />
			<AppRoutes />
		</>
	);
};

export default App;
