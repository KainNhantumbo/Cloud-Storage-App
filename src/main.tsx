import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/main.css'
import App from './App';
import GlobalContext from './context/GlobalContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalContext>
			<App />
		</GlobalContext>
	</React.StrictMode>
);
