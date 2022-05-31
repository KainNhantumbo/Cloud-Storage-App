import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Settings from '../pages/Settings';

const AppRoutes: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/settings' element={<Settings />} />
		</Routes>
	);
};

export default AppRoutes;
