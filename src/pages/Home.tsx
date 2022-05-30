import { FC } from 'react';
import { HomeContainer as Container } from '../styles/home';
import { Toolbox } from '../components/Toolbox';
import { Header } from '../components/Header';
const Home: FC = () => {
	return (
		<Container>
			<Header toolbar={<Toolbox />} />
			<article className='content'>
				<div>duhfisuhdfioshidufhsiudfh</div>
			</article>
		</Container>
	);
};

export default Home;
