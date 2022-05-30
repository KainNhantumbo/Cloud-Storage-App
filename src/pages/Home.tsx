import { FC } from 'react';
import { HomeContainer as Container } from '../styles/home';
import { Aside } from '../components/Aside';

const Home: FC = () => {
	return (
		<Container>
			<Aside />
			<header></header>
		</Container>
	);
};

export default Home;
