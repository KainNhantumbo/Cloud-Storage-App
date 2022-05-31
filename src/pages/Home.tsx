import { FC, useState } from 'react';
import { HomeContainer as Container } from '../styles/home';
import { Toolbox } from '../components/Toolbox';
import { Header } from '../components/Header';
import { BiWifiOff } from 'react-icons/all';
import { StatusMessage } from '../components/StatusMessage';

const Home: FC = () => {
	const [itemsData, setItemsData] = useState([]);

	return (
		<Container>
			<Header toolbar={<Toolbox title={'Cloud Drive'} />} />
			<article className='content'>
				{itemsData.length === 0 ? (
					<StatusMessage
						icon={<BiWifiOff />}
						title={'No internet connection'}
						message={
							'Troubleshoot your connection settings or try again later.'
						}
					/>
				) : null}
			</article>
		</Container>
	);
};

export default Home;
