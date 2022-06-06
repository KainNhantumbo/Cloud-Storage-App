import AppRoutes from './routes/AppRoutes';
import * as React from 'react';
import ToolboxContext from './context/ToolboxContext';

const App: React.FC = () => {
	return (
		<ToolboxContext>
			<AppRoutes />
		</ToolboxContext>
	);
};

export default App;
