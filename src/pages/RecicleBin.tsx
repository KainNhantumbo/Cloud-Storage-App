import { FC, useState } from 'react';
import { RecycleBinContainer as Container } from '../styles/recicleBin';
import { RecycleToolbox } from '../components/RecycleToolbox';
import { Header } from '../components/Header';
import { FaRecycle } from 'react-icons/all';
import { StatusMessage } from '../components/StatusMessage';
import { UserPanel } from '../components/modals/UserPanelModal';
import { Aside } from '../components/Aside';
import { useToolboxContext } from '../context/ToolboxContext';

const RecycleBin: FC = () => {
	const [itemsData, setItemsData] = useState([]);
	const { userPanelStatus } = useToolboxContext();

	
	return (
		<> 
			<Aside />
			<Container>
			{userPanelStatus ? <UserPanel /> : null}
				<Header toolbar={<RecycleToolbox title='Recycle Bin' />} />
				<article className='content'>
					{itemsData.length === 0 ? (
						<StatusMessage
							icon={<FaRecycle />}
							title={'Your recycle bin is empty.'}
							message={'Nothing to recycle.'}
						/>
					) : null}
				</article>
			</Container>
		</>
	);
};

export default RecycleBin;
