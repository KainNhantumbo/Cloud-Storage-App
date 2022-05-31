import { FC, useState } from 'react';
import { RecentsContainer as Container } from '../styles/recents';
import { Toolbox } from '../components/Toolbox';
import { Header } from '../components/Header';
import { FaArchive } from 'react-icons/all';
import { StatusMessage } from '../components/StatusMessage';

const Recents: FC = () => {
	const [itemsData, setItemsData] = useState([]);

	return (
		<Container>
			<Header toolbar={<Toolbox />} />
			<article className='content'>
				{itemsData.length === 0 ? (
					<StatusMessage
						icon={<FaArchive />}
						title={'No recent files to be shown.'}
						message={'Have a nice day :)'}
					/>
				) : null}
			</article>
		</Container>
	);
};

export default Recents;
