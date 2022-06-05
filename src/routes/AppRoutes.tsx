import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Settings from '../pages/Settings';
import RecycleBin from '../pages/RecicleBin';
import Recents from '../pages/Recents';
import Login from '../pages/Login';

const AppRoutes: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/settings' element={<Settings />} />
			<Route path='/recycle-bin' element={<RecycleBin />} />
			<Route path='/recents' element={<Recents />} />
			<Route path='/login' element={<Login />} />
		</Routes>
	);
};

export default AppRoutes;
