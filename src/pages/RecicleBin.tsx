import { FC, useState } from 'react';
import { RecycleBinContainer as Container } from '../styles/recicleBin';
import { RecycleToolbox } from '../components/RecycleToolbox';
import { Header } from '../components/Header';
import { FaRecycle } from 'react-icons/all';
import { StatusMessage } from '../components/StatusMessage';

const RecycleBin: FC = () => {
	const [itemsData, setItemsData] = useState([]);

	return (
		<Container>
			<Header toolbar={<RecycleToolbox title='Recycle Bin' />} />
			<article className='content'>
				{itemsData.length === 0 ? (
					<StatusMessage
						icon={<FaRecycle />}
						title={'Nothing to Recycle.'}
						message={'Have a nice day :)'}
					/>
				) : null}
			</article>
		</Container>
	);
};

export default RecycleBin;
