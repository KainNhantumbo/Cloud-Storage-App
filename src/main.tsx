import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/main.css';
import App from './App';
import GlobalContext from './context/GlobalContext';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalContext>
			<Router>
				<App />
			</Router>
		</GlobalContext>
	</React.StrictMode>
);
