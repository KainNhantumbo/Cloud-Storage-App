import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Settings from '../pages/Settings';
import RecycleBin from '../pages/RecicleBin';

const AppRoutes: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/settings' element={<Settings />} />
			<Route path='/recycle-bin' element={<RecycleBin />} />
		</Routes>
	);
};

export default AppRoutes;
