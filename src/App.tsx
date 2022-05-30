import AppRoutes from './routes/AppRoutes';
import * as React from 'react';
import { Aside } from './components/Aside';

const App: React.FC = () => {
	return (
		<>
			<Aside />
			<AppRoutes />
		</>
	);
};

export default App;
